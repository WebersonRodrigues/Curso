# Tarefas - Criar Aula 03

## Visão Geral

Criar a Aula 03 (Semana 3) do curso "Inglês com Tio Binho" com dois textos: "My Family" e "At Aunt Sula's House". Seguir o padrão exato da Aula 02, transformando o conteúdo dos markdowns existentes em HTML.

## Tarefas de Implementação

- [x] 1. Criar a página Aula-03/index.html com estrutura base
  - [x] 1.1 Criar HTML com head (meta tags PWA, título "Aula 03 - Tio Binho", links para ../manifest.json, favicons, DM Sans, ../style.css), toolbar (logo + botão voltar para ../index.html), breadcrumb (Home > Aula 03), header com título "📚 Aula 03 - Semana 3", indicador "1 de 3", 3 botões de aba (📋 Guia, Texto 1, Texto 2), containers vazios para as 3 abas (text-0, text-1, text-2), botão back-to-top, footer com "Aula 03 - Tio Binho" e mensagem motivacional, e bloco script com funções showText, scrollToTop, PWA (service worker, install banner, beforeinstallprompt), feedback visual nos botões (scale 0.93) e navegação por teclado (ArrowLeft/ArrowRight)
  - Usar Aula-02/index.html como modelo exato, apenas trocando referências de "02" para "03"
  - _Requisitos: 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7, 1.8, 5.1, 5.2, 5.3, 5.4, 5.5, 5.6, 10.1_

