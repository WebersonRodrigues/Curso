// access-log.js — Módulo de Registro de Acessos
// Registra cada acesso do usuário no banco de dados Supabase.
// Depende de: supabaseClient (global de supabase-config.js)

/**
 * Registra um acesso na tabela `registros_acesso`.
 * Obtém os dados do usuário da sessão ativa do Supabase.
 * Falhas são silenciosas (console.warn) — nunca bloqueiam o app.
 *
 * @param {string} [pagina] - Caminho da página acessada. Se não fornecido, detecta via window.location.pathname.
 */
async function registrarAcesso(pagina) {
  try {
    const paginaAcessada = pagina || window.location.pathname;

    const { data, error: sessionError } = await supabaseClient.auth.getSession();

    if (sessionError || !data?.session) {
      return;
    }

    const user = data.session.user;

    const { error } = await supabaseClient
      .from('registros_acesso')
      .insert({
        usuario_id: user.id,
        nome: user.user_metadata?.full_name || user.email,
        email: user.email,
        pagina: paginaAcessada,
        acessado_em: new Date().toISOString()
      });

    if (error) {
      console.warn('Erro ao registrar acesso:', error.message);
    }
  } catch (err) {
    console.warn('Erro inesperado em registrarAcesso:', err);
  }
}
