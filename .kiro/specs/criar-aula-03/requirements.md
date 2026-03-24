# Documento de Requisitos — Criar Aula 03

## Introdução

Criação da Aula 03 (Semana 3) do curso "Inglês com Tio Binho", um PWA de ensino de inglês para crianças. A aula contém dois textos: "My Family" (Sophia apresenta sua família) e "At Aunt Sula's House" (Lis conta sobre visitas à casa da tia Sula). Os arquivos de conteúdo (markdown, MP3, PDF) já existem. É necessário criar a página HTML da aula, o guia de estudo, e atualizar a página principal e o arquivo de textos consolidados.

## Glossário

- **Página_da_Aula**: Arquivo `Aula-03/index.html` que contém a interface HTML da Aula 03 com 3 abas (Guia, Texto 1, Texto 2)
- **Guia_de_Estudo**: Arquivo `Aula-03/Leia-aqui-primeiro.md` com instruções de estudo da semana
- **Página_Principal**: Arquivo `index.html` na raiz do projeto, contendo cards de aulas e seção de progresso
- **Arquivo_de_Textos**: Arquivo `Todos-Os-Textos.md` que consolida todos os textos em inglês para análise no Voyant Tools
- **Texto_1**: Texto "My Family" (01-my-family) — Sophia apresenta sua família, rotina dos pais, tempos verbais
- **Texto_2**: Texto "At Aunt Sula's House" (02-at-aunt-sulas-house) — Lis conta sobre visitas à tia Sula, cachorros, atividades
- **Palavra_Destaque**: Palavra-chave do vocabulário renderizada com a classe CSS `palavra-destaque` (cor vermelha + negrito)
- **Aba_Guia**: Primeira aba da página da aula com objetivo, textos da semana, método de estudo, dicas e dúvidas
- **Aba_Texto**: Aba contendo player de áudio, texto lado a lado (EN/PT), linha a linha e vocabulário/explicações
- **Service_Worker**: Arquivo `sw.js` na raiz do projeto que habilita funcionalidades PWA offline

## Requisitos

### Requisito 1: Criar a Página da Aula 03

**User Story:** Como aluna do curso, eu quero acessar a Aula 03 em uma página HTML dedicada, para que eu possa estudar os textos "My Family" e "At Aunt Sula's House" com áudio, tradução e vocabulário.

#### Critérios de Aceitação

1. THE Página_da_Aula SHALL seguir exatamente a mesma estrutura HTML da Aula 02 (head, toolbar, container com 3 abas, footer, scripts)
2. THE Página_da_Aula SHALL incluir meta tags PWA (theme-color, mobile-web-app-capable, apple-mobile-web-app-capable, apple-mobile-web-app-status-bar-style, apple-mobile-web-app-title)
3. THE Página_da_Aula SHALL referenciar o CSS compartilhado (`../style.css`), o manifest (`../manifest.json`) e os favicons da raiz
4. THE Página_da_Aula SHALL incluir a fonte Google DM Sans (pesos 400, 500, 700)
5. THE Página_da_Aula SHALL exibir uma toolbar com logo linkando para `../index.html` e botão "← Voltar"
6. THE Página_da_Aula SHALL conter um breadcrumb com link "🏠 Home" para `../index.html` e texto "Aula 03"
7. THE Página_da_Aula SHALL exibir o título "📚 Aula 03 - Semana 3" e indicador de progresso "1 de 3"
8. THE Página_da_Aula SHALL conter 3 botões de aba: "📋 Guia", "Texto 1" e "Texto 2"

### Requisito 2: Implementar a Aba Guia da Aula 03

**User Story:** Como aluna do curso, eu quero ver um guia de estudo na primeira aba, para que eu saiba como estudar os textos da semana de forma eficiente.

#### Critérios de Aceitação

1. THE Aba_Guia SHALL exibir a seção "🎯 Objetivo da Semana" descrevendo o aprendizado de vocabulário de família, descrição física, rotina e atividades
2. THE Aba_Guia SHALL exibir a seção "📖 Textos da Semana" com nome, tema, vocabulário principal e duração de cada texto
3. THE Aba_Guia SHALL exibir a seção "🧠 Como Estudar os Textos" com os 6 passos do método (Compreensão Inicial, Listening com Texto, Listening com Tradução, Listening Puro, Anki, Shadowing)
4. THE Aba_Guia SHALL exibir a seção "💡 Dicas Importantes" com 5 dicas padrão (consistência, sem perfeição, repetição, fones, falar em voz alta)
5. THE Aba_Guia SHALL exibir a seção "❓ Dúvidas Comuns" com 4 perguntas padrão (entender 100%, tempo, pular Anki, shadowing perfeito)
6. THE Aba_Guia SHALL usar o estilo visual padrão: fundo `#f9f9f9`, borda esquerda `4px solid #2563eb`, border-radius `12px`