- [x] 2. Preencher conteúdo da Aba Guia
  - [x] 2.1 Preencher a aba text-0 com as seções do guia: "🎯 Objetivo da Semana" (vocabulário de família, descrição física, rotina e atividades), "📖 Textos da Semana" (Texto 1: My Family — tema família, adjetivos, tempos verbais, ~2 min; Texto 2: At Aunt Sula's House — tema animais, atividades, expressões, ~2 min), "🧠 Como Estudar os Textos" (6 passos: Compreensão Inicial, Listening com Texto, Listening com Tradução, Listening Puro, Anki, Shadowing), "💡 Dicas Importantes" (5 dicas padrão), "❓ Dúvidas Comuns" (4 perguntas padrão)
  - Usar o mesmo estilo visual: fundo #f9f9f9, borda esquerda 4px solid #2563eb, border-radius 12px
  - _Requisitos: 2.1, 2.2, 2.3, 2.4, 2.5, 2.6_

- [x] 3. Preencher conteúdo do Texto 1 — "My Family"
  - [x] 3.1 Preencher a aba text-1 com: título "Texto 1: My Family" com ícone, player de áudio apontando para ./01-my-family/01-my-family.mp3, botão de download do PDF (./01-my-family/01-my-family.pdf), texto lado a lado (coluna "US English" + coluna "BR Português") com todas as frases do markdown 01-my-family.md, seção "Linha a Linha" com cada frase EN seguida da tradução PT, e seção de vocabulário com cards para: família (parents, mother, father, brother, uncle, grandmother), descrição física (short, tall, thin, funny, cute, dedicated), atividades/rotina (takes care of, makes lunch/dinner/breakfast, washes and irons, leaves home, comes back), e expressões importantes (yesterday/today/tomorrow, "I can't wait", "Don't tell him that", "My mother's name is")
  - Aplicar classe `palavra-destaque` nas palavras-chave de vocabulário em todas as seções (lado a lado, linha a linha, vocabulário)
  - _Requisitos: 3.1, 3.2, 3.3, 3.4, 3.5, 3.6, 3.7, 3.8_

- [x] 4. Preencher conteúdo do Texto 2 — "At Aunt Sula's House"
  - [x] 4.1 Preencher a aba text-2 com: título "Texto 2: At Aunt Sula's House" com ícone, player de áudio apontando para ./02-at-aunt-sulas-house/02-at-aunt-sulas-house.mp3, botão de download do PDF (./02-at-aunt-sulas-house/02-at-aunt-sulas-house.pdf), texto lado a lado (coluna "US English" + coluna "BR Português") com todas as frases do markdown 02-at-aunt-sulas-house.md, seção "Linha a Linha" com cada frase EN seguida da tradução PT, e seção de vocabulário com cards para: família (mother, sister, aunt, uncle), animais (dog, fish, worm), adjetivos (rough, grumpy, warm, crooked), atividades (watch, draw, paint, play with, look for, feed, make holes), e expressões importantes ("anyway", "look for", "the other day", "every", "feed the fish")
  - Aplicar classe `palavra-destaque` nas palavras-chave de vocabulário em todas as seções (lado a lado, linha a linha, vocabulário)
  - _Requisitos: 4.1, 4.2, 4.3, 4.4, 4.5, 4.6, 4.7, 4.8_

- [x] 5. Checkpoint — Verificar Aula-03/index.html
  - Garantir que todas as abas funcionam, áudios carregam, PDFs linkam corretamente, palavras-destaque estão aplicadas. Perguntar ao usuário se há dúvidas.

- [x] 6. Desbloquear Aula 03 na Página Principal
  - [x] 6.1 No index.html da raiz, atualizar o card da Aula 03: remover style="opacity: 0.6;" do .aula-card, trocar textos "📖 Em breve..." por "📖 My Family" e "📖 At Aunt Sula's House", substituir o botão "🔒 Em Breve" por "📚 Acessar" com href="Aula-03/index.html", remover style="opacity: 0.5; cursor: not-allowed;" do botão
  - _Requisitos: 6.1, 6.2, 6.3, 6.4_

- [x] 7. Atualizar Seção de Progresso
  - [x] 7.1 No index.html da raiz, atualizar a seção #progresso: "Semana 3 de 48 (6%)" no texto e barra de progresso (width: 6.25%), "3 / 48" em Semanas Conquistadas, "6 / 96" em Histórias Aprendidas, "45 semanas" em Falta Pouco, "1.058 / 8.160" em Palavras Estudadas (788 + ~270 palavras novas dos 2 textos)
  - _Requisitos: 7.1, 7.2, 7.3, 7.4, 7.5, 7.6_

- [x] 8. Verificar Todos-Os-Textos.md
  - [x] 8.1 Confirmar que o arquivo Todos-Os-Textos.md já contém os textos em inglês de "My Family" e "At Aunt Sula's House" separados por ---. Se não contiver, adicionar mantendo os textos existentes intactos
  - _Requisitos: 8.1, 8.2, 8.3_

- [x] 9. Criar Aula-03/Leia-aqui-primeiro.md
  - [x] 9.1 Criar o guia de estudo em markdown seguindo o formato da Aula 02 (Aula-02/Leia-aqui-primeiro.md): objetivo da semana (família, descrição física, rotina, atividades), textos da semana (My Family com tema/vocabulário/duração/arquivo 01-my-family.mp3, At Aunt Sula's House com tema/vocabulário/duração/arquivo 02-at-aunt-sulas-house.mp3), meta semanal (Duolingo + textos), como estudar (6 passos), cronograma sugerido, checklist da semana, dicas importantes, dúvidas comuns
  - _Requisitos: 9.1, 9.2, 9.3, 9.4, 9.5_

- [x] 10. Checkpoint Final
  - Garantir que tudo está integrado: Aula-03/index.html funciona, card desbloqueado na página principal, progresso atualizado, Todos-Os-Textos.md completo, Leia-aqui-primeiro.md criado. Perguntar ao usuário se há dúvidas.

## Notas

- Usar Aula-02/index.html como modelo exato para a estrutura HTML e JavaScript
- Os arquivos de conteúdo (MD, MP3, PDF) já existem em Aula-03/
- O Todos-Os-Textos.md já contém os textos da Aula 03 (verificado)
- Seguir o padrão obrigatório definido em .kiro/steering/padrao-aulas.md
- Cada tarefa referencia os requisitos específicos do requirements.md
