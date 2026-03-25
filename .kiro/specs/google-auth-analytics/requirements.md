# Documento de Requisitos

## Introdução

Este documento define os requisitos para adicionar autenticação via Google e rastreamento de acessos ao app PWA "Inglês com Tio Binho". O objetivo principal é saber quem está usando o app, quantas vezes cada usuário acessa, e gerar relatórios de uso. A autenticação será feita via Supabase (Google OAuth), e os dados de acesso serão armazenados no banco de dados do Supabase. Este sistema servirá como base para futuras funcionalidades de acompanhamento de progresso individual dos alunos.

## Glossário

- **App**: O aplicativo PWA "Inglês com Tio Binho", composto por páginas HTML/CSS/JS estáticas servidas via GitHub Pages ou Live Server.
- **Tela_de_Login**: Página inicial exibida para usuários não autenticados, contendo o botão de login com Google.
- **Supabase_Auth**: Módulo de autenticação do Supabase configurado com o provedor Google OAuth.
- **Supabase_DB**: Banco de dados PostgreSQL do Supabase usado para armazenar logs de acesso e dados de usuários.
- **Registro_de_Acesso**: Entrada na tabela de logs contendo identificador do usuário, data e hora do acesso.
- **Sessão**: Estado de autenticação ativa do usuário no navegador, gerenciada pelo Supabase Auth.
- **Painel_de_Analytics**: Página ou seção do app que exibe relatórios e estatísticas de uso.
- **Usuário_Autenticado**: Pessoa que completou o fluxo de login via Google e possui uma sessão ativa.

## Requisitos

### Requisito 1: Tela de Login com Google

**User Story:** Como aluno, eu quero fazer login com minha conta Google para acessar o app de forma simples e rápida.

#### Critérios de Aceitação

1. WHEN um usuário não autenticado acessa o App, THE Tela_de_Login SHALL ser exibida com um botão "Entrar com Google".
2. WHEN o usuário clica no botão "Entrar com Google", THE Supabase_Auth SHALL iniciar o fluxo de autenticação OAuth com o provedor Google.
3. WHEN o fluxo OAuth é concluído com sucesso, THE Supabase_Auth SHALL criar uma Sessão para o Usuário_Autenticado e redirecionar para a página principal do App.
4. IF o fluxo OAuth falha ou é cancelado pelo usuário, THEN THE Tela_de_Login SHALL exibir uma mensagem de erro descritiva e manter o usuário na Tela_de_Login.
5. THE Tela_de_Login SHALL seguir o estilo visual existente do App (paleta de cores, fontes DM Sans, gradientes).

### Requisito 2: Gerenciamento de Sessão

**User Story:** Como aluno, eu quero permanecer logado entre visitas para não precisar fazer login toda vez que abro o app.

#### Critérios de Aceitação

1. WHEN um Usuário_Autenticado retorna ao App, THE Supabase_Auth SHALL restaurar a Sessão existente automaticamente sem exigir novo login.
2. WHEN a Sessão expira ou é invalidada, THE App SHALL redirecionar o usuário para a Tela_de_Login.
3. WHEN o Usuário_Autenticado clica em "Sair", THE Supabase_Auth SHALL encerrar a Sessão e redirecionar para a Tela_de_Login.
4. THE App SHALL exibir o nome e a foto do Usuário_Autenticado (obtidos da conta Google) na toolbar quando a Sessão estiver ativa.

### Requisito 3: Proteção de Rotas

**User Story:** Como administrador, eu quero que apenas usuários autenticados acessem o conteúdo das aulas para garantir o controle de acesso.

#### Critérios de Aceitação

1. WHEN um usuário não autenticado tenta acessar qualquer página de aula (Aula-XX/index.html), THE App SHALL redirecionar o usuário para a Tela_de_Login.
2. WHEN um usuário não autenticado tenta acessar a página principal (index.html), THE App SHALL exibir a Tela_de_Login em vez do conteúdo.
3. WHILE a Sessão estiver ativa, THE App SHALL permitir acesso a todas as páginas de aula e à página principal.

### Requisito 4: Registro de Acessos

**User Story:** Como administrador, eu quero registrar cada acesso dos usuários para saber quem está usando o app e com que frequência.