### Requisito 3: Implementar a Aba do Texto 1 — "My Family"

**User Story:** Como aluna do curso, eu quero estudar o texto "My Family" com áudio, texto bilíngue e vocabulário, para que eu aprenda vocabulário de família e tempos verbais.

#### Critérios de Aceitação

1. THE Aba_Texto SHALL exibir o título "Texto 1: My Family" com ícone
2. THE Aba_Texto SHALL conter um player de áudio HTML5 com source apontando para `./01-my-family/01-my-family.mp3`
3. THE Aba_Texto SHALL conter um botão de download do PDF apontando para `./01-my-family/01-my-family.pdf`
4. THE Aba_Texto SHALL exibir o texto lado a lado com coluna "US English" e coluna "BR Português", usando a classe `.side-by-side`
5. THE Aba_Texto SHALL exibir a seção "Linha a Linha" com cada frase em inglês seguida da tradução em português
6. THE Aba_Texto SHALL exibir a seção de vocabulário com cards para as palavras-chave de família (parents, mother, father, brother, uncle, grandmother), descrição física (short, tall, thin, funny, cute, dedicated) e atividades/rotina (takes care of, makes lunch/dinner/breakfast, washes and irons, leaves home, comes back)
7. THE Aba_Texto SHALL exibir cards de expressões importantes incluindo tempos verbais (yesterday/today/tomorrow) e expressões como "I can't wait" e "Don't tell him that"
8. WHEN uma palavra estiver em negrito no markdown do Texto_1, THE Aba_Texto SHALL renderizar essa palavra com a classe CSS `palavra-destaque` em todas as seções (lado a lado, linha a linha, vocabulário)

### Requisito 4: Implementar a Aba do Texto 2 — "At Aunt Sula's House"

**User Story:** Como aluna do curso, eu quero estudar o texto "At Aunt Sula's House" com áudio, texto bilíngue e vocabulário, para que eu aprenda vocabulário de animais, atividades e expressões do cotidiano.

#### Critérios de Aceitação

1. THE Aba_Texto SHALL exibir o título "Texto 2: At Aunt Sula's House" com ícone
2. THE Aba_Texto SHALL conter um player de áudio HTML5 com source apontando para `./02-at-aunt-sulas-house/02-at-aunt-sulas-house.mp3`
3. THE Aba_Texto SHALL conter um botão de download do PDF apontando para `./02-at-aunt-sulas-house/02-at-aunt-sulas-house.pdf`
4. THE Aba_Texto SHALL exibir o texto lado a lado com coluna "US English" e coluna "BR Português", usando a classe `.side-by-side`
5. THE Aba_Texto SHALL exibir a seção "Linha a Linha" com cada frase em inglês seguida da tradução em português
6. THE Aba_Texto SHALL exibir a seção de vocabulário com cards para família (mother, sister, aunt, uncle), animais (dog, fish, worm), adjetivos (rough, grumpy, warm, crooked) e atividades (watch, draw, paint, play with, look for, feed, make holes)
7. THE Aba_Texto SHALL exibir cards de expressões importantes incluindo "anyway", "look for", "the other day", "every" e "feed the fish"
8. WHEN uma palavra estiver em negrito no markdown do Texto_2, THE Aba_Texto SHALL renderizar essa palavra com a classe CSS `palavra-destaque` em todas as seções (lado a lado, linha a linha, vocabulário)

### Requisito 5: Implementar JavaScript e Funcionalidades PWA

**User Story:** Como aluna do curso, eu quero navegar entre as abas, voltar ao topo e usar o app offline, para que eu tenha uma experiência fluida de estudo.

#### Critérios de Aceitação

1. THE Página_da_Aula SHALL implementar a função `showText(textNumber)` para alternar entre as 3 abas atualizando classes CSS e indicador de progresso
2. THE Página_da_Aula SHALL implementar a função `scrollToTop()` com botão visível ao rolar mais de 300px
3. THE Página_da_Aula SHALL registrar o Service_Worker em `../sw.js`
4. THE Página_da_Aula SHALL exibir um banner de instalação PWA com botões "Instalar" e "Agora não"
5. THE Página_da_Aula SHALL aplicar feedback visual nos botões (scale 0.93) ao clicar
6. THE Página_da_Aula SHALL suportar navegação por teclado (ArrowLeft/ArrowRight) entre as abas

### Requisito 6: Desbloquear Card da Aula 03 na Página Principal

