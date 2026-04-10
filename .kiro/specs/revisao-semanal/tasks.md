# Plano de Implementação: Sessão de Revisão Semanal

## Visão Geral

Criar a página de revisão `Revisao-01/index.html` com todas as seções de conteúdo consolidado das Aulas 01-04, e adicionar o card de revisão full-width na grade de aulas da página principal `index.html`. A implementação usa HTML, CSS e JavaScript puro, seguindo o padrão visual existente do projeto.

## Tarefas

- [x] 1. Criar estrutura base da página Revisao-01/index.html
  - [x] 1.1 Criar pasta `Revisao-01/` e arquivo `index.html` com head, meta tags PWA, toolbar com botão voltar, breadcrumb (🏠 Home › Revisão 01) e container principal
    - Seguir o mesmo padrão de head das páginas de aula (DM Sans, style.css, favicons, manifest.json, Supabase)
    - Toolbar com logo linkando para `../index.html` e botão "← Voltar"
    - _Requisitos: 2.1, 7.1, 7.4_
  - [x] 1.2 Adicionar cabeçalho da revisão com título "📝 Revisão — Bloco 1 (Semanas 1 a 4)" e subtítulo com estatísticas "8 textos estudados · 1.284 palavras · 4 semanas"
    - _Requisitos: 2.1_

- [x] 2. Implementar seção de vídeo resumo do YouTube
  - [x] 2.1 Criar seção com título "🎬 Vídeo Resumo do Bloco 1", iframe YouTube responsivo 16:9 com URL placeholder (`VIDEO_ID_AQUI`) e mensagem de fallback "⏳ Vídeo será adicionado em breve!"
    - Usar wrapper com `padding-bottom: 56.25%` para proporção 16:9
    - Iframe com `allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen`
    - _Requisitos: 3.1, 3.2, 3.3_

- [x] 3. Implementar seção de textos estudados
  - [x] 3.1 Criar seção "📖 Textos Estudados" com 4 cards agrupados por aula, cada um listando 2 textos com número da aula, semana e título
    - Aula 01 (Semana 1): Talking to People + Colors and Numbers in Real Life
    - Aula 02 (Semana 2): My Simple Day + Animals Around Us
    - Aula 03 (Semana 3): My Family + At Aunt Sula's House
    - Aula 04 (Semana 4): What I Eat Every Day + My Day at Home
    - Cada card com gradiente da paleta do projeto (vermelho, teal, amarelo, verde)
    - Links clicáveis para as páginas de aula correspondentes (`../Aula-XX/index.html`)
    - _Requisitos: 4.1, 4.2, 4.3_

- [x] 4. Implementar seção de contagem de palavras e progresso
  - [x] 4.1 Criar seção "📊 Palavras Aprendidas" com número 1.284 de 8.160, barra de progresso visual (15.7%) e cards informativos (palavras estudadas, histórias lidas: 8/96, semanas: 4/48)
    - Usar classes `.progress-bar` e `.progress-fill` do style.css
    - Usar `.info-cards` com 3-4 cards de estatísticas
    - _Requisitos: 5.1, 5.2, 5.3_

- [x] 5. Checkpoint — Verificar estrutura base e seções iniciais
  - Garantir que a página renderiza corretamente com toolbar, breadcrumb, vídeo, textos estudados e progresso. Perguntar ao usuário se há dúvidas.

- [x] 6. Implementar seção de vocabulário consolidado (Cards 1-5)
  - [x] 6.1 Criar Card 1: Verbos de Conversação (Aula 01) — 25 verbos (talk, speak, learn, ask, answer, listen, understand, practice, feel, know, enjoy, prefer, study, remember, forget, plan, travel, visit, hope, arrive, wait, choose, stay, meet, improve)
    - Card com gradiente e tabela inglês/português
    - _Requisitos: 6.1, 6.3_
  - [x] 6.2 Criar Card 2: Números e Cores (Aula 01) — números 0-20, 10 cores básicas + 3 compostas
    - _Requisitos: 6.1, 6.3_
  - [x] 6.3 Criar Card 3: Verbos Essenciais do Dia a Dia (Aula 02) — 29 verbos (be, have, do, go, come, like, want, need, know, think, see, take, make, work, live, eat, drink, buy, use, say, get, give, help, try, find, call, feel, leave, start, stop)
    - _Requisitos: 6.1, 6.3_
  - [x] 6.4 Criar Card 4: Animais (Aula 02) — 15 animais organizados por habitat (casa, fazenda, floresta, oceano)
    - _Requisitos: 6.1, 6.3_
  - [x] 6.5 Criar Card 5: Família e Descrição Física (Aula 03) — família (parents, mother, father, older brother, uncle, grandmother), descrição (short, tall, thin, funny, cute, dedicated), atividades (takes care of, washes and irons, leaves home, comes back)
    - _Requisitos: 6.1, 6.3_

