# Plano de Implementação: Autenticação Google e Analytics

## Visão Geral

Implementação incremental da autenticação via Google OAuth (Supabase) e painel de analytics para o PWA "Inglês com Tio Binho". Cada tarefa constrói sobre a anterior, começando pela configuração base e terminando com a integração completa.

## Tarefas

- [x] 1. Configuração base do Supabase e estrutura do banco de dados
  - [x] 1.1 Criar o arquivo `supabase-config.js` na raiz do projeto
    - Inicializar o cliente Supabase com `SUPABASE_URL`, `SUPABASE_ANON_KEY` e lista de emails de admin
    - Expor a variável global `supabase` via `window.supabase.createClient()`
    - _Requisitos: 7.1, 7.2_

  - [x] 1.2 Criar as tabelas e políticas RLS no Supabase (SQL)
    - Criar tabela `usuarios` com campos: id (UUID PK → auth.users), nome, email, foto_url, primeiro_acesso, ultimo_acesso
    - Criar tabela `registros_acesso` com campos: id (BIGSERIAL PK), usuario_id (FK), nome, email, pagina, acessado_em
    - Habilitar RLS em ambas as tabelas com políticas de leitura/escrita própria
    - Criar índices em `registros_acesso` (usuario_id, acessado_em, pagina)
    - _Requisitos: 7.3, 7.4, 7.5_

  - [x] 1.3 Criar as funções RPC para analytics (SQL)
    - Criar função `is_admin()` que verifica se o email do usuário está na lista de admins
    - Criar função `admin_listar_usuarios()` que retorna todos os usuários com total de acessos (SECURITY DEFINER)
    - Criar função `admin_acessos_por_periodo(data_inicio, data_fim)` que retorna acessos agrupados por dia (SECURITY DEFINER)
    - _Requisitos: 6.1, 6.2, 6.3, 6.4, 6.5, 6.6, 7.5_

- [x] 2. Módulo de autenticação (`auth.js`)
  - [x] 2.1 Criar o arquivo `auth.js` com as funções de autenticação
    - Implementar `initAuth()` — verifica sessão existente via `supabase.auth.getSession()`
    - Implementar `loginComGoogle()` — chama `supabase.auth.signInWithOAuth({ provider: 'google' })` com redirect
    - Implementar `logout()` — chama `supabase.auth.signOut()` e redireciona para login
    - Implementar `getUsuarioAtual()` — retorna dados do usuário autenticado
    - Implementar `verificarAdmin(email)` — verifica se email está na lista de admins de `supabase-config.js`
    - Implementar `upsertUsuario(user)` — cria ou atualiza perfil na tabela `usuarios` via upsert
    - Implementar `exibirUsuarioNaToolbar()` — renderiza nome, foto e botão "Sair" na toolbar
    - Se sem sessão na página principal: exibir tela de login e ocultar conteúdo
    - Se sem sessão em página de aula: redirecionar para `../index.html`
    - _Requisitos: 1.1, 1.2, 1.3, 1.4, 2.1, 2.2, 2.3, 2.4, 3.1, 3.2, 3.3, 5.1, 5.2, 5.3_

  - [ ]* 2.2 Escrever teste de propriedade — Usuário não autenticado vê tela de login
    - **Propriedade 1: Usuário não autenticado vê tela de login**
    - **Valida: Requisitos 1.1, 3.2**

  - [ ]* 2.3 Escrever teste de propriedade — Botão de login inicia OAuth com provedor correto
    - **Propriedade 2: Botão de login inicia OAuth com provedor correto**
    - **Valida: Requisito 1.2**

  - [ ]* 2.4 Escrever teste de propriedade — Erro de OAuth exibe mensagem e mantém tela de login
    - **Propriedade 3: Erro de OAuth exibe mensagem e mantém tela de login**
    - **Valida: Requisito 1.4**

  - [ ]* 2.5 Escrever teste de propriedade — Sessão ativa libera acesso a qualquer página
    - **Propriedade 4: Sessão ativa libera acesso a qualquer página**
    - **Valida: Requisitos 1.3, 2.1, 3.3**

  - [ ]* 2.6 Escrever teste de propriedade — Sem sessão válida, páginas de aula redirecionam para login
    - **Propriedade 5: Sem sessão válida, páginas de aula redirecionam para login**
    - **Valida: Requisitos 2.2, 3.1**

  - [ ]* 2.7 Escrever teste de propriedade — Logout encerra sessão e exibe login
    - **Propriedade 6: Logout encerra sessão e exibe login**
    - **Valida: Requisito 2.3**

  - [ ]* 2.8 Escrever teste de propriedade — Toolbar exibe dados do usuário autenticado
    - **Propriedade 7: Toolbar exibe dados do usuário autenticado**
    - **Valida: Requisito 2.4**

  - [ ]* 2.9 Escrever teste de propriedade — Upsert de usuário sem duplicação
    - **Propriedade 10: Upsert de usuário — primeiro login cria, login subsequente atualiza sem duplicar**
    - **Valida: Requisitos 5.1, 5.2, 5.3**