#### Critérios de Aceitação

1. WHEN um Usuário_Autenticado acessa o App (login ou retorno com sessão ativa), THE App SHALL criar um Registro_de_Acesso no Supabase_DB contendo o identificador do usuário, a data e a hora do acesso.
2. THE Registro_de_Acesso SHALL conter os seguintes campos: id do usuário, nome completo, email, data e hora (timestamp com fuso horário), e a página acessada.
3. WHEN um Usuário_Autenticado navega para uma página de aula, THE App SHALL criar um Registro_de_Acesso para aquela página específica.
4. IF a gravação do Registro_de_Acesso falha (erro de rede ou banco), THEN THE App SHALL continuar funcionando normalmente sem bloquear o acesso do usuário.

### Requisito 5: Armazenamento de Dados de Usuários

**User Story:** Como administrador, eu quero manter um cadastro dos usuários que acessam o app para ter uma visão geral da base de alunos.

#### Critérios de Aceitação

1. WHEN um usuário faz login pela primeira vez, THE Supabase_DB SHALL armazenar os dados do perfil Google (nome completo, email, foto de perfil) em uma tabela de usuários.
2. WHEN um usuário já cadastrado faz login novamente, THE Supabase_DB SHALL atualizar a data do último acesso sem duplicar o registro do usuário.
3. THE Supabase_DB SHALL manter um campo com a data de primeiro acesso e um campo com a data do último acesso para cada usuário.

### Requisito 6: Painel de Analytics

**User Story:** Como administrador, eu quero visualizar relatórios de uso do app para entender o engajamento dos alunos.

#### Critérios de Aceitação

1. THE Painel_de_Analytics SHALL exibir o número total de usuários únicos cadastrados.
2. THE Painel_de_Analytics SHALL exibir o número de acessos por dia em formato de lista ou gráfico.
3. THE Painel_de_Analytics SHALL exibir a lista de usuários com nome, email, data do primeiro acesso e data do último acesso.
4. THE Painel_de_Analytics SHALL exibir o total de acessos por usuário.
5. WHERE o administrador seleciona um período de datas, THE Painel_de_Analytics SHALL filtrar os dados de acesso para o período selecionado.
6. THE Painel_de_Analytics SHALL ser acessível apenas para usuários com permissão de administrador.

### Requisito 7: Configuração do Supabase

**User Story:** Como desenvolvedor, eu quero integrar o Supabase ao projeto para gerenciar autenticação e dados sem precisar de um backend próprio.

#### Critérios de Aceitação

1. THE App SHALL incluir o SDK JavaScript do Supabase (supabase-js) via CDN, mantendo a arquitetura sem framework do projeto.
2. THE App SHALL armazenar as credenciais do Supabase (URL do projeto e chave anon/public) em um arquivo de configuração JavaScript separado.
3. THE Supabase_DB SHALL conter uma tabela "usuarios" com os campos: id (UUID, referência ao auth.users), nome, email, foto_url, primeiro_acesso (timestamp), ultimo_acesso (timestamp).
4. THE Supabase_DB SHALL conter uma tabela "registros_acesso" com os campos: id (serial), usuario_id (UUID, referência à tabela usuarios), pagina (texto), acessado_em (timestamp com fuso horário).
5. THE Supabase_DB SHALL ter Row Level Security (RLS) habilitado em ambas as tabelas, permitindo que cada usuário leia apenas seus próprios dados, e que administradores leiam todos os dados.

### Requisito 8: Compatibilidade com PWA

**User Story:** Como aluno, eu quero que o login funcione tanto no navegador quanto no app instalado (PWA) para ter uma experiência consistente.

#### Critérios de Aceitação

1. THE Supabase_Auth SHALL funcionar corretamente no modo standalone do PWA (display: standalone no manifest.json).
2. WHEN o App está offline, THE App SHALL exibir uma mensagem informando que é necessário conexão com internet para fazer login.
3. WHILE o App está offline e a Sessão está ativa, THE App SHALL permitir acesso ao conteúdo previamente cacheado pelo Service Worker.
4. THE App SHALL atualizar o Service Worker (sw.js) para cachear os novos arquivos de autenticação e configuração do Supabase.