**User Story:** Como aluna do curso, eu quero ver a Aula 03 desbloqueada na página principal, para que eu possa acessar o conteúdo da semana 3.

#### Critérios de Aceitação

1. WHEN a Aula 03 for publicada, THE Página_Principal SHALL remover o estilo `opacity: 0.6` do card da Aula 03
2. WHEN a Aula 03 for publicada, THE Página_Principal SHALL exibir "📖 My Family" e "📖 At Aunt Sula's House" como nomes dos textos no card
3. WHEN a Aula 03 for publicada, THE Página_Principal SHALL substituir o botão "🔒 Em Breve" por um botão "📚 Acessar" com link para `Aula-03/index.html`
4. WHEN a Aula 03 for publicada, THE Página_Principal SHALL remover o estilo `opacity: 0.5; cursor: not-allowed` do botão de acesso

### Requisito 7: Atualizar Seção de Progresso na Página Principal

**User Story:** Como aluna do curso, eu quero ver meu progresso atualizado após a Aula 03, para que eu saiba quanto já avancei no curso.

#### Critérios de Aceitação

1. WHEN a Aula 03 for publicada, THE Página_Principal SHALL exibir "Semana 3 de 48" na seção de progresso
2. WHEN a Aula 03 for publicada, THE Página_Principal SHALL atualizar a barra de progresso para refletir 3/48 semanas (6.25%)
3. WHEN a Aula 03 for publicada, THE Página_Principal SHALL exibir "6 / 96" em Histórias Aprendidas
4. WHEN a Aula 03 for publicada, THE Página_Principal SHALL exibir "45 semanas" em "Falta Pouco!"
5. WHEN a Aula 03 for publicada, THE Página_Principal SHALL exibir "3 / 48" em Semanas Conquistadas
6. WHEN a Aula 03 for publicada, THE Página_Principal SHALL atualizar "Palavras Estudadas" para aproximadamente 1.058 / 8.160 (788 anteriores + ~135 palavras novas de cada texto)

### Requisito 8: Atualizar Arquivo de Textos Consolidados

**User Story:** Como desenvolvedor do curso, eu quero que os textos em inglês da Aula 03 sejam adicionados ao arquivo consolidado, para que a análise de vocabulário no Voyant Tools inclua o conteúdo da nova aula.

#### Critérios de Aceitação

1. WHEN a Aula 03 for publicada, THE Arquivo_de_Textos SHALL conter o texto em inglês completo de "My Family" separado por `---`
2. WHEN a Aula 03 for publicada, THE Arquivo_de_Textos SHALL conter o texto em inglês completo de "At Aunt Sula's House" separado por `---`
3. THE Arquivo_de_Textos SHALL manter todos os textos das aulas anteriores intactos

### Requisito 9: Criar Guia de Estudo em Markdown

**User Story:** Como aluna do curso, eu quero ter um guia de estudo em markdown para a Aula 03, para que eu possa consultar as instruções de estudo fora do app.

#### Critérios de Aceitação

1. THE Guia_de_Estudo SHALL seguir o mesmo formato do guia da Aula 02 (`Aula-02/Leia-aqui-primeiro.md`)
2. THE Guia_de_Estudo SHALL conter o objetivo da semana focado em família, descrição física, rotina e atividades
3. THE Guia_de_Estudo SHALL listar os 2 textos da semana com tema, vocabulário principal e duração
4. THE Guia_de_Estudo SHALL conter os 6 passos do método de estudo, dicas importantes, dúvidas comuns e checklist da semana
5. THE Guia_de_Estudo SHALL referenciar os arquivos de áudio corretos: `01-my-family.mp3` e `02-at-aunt-sulas-house.mp3`

### Requisito 10: Footer e Estilo Visual

**User Story:** Como aluna do curso, eu quero que a Aula 03 tenha o mesmo visual das aulas anteriores, para que a experiência seja consistente.

#### Critérios de Aceitação

1. THE Página_da_Aula SHALL exibir um footer com o texto "Aula 03 - Tio Binho" e uma mensagem motivacional
2. THE Página_da_Aula SHALL usar o CSS compartilhado (`../style.css`) para todos os componentes que possuem classes definidas
3. THE Página_da_Aula SHALL usar cards de vocabulário com `border-left: 3px solid #2563eb` e `box-shadow`
4. THE Página_da_Aula SHALL usar a classe `.audio-section` para a seção de áudio
5. THE Página_da_Aula SHALL usar as classes `.side-by-side` e `.column` para textos lado a lado
6. THE Página_da_Aula SHALL usar estilo de linha a linha com fundo `#f9f9f9`, inglês em `color: #2563eb` e português em `color: #666`
