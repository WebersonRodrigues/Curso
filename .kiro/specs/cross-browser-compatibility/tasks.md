# Plano de Implementação: Compatibilidade Cross-Browser

## Visão Geral

Implementar detecção de plataforma, adaptar OAuth para iOS standalone, ajustar prompt de instalação por plataforma, adicionar tratamento de erro de áudio e aplicar safe areas do iOS no CSS. Cada tarefa é incremental e se conecta às anteriores.

## Tarefas

- [x] 1. Criar `platform-detect.js` — módulo de detecção de plataforma
  - [x] 1.1 Criar o arquivo `platform-detect.js` na raiz do projeto
    - Implementar o IIFE que expõe o objeto global `Platform` com as propriedades: `isIOS`, `isAndroid`, `isSafari`, `isChrome`, `isStandalone`, `isMobile`
    - Adicionar listener `DOMContentLoaded` que aplica classes no `<body>`: `is-ios`, `is-android`, `is-standalone`, `is-ios-standalone`
    - Usar `Object.freeze` para tornar o objeto imutável
    - _Requisitos: 1.1, 1.2, 1.3, 1.5_

  - [ ]* 1.2 Escrever teste de propriedade para estrutura do Platform
    - **Propriedade 1: Objeto Platform sempre tem a estrutura correta**
    - **Valida: Requisito 1.1**

  - [ ]* 1.3 Escrever teste de propriedade para classificação de user agents
    - **Propriedade 2: Platform classifica corretamente user agents por plataforma**
    - **Valida: Requisitos 1.2, 1.3, 1.5**

- [x] 2. Modificar `auth.js` — OAuth iOS standalone + onAuthStateChange
  - [x] 2.1 Adaptar `loginComGoogle()` para detectar iOS standalone
    - Se `Platform.isIOS && Platform.isStandalone`, usar `signInWithOAuth` com `skipBrowserRedirect: true` e abrir URL via `window.open`
    - Caso contrário, manter fluxo de redirect normal
    - _Requisitos: 2.1_

  - [x] 2.2 Adicionar `onAuthStateChange` em `initAuth()`
    - Escutar evento `SIGNED_IN` para atualizar UI quando o usuário retorna ao PWA após login no Safari
    - Ocultar overlay de login e exibir conteúdo do app
    - Chamar `exibirUsuarioNaToolbar()`
    - _Requisitos: 2.2_

  - [ ]* 2.3 Escrever teste de propriedade para OAuth iOS standalone
    - **Propriedade 3: OAuth no iOS standalone usa window.open em vez de redirect**
    - **Valida: Requisito 2.1**

  - [ ]* 2.4 Escrever teste de propriedade para onAuthStateChange
    - **Propriedade 4: Mudança de estado de autenticação atualiza a UI**
    - **Valida: Requisito 2.2**

- [x] 3. Checkpoint — Verificar que detecção de plataforma e auth funcionam
  - Ensure all tests pass, ask the user if questions arise.

- [x] 4. Modificar `index.html` — viewport-fit, script e install prompt adaptado
  - [x] 4.1 Atualizar meta viewport e adicionar script `platform-detect.js`
    - Alterar `<meta name="viewport">` para incluir `viewport-fit=cover`
    - Adicionar `<script src="./platform-detect.js"></script>` antes dos outros scripts
    - _Requisitos: 5.1_

  - [x] 4.2 Adaptar lógica do install prompt para cross-platform
    - Usar `Platform` para decidir entre prompt nativo (Android), instruções manuais (iOS) ou nenhum banner (desktop/standalone)
    - Implementar `showIOSInstallInstructions()` com texto "Compartilhar → Adicionar à Tela Inicial"
    - Atualizar `checkIfMobileAndShowBanner()` para usar `Platform` em vez de lógica inline
    - _Requisitos: 3.1, 3.2, 3.3, 3.4_

  - [ ]* 4.3 Escrever teste de propriedade para install prompt Android
    - **Propriedade 5: Android com deferredPrompt usa prompt nativo de instalação**
    - **Valida: Requisito 3.1**

  - [ ]* 4.4 Escrever teste de propriedade para instruções iOS
    - **Propriedade 6: iOS sem deferredPrompt exibe instruções manuais de instalação**
    - **Valida: Requisito 3.2**

  - [ ]* 4.5 Escrever teste de propriedade para standalone/desktop sem banner
    - **Propriedade 7: Standalone ou desktop nunca exibe banner de instalação**
    - **Valida: Requisitos 3.3, 3.4**

- [x] 5. Modificar páginas de aula — viewport-fit, platform-detect e áudio
  - [x] 5.1 Atualizar `Aula-01/index.html`, `Aula-02/index.html`, `Aula-03/index.html`
    - Alterar `<meta name="viewport">` para incluir `viewport-fit=cover`
    - Adicionar `<script src="../platform-detect.js"></script>` antes dos outros scripts
    - Adicionar tratamento de erro nos elementos `<audio>` com mensagem amigável
    - _Requisitos: 4.3, 5.1_

  - [ ]* 5.2 Escrever teste de propriedade para erro de áudio
    - **Propriedade 8: Erro de áudio exibe mensagem amigável**
    - **Valida: Requisito 4.3**

- [x] 6. Modificar `style.css` — safe areas iOS + prefixos webkit
  - [x] 6.1 Adicionar regras de safe area condicionais
    - Adicionar regras CSS para `body.is-ios-standalone` com `env(safe-area-inset-*)` na toolbar, container, footer e install banner
    - _Requisitos: 5.2, 5.3_

  - [x] 6.2 Adicionar prefixos webkit e smooth scrolling
    - Adicionar `-webkit-overflow-scrolling: touch` no html
    - Adicionar `position: -webkit-sticky` na toolbar
    - _Requisitos: 5.4_

  - [ ]* 6.3 Escrever teste de propriedade para layout sem safe areas
    - **Propriedade 9: Layout não-standalone não é afetado por safe areas**
    - **Valida: Requisito 5.3**

- [x] 7. Modificar `sw.js` — cachear `platform-detect.js`
  - [x] 7.1 Adicionar `platform-detect.js` à lista de cache e incrementar versão
    - Adicionar `'./platform-detect.js'` ao array `urlsToCache`
    - Incrementar `CACHE_NAME` para `tio-binho-v12`
    - _Requisitos: 1.1_

- [x] 8. Checkpoint final — Verificar tudo integrado
  - Ensure all tests pass, ask the user if questions arise.

## Notas

- Tarefas com `*` são opcionais e podem ser puladas para um MVP mais rápido
- Cada tarefa referencia requisitos específicos para rastreabilidade
- Checkpoints garantem validação incremental
- Testes de propriedade validam propriedades universais de corretude
