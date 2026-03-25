# Documento de Requisitos — Compatibilidade Cross-Browser

## Introdução

Este documento define os requisitos para garantir que o PWA "Inglês com Tio Binho" funcione corretamente nos principais navegadores e plataformas (Chrome Android, Safari iOS, Chrome Desktop, Safari Desktop). O app é um site estático (HTML/CSS/JS, sem framework) que usa Supabase Google OAuth para autenticação. Os principais problemas a resolver são: redirecionamento OAuth em PWA standalone no iOS, diferenças no prompt de instalação entre Android e iOS, reprodução de áudio cross-browser, e safe areas do iOS no CSS.

## Glossário

- **PWA**: Progressive Web App — o app "Inglês com Tio Binho" instalável via navegador.
- **Standalone**: Modo de exibição do PWA quando instalado na tela inicial (sem barra de endereço do navegador).
- **Safe_Area**: Área segura do iOS que evita sobreposição com notch, barra de status e barra home.
- **beforeinstallprompt**: Evento do navegador (Chrome/Android) que permite exibir prompt nativo de instalação.
- **platform-detect.js**: Módulo utilitário a ser criado para detectar plataforma, navegador e modo de exibição.
- **OAuth_Redirect**: Fluxo de redirecionamento do Google OAuth que pode falhar em PWAs standalone no iOS.

## Requisitos

### Requisito 1: Detecção de Plataforma

**User Story:** Como desenvolvedor, eu quero um módulo centralizado de detecção de plataforma para adaptar o comportamento do app conforme o navegador e dispositivo do usuário.

#### Critérios de Aceitação

1. WHEN o módulo `platform-detect.js` é carregado THEN o sistema SHALL expor um objeto global `Platform` com as propriedades: `isIOS`, `isAndroid`, `isSafari`, `isChrome`, `isStandalone`, `isMobile`.
2. WHEN executado em um iPhone ou iPad com Safari THEN `Platform.isIOS` e `Platform.isSafari` SHALL retornar `true`.
3. WHEN executado em um dispositivo Android com Chrome THEN `Platform.isAndroid` e `Platform.isChrome` SHALL retornar `true`.
4. WHEN o app está rodando em modo standalone (instalado na tela inicial) THEN `Platform.isStandalone` SHALL retornar `true`.
5. WHEN executado em um dispositivo móvel (tela ≤ 768px ou user agent mobile) THEN `Platform.isMobile` SHALL retornar `true`.

### Requisito 2: OAuth em PWA Standalone no iOS

**User Story:** Como aluno usando o app instalado no iPhone, eu quero fazer login com Google sem problemas, mesmo no modo standalone do PWA.

#### Critérios de Aceitação

1. WHEN o app está em modo standalone no iOS e o usuário clica em "Entrar com Google" THEN o sistema SHALL abrir o fluxo OAuth em uma nova aba do Safari (via `window.open` ou `target=_blank`) em vez de redirecionar dentro do PWA standalone.
2. WHEN o fluxo OAuth é concluído no Safari e o usuário retorna ao PWA standalone THEN o sistema SHALL detectar a sessão ativa e liberar o conteúdo.
3. WHEN o fluxo OAuth falha no modo standalone do iOS THEN o sistema SHALL exibir uma mensagem de erro orientando o usuário a tentar novamente.

### Requisito 3: Prompt de Instalação Cross-Platform

**User Story:** Como aluno, eu quero receber instruções claras de como instalar o app na minha tela inicial, independente do meu dispositivo.

#### Critérios de Aceitação

1. WHEN o app é acessado no Chrome Android e o evento `beforeinstallprompt` é disparado THEN o sistema SHALL exibir o banner de instalação e usar o prompt nativo ao clicar em "Instalar".
2. WHEN o app é acessado no Safari iOS e o evento `beforeinstallprompt` NÃO é suportado THEN o sistema SHALL exibir instruções específicas para iOS: "Toque em Compartilhar → Adicionar à Tela Inicial".
3. WHEN o app já está instalado (modo standalone) THEN o sistema SHALL NÃO exibir o banner de instalação.
4. WHEN o app é acessado em desktop THEN o sistema SHALL NÃO exibir o banner de instalação.

### Requisito 4: Reprodução de Áudio Cross-Browser

**User Story:** Como aluno, eu quero ouvir os áudios das aulas sem problemas em qualquer navegador ou dispositivo.

#### Critérios de Aceitação

1. WHEN um elemento `<audio>` é exibido THEN o sistema SHALL usar o formato MP3 como fonte principal, que é suportado por todos os navegadores modernos.
2. WHEN o áudio é reproduzido no Safari iOS THEN o sistema SHALL garantir que o elemento `<audio>` funcione corretamente com controles nativos, sem necessidade de interação extra além do play.
3. WHEN o áudio falha ao carregar THEN o sistema SHALL exibir uma mensagem amigável informando o erro e sugerindo recarregar a página.
4. WHEN o app está em modo standalone no iOS THEN a reprodução de áudio SHALL funcionar normalmente sem restrições adicionais.

### Requisito 5: Safe Areas do iOS no CSS

**User Story:** Como aluno usando iPhone com notch, eu quero que o conteúdo do app não fique escondido atrás do notch ou da barra home.

#### Critérios de Aceitação

1. WHEN o app é exibido em modo standalone no iOS THEN o CSS SHALL usar `env(safe-area-inset-*)` para ajustar padding da toolbar, container e footer.
2. WHEN o app é exibido em modo standalone no iOS THEN a meta tag `viewport` SHALL incluir `viewport-fit=cover`.
3. WHEN o app é exibido em navegador normal (não standalone) THEN as safe areas SHALL NÃO afetar o layout existente.

### Requisito 6: Compatibilidade Geral de CSS e JS

**User Story:** Como aluno, eu quero que o app funcione e tenha a mesma aparência em Chrome e Safari, tanto mobile quanto desktop.

#### Critérios de Aceitação

1. WHEN o app é exibido no Safari THEN o CSS SHALL usar prefixos `-webkit-` quando necessário para propriedades como `backdrop-filter`, `overflow-scrolling`, etc.
2. WHEN o app usa `scroll-behavior: smooth` THEN o sistema SHALL garantir fallback para navegadores que não suportam (Safari antigo).
3. WHEN o app usa APIs JavaScript modernas THEN o sistema SHALL verificar a existência da API antes de usá-la (feature detection).