- [x] 3. Módulo de registro de acessos (`access-log.js`)
  - [x] 3.1 Criar o arquivo `access-log.js` com a função `registrarAcesso(pagina)`
    - Inserir registro na tabela `registros_acesso` com usuario_id, nome, email, pagina e timestamp
    - Detectar página automaticamente via `window.location.pathname`
    - Falhas devem ser silenciosas (`console.warn`) — nunca bloquear o app
    - _Requisitos: 4.1, 4.2, 4.3, 4.4_

  - [ ]* 3.2 Escrever teste de propriedade — Acesso autenticado gera registro completo no banco
    - **Propriedade 8: Acesso autenticado gera registro completo no banco**
    - **Valida: Requisitos 4.1, 4.2, 4.3**

  - [ ]* 3.3 Escrever teste de propriedade — Falha no registro de acesso não bloqueia o app
    - **Propriedade 9: Falha no registro de acesso não bloqueia o app**
    - **Valida: Requisito 4.4**

- [x] 4. Checkpoint — Verificar módulos base
  - Garantir que todos os testes passam, perguntar ao usuário se há dúvidas.

- [x] 5. Integrar autenticação na página principal (`index.html`)
  - [x] 5.1 Adicionar scripts e tela de login ao `index.html`
    - Adicionar `<script>` tags para SDK Supabase (CDN), `supabase-config.js`, `auth.js`, `access-log.js`
    - Criar container HTML para tela de login com:
      - Background com gradiente do app (`linear-gradient(135deg, #FF6B6B 0%, #4ECDC4 50%, #FFD93D 100%)`)
      - Card central branco com border-radius 20px e sombra suave
      - Logo do Tio Binho (`icone-192.png`) centralizada no topo do card (~120px)
      - Título "Inglês com Tio Binho" (DM Sans 700)
      - Subtítulo motivacional (ex: "Sua jornada no inglês começa aqui! 🚀")
      - Botão "Entrar com Google" seguindo o padrão visual do Google Sign-In (fundo branco, ícone Google, borda #dadce0)
      - Área de mensagem de erro (vermelho #e63946, visível apenas quando há erro)
      - Texto auxiliar "Acesse com sua conta Google para começar a aprender"
    - Adicionar container para info do usuário na toolbar (foto circular + nome + botão "Sair")
    - O conteúdo existente fica oculto (`display: none`) até autenticação confirmar sessão
    - Transição suave ao exibir conteúdo após login
    - Chamar `initAuth()` e `registrarAcesso()` no carregamento da página
    - _Requisitos: 1.1, 1.5, 2.4, 3.2, 4.1, 7.1_

  - [x] 5.2 Adicionar estilos de login e user info ao `style.css`
    - Criar estilos para `.login-overlay` (tela cheia com gradiente do app como background)
    - Criar estilos para `.login-card` (card branco centralizado, border-radius 20px, box-shadow, max-width 420px)
    - Criar estilos para `.login-logo` (imagem centralizada ~120px)
    - Criar estilos para `.login-title` e `.login-subtitle` (tipografia DM Sans)
    - Criar estilos para `.login-btn-google` (padrão Google Sign-In: fundo branco, borda #dadce0, ícone, hover com sombra)
    - Criar estilos para `.login-error` (texto vermelho #e63946, fade-in animation)
    - Criar estilos para `.login-helper-text` (texto auxiliar cinza #999)
    - Criar estilos para `.user-info`, `.user-avatar` (foto circular 36px), `.user-name`, `.logout-btn` na toolbar
    - Garantir responsividade (card 90% largura em mobile, centralizado em desktop)
    - Transição suave para mostrar/ocultar conteúdo (opacity + transform)
    - _Requisitos: 1.5, 2.4_

- [x] 6. Integrar autenticação nas páginas de aula
  - [x] 6.1 Modificar `Aula-01/index.html` para incluir autenticação
    - Adicionar `<script>` tags com caminhos relativos (`../supabase-config.js`, `../auth.js`, `../access-log.js`)
    - Conteúdo oculto até `auth.js` confirmar sessão ativa
    - Se sem sessão, redirecionar para `../index.html`
    - Chamar `registrarAcesso()` ao carregar a página
    - _Requisitos: 3.1, 3.3, 4.3_

  - [x] 6.2 Modificar `Aula-02/index.html` para incluir autenticação
    - Mesmas modificações da tarefa 6.1
    - _Requisitos: 3.1, 3.3, 4.3_

  - [x] 6.3 Modificar `Aula-03/index.html` para incluir autenticação
    - Mesmas modificações da tarefa 6.1
    - _Requisitos: 3.1, 3.3, 4.3_

- [x] 7. Painel de Analytics
  - [x] 7.1 Criar `analytics.html` com a estrutura do painel
    - Criar página HTML com toolbar, verificação de admin, e containers para: total de usuários, acessos por dia, lista de usuários, filtro de período
    - Incluir scripts do Supabase, `supabase-config.js`, `auth.js`, `analytics.js`
    - Seguir o estilo visual do app (gradientes, cards, DM Sans)
    - _Requisitos: 6.1, 6.2, 6.3, 6.4, 6.5, 6.6_

  - [x] 7.2 Criar `analytics.js` com a lógica do painel
    - Verificar se o usuário é admin ao carregar; se não, redirecionar para `index.html`
    - Chamar `admin_listar_usuarios()` via RPC para popular tabela de usuários
    - Chamar `admin_acessos_por_periodo()` via RPC para popular lista/gráfico de acessos por dia
    - Implementar filtro de período (data início/fim) que recarrega os dados
    - Exibir card com total de usuários únicos
    - _Requisitos: 6.1, 6.2, 6.3, 6.4, 6.5, 6.6_

  - [x] 7.3 Adicionar estilos do painel de analytics ao `style.css`
    - Criar estilos para `.analytics-card`, `.analytics-table`, `.analytics-filter`, `.analytics-chart`
    - Garantir responsividade
    - _Requisitos: 6.1_

  - [ ]* 7.4 Escrever teste de propriedade — Painel de analytics exibe dados corretos dos usuários
    - **Propriedade 11: Painel de analytics exibe dados corretos dos usuários**
    - **Valida: Requisitos 6.1, 6.3, 6.4**

  - [ ]* 7.5 Escrever teste de propriedade — Filtro de período retorna apenas acessos dentro do intervalo
    - **Propriedade 12: Filtro de período retorna apenas acessos dentro do intervalo**
    - **Valida: Requisitos 6.2, 6.5**

  - [ ]* 7.6 Escrever teste de propriedade — Painel de analytics acessível apenas para administradores
    - **Propriedade 13: Painel de analytics acessível apenas para administradores**
    - **Valida: Requisito 6.6**

  - [ ]* 7.7 Escrever teste de propriedade — RLS impede leitura de dados de outros usuários
    - **Propriedade 14: RLS impede leitura de dados de outros usuários**
    - **Valida: Requisito 7.5**

- [x] 8. Atualizar Service Worker e compatibilidade PWA
  - [x] 8.1 Atualizar `sw.js` para cachear novos arquivos e excluir Supabase
    - Incrementar `CACHE_NAME` para forçar atualização do cache
    - Adicionar `supabase-config.js`, `auth.js`, `access-log.js`, `analytics.html`, `analytics.js` ao array `urlsToCache`
    - Excluir requisições para `*.supabase.co` do cache (sempre usar network)
    - _Requisitos: 8.1, 8.4_

- [x] 9. Checkpoint final — Verificar integração completa
  - Garantir que todos os testes passam, perguntar ao usuário se há dúvidas.

## Notas

- Tarefas marcadas com `*` são opcionais e podem ser puladas para um MVP mais rápido
- Cada tarefa referencia requisitos específicos para rastreabilidade
- Checkpoints garantem validação incremental
- Testes de propriedade validam propriedades universais de corretude
- O SQL das tarefas 1.2 e 1.3 deve ser executado diretamente no painel do Supabase (SQL Editor)
