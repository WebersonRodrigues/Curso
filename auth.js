// auth.js — Módulo de Autenticação
// Centraliza lógica de autenticação, verificação de sessão e proteção de rotas.
// Depende de: supabaseClient (global de supabase-config.js), registrarAcesso (de access-log.js)

/**
 * Verifica se a página atual é uma página de aula (ex: /Aula-01/index.html).
 */
function isPaginaDeAula() {
  return /\/Aula-\d+\//i.test(window.location.pathname);
}

/**
 * Verifica se o usuário entrou como visitante (anônimo).
 */
function isVisitante() {
  return sessionStorage.getItem('visitante') === 'true';
}

/**
 * Entra como visitante sem autenticação.
 * Simplesmente oculta o login e exibe o conteúdo.
 */
function entrarAnonimo() {
  sessionStorage.setItem('visitante', 'true');
  const loginOverlay = document.getElementById('loginOverlay');
  const appContent = document.getElementById('appContent');
  if (loginOverlay) loginOverlay.style.display = 'none';
  if (appContent) appContent.style.display = '';
}

/**
 * Inicializa a autenticação.
 * - Se há sessão ativa: exibe conteúdo, oculta login, exibe usuário na toolbar,
 *   faz upsert do perfil e registra acesso.
 * - Se não há sessão na página principal: exibe tela de login, oculta conteúdo.
 * - Se não há sessão em página de aula: redireciona para ../index.html.
 */
async function initAuth() {
  try {
    const { data, error } = await supabaseClient.auth.getSession();

    if (error) {
      console.warn('Erro ao verificar sessão:', error.message);
    }

    const session = data?.session;

    if (session) {
      // Sessão ativa — liberar conteúdo
      const loginOverlay = document.getElementById('loginOverlay');
      const appContent = document.getElementById('appContent');

      if (loginOverlay) loginOverlay.style.display = 'none';
      if (appContent) appContent.style.display = '';

      exibirUsuarioNaToolbar();
      await upsertUsuario(session.user);

      if (typeof registrarAcesso === 'function') {
        registrarAcesso(window.location.pathname);
      }
    } else {
      // Sem sessão — verificar se é visitante
      if (isVisitante()) {
        const loginOverlay = document.getElementById('loginOverlay');
        const appContent = document.getElementById('appContent');
        if (loginOverlay) loginOverlay.style.display = 'none';
        if (appContent) appContent.style.display = '';
        return;
      }

      if (isPaginaDeAula()) {
        window.location.href = '../index.html';
        return;
      }

      // Página principal — exibir login, ocultar conteúdo
      const loginOverlay = document.getElementById('loginOverlay');
      const appContent = document.getElementById('appContent');

      if (loginOverlay) loginOverlay.style.display = '';
      if (appContent) appContent.style.display = 'none';
    }

    // Escutar mudanças de estado de autenticação (necessário para iOS standalone)
    supabaseClient.auth.onAuthStateChange((event, session) => {
        if (event === 'SIGNED_IN' && session) {
            const loginOverlay = document.getElementById('loginOverlay');
            const appContent = document.getElementById('appContent');
            if (loginOverlay) loginOverlay.style.display = 'none';
            if (appContent) appContent.style.display = '';
            exibirUsuarioNaToolbar();
            upsertUsuario(session.user);
            if (typeof registrarAcesso === 'function') {
                registrarAcesso(window.location.pathname);
            }
        }
    });
  } catch (err) {
    console.warn('Erro inesperado em initAuth:', err);
  }
}

/**
 * Inicia o fluxo de login com Google via Supabase OAuth.
 * Em caso de erro, exibe mensagem no container de erro.
 */