- [x] 7. Implementar seção de vocabulário consolidado (Cards 6-10)
  - [x] 7.1 Criar Card 6: Atividades e Expressões (Aula 03) — verbos (watch, draw, paint, play, look for, feed, dig) e expressões (anyway, look for, the other day, every visit)
    - _Requisitos: 6.1, 6.3_
  - [x] 7.2 Criar Card 7: Comida e Refeições (Aula 04) — 20+ itens de comida, frutas, refeições, verbos novos (bring, cook, try, grow, give) e expressões (have breakfast, enough for seconds, a little bit, get hungry, for the first time)
    - _Requisitos: 6.1, 6.3_
  - [x] 7.3 Criar Card 8: Higiene Pessoal (Aula 04) — ações (take a shower, wash, brush teeth, comb hair, flush toilet, dry) e objetos (soap, towel, mirror, toothbrush, bathroom, pajamas)
    - _Requisitos: 6.1, 6.3_
  - [x] 7.4 Criar Card 9: Clima e Tempo (Aula 04) — clima (sun, rain, fog, clouds, sky, weather, hot, cold, humid) e expressões (it starts to rain, it looks like, time to get up)
    - _Requisitos: 6.1, 6.3_
  - [x] 7.5 Criar Card 10: Quintal e Casa (Aula 04) — lugares (backyard, grass, trees, flowers, roof, window, puddles) e verbos novos (wake up, rub, yawn, run, jump, laugh, change, appear, cover, bark, put on, shine)
    - _Requisitos: 6.1, 6.3_

- [x] 8. Implementar tabela de expressões-chave do bloco
  - [x] 8.1 Criar seção "🔑 Expressões-Chave do Bloco" com tabela de 16+ expressões consolidadas com colunas: Expressão, Exemplo, Tradução
    - Incluir: Nice to meet you, I don't like..., Takes care of, I can't wait!, Look for, The other day, I love him anyway, Have breakfast, Get hungry, A little bit, For the first time, Time to get up!, Take a shower, It starts to rain, Doesn't let me, It looks like
    - Tabela estilizada com header gradiente seguindo o padrão do projeto
    - _Requisitos: 6.2_

- [x] 9. Implementar footer e JavaScript da página de revisão
  - [x] 9.1 Adicionar footer com mensagem "Revisão 01 — Bloco 1 (Semanas 1 a 4)" e mensagem motivacional, botão voltar ao topo, registro do Service Worker (`../sw.js`) e banner de instalação PWA
    - Mesmo padrão de JavaScript das páginas de aula (sem abas, apenas scroll contínuo)
    - _Requisitos: 2.1, 7.4, 8.1_

- [x] 10. Checkpoint — Verificar página de revisão completa
  - Garantir que todas as seções renderizam corretamente, links funcionam, e a página é responsiva. Perguntar ao usuário se há dúvidas.

- [x] 11. Adicionar card de revisão na página principal
  - [x] 11.1 Inserir o Card de Revisão na `aulas-grid` do `index.html` após o card da Aula 04, com `grid-column: 1 / -1`, gradiente roxo (`#667eea` → `#764ba2`), título "📝 Revisão — Semanas 1 a 4", subtítulo "Bloco 1", lista dos 8 textos e botão "📚 Acessar" linkando para `Revisao-01/index.html`
    - Card com classe `revisao-card` e estilo inline para gradiente e full-width
    - Texto branco para contraste com fundo roxo
    - _Requisitos: 1.1, 1.2, 1.3, 1.4_

- [x] 12. Checkpoint final — Validar integração completa
  - Garantir que o card de revisão aparece corretamente na grade, o link funciona, a página de revisão carrega com todas as seções, e tudo é responsivo em 1200px, 768px e 480px. Perguntar ao usuário se há dúvidas.

## Notas

- Esta feature é HTML/CSS estático — property-based testing não se aplica
- O vídeo do YouTube usa placeholder `VIDEO_ID_AQUI` para substituição futura
- A estrutura `Revisao-XX/` é replicável para revisões futuras (Requisito 8)
- Checkpoints garantem validação incremental da implementação