async function loginComGoogle() {
  try {
    if (Platform.isIOS && Platform.isStandalone) {
      // iOS standalone: abrir OAuth no Safari via window.open
      const { data, error } = await supabaseClient.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: window.location.origin,
          skipBrowserRedirect: true
        }
      });
      if (data?.url) {
        window.open(data.url, '_blank');
      }
      if (error) {
        const loginError = document.getElementById('loginError');
        if (loginError) {
          loginError.textContent = 'Erro ao fazer login: ' + error.message;
          loginError.style.display = '';
        }
        console.warn('Erro no login com Google:', error.message);
      }
    } else {
      // Fluxo normal: redirect
      const { error } = await supabaseClient.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: window.location.origin
        }
      });
      if (error) {
        const loginError = document.getElementById('loginError');
        if (loginError) {
          loginError.textContent = 'Erro ao fazer login: ' + error.message;
          loginError.style.display = '';
        }
        console.warn('Erro no login com Google:', error.message);
      }
    }
  } catch (err) {
    const loginError = document.getElementById('loginError');
    if (loginError) {
      loginError.textContent = 'Erro inesperado ao fazer login. Tente novamente.';
      loginError.style.display = '';
    }
    console.warn('Erro inesperado em loginComGoogle:', err);
  }
}

/**
 * Encerra a sessão do usuário e redireciona para a tela de login.
 */
async function logout() {
  try {
    await supabaseClient.auth.signOut();
  } catch (err) {
    console.warn('Erro ao fazer logout:', err);
  }
  // Redireciona para a página principal (login)
  if (isPaginaDeAula()) {
    window.location.href = '../index.html';
  } else {
    window.location.reload();
  }
}

/**
 * Retorna os dados do usuário autenticado da sessão atual.
 * Retorna null se não houver sessão ativa.
 */
async function getUsuarioAtual() {
  try {
    const { data, error } = await supabaseClient.auth.getSession();
    if (error || !data?.session) return null;
    return data.session.user;
  } catch (err) {
    console.warn('Erro ao obter usuário atual:', err);
    return null;
  }
}

/**
 * Verifica se o email fornecido está na lista de administradores.
 * A lista ADMIN_EMAILS é definida em supabase-config.js.
 */
function verificarAdmin(email) {
  if (!email || typeof ADMIN_EMAILS === 'undefined') return false;
  return ADMIN_EMAILS.includes(email);
}

/**
 * Cria ou atualiza o perfil do usuário na tabela `usuarios`.
 * No primeiro login, cria o registro. Em logins subsequentes, atualiza `ultimo_acesso`.
 */
async function upsertUsuario(user) {
  try {
    if (!user) return;

    const { error } = await supabaseClient
      .from('usuarios')
      .upsert({
        id: user.id,
        nome: user.user_metadata?.full_name || user.email,
        email: user.email,
        foto_url: user.user_metadata?.avatar_url || null,
        ultimo_acesso: new Date().toISOString()
      }, {
        onConflict: 'id'
      });

    if (error) {
      console.warn('Erro ao upsert usuário:', error.message);
    }
  } catch (err) {
    console.warn('Erro inesperado em upsertUsuario:', err);
  }
}

/**
 * Renderiza nome, foto e botão "Sair" do usuário na toolbar.
 * Busca o container com classe `.user-info`.
 */
async function exibirUsuarioNaToolbar() {
  try {
    const user = await getUsuarioAtual();
    if (!user) return;

    const container = document.querySelector('.user-info');
    if (!container) return;

    const nome = user.user_metadata?.full_name || user.email;
    const fotoUrl = user.user_metadata?.avatar_url;

    const fotoHTML = fotoUrl
      ? `<img src="${fotoUrl}" alt="Foto de ${nome}" class="user-avatar" referrerpolicy="no-referrer">`
      : `<div class="user-avatar user-avatar-placeholder">${nome.charAt(0).toUpperCase()}</div>`;

    container.innerHTML = `
      ${fotoHTML}
      <span class="user-name">${nome}</span>
      <button class="logout-btn" onclick="logout()">Sair</button>
    `;
  } catch (err) {
    console.warn('Erro ao exibir usuário na toolbar:', err);
  }
}
