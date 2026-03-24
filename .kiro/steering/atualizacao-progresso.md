---
inclusion: auto
---

# Regras de Atualização do Progresso e Voyant Tools

Sempre que uma nova aula for adicionada ou textos forem alterados, as seguintes atualizações são OBRIGATÓRIAS no `index.html` principal:

## 1. Iframe do Voyant Tools

Na seção `#progresso`, existe um iframe que exibe o mapa de palavras estudadas via Voyant Tools. O usuário SEMPRE fornecerá um novo link do corpus atualizado ao adicionar uma aula. Ao receber o novo link:

- Substituir o `src` do iframe pelo novo corpus ID
- O formato do src é: `https://voyant-tools.org/tool/CorpusTerms/?corpus=NOVO_ID_AQUI`
- NUNCA manter o link antigo — ele fica desatualizado

## 2. Contagem de Palavras Estudadas

O card "📝 Palavras Estudadas" na seção `#progresso` mostra `X / 8.160`. O valor X deve ser atualizado com base nos dados do Voyant Tools que o usuário fornecer. O usuário informará o número de "formas únicas de palavras" do corpus atualizado.

- Usar o valor exato informado pelo usuário (ex: "1.114 formas únicas" → `1.114 / 8.160`)
- NÃO estimar ou calcular por conta própria — usar sempre o dado real do Voyant Tools

## 3. Tabela de Níveis CEFR

Na seção `#progresso` existe uma tabela com a quantidade de palavras por nível (A1 a C2). Esta tabela é estática e não precisa ser alterada a cada aula, mas deve ser mantida intacta ao fazer edições na seção de progresso.

## 4. Demais Campos de Progresso

Atualizar a cada nova aula:
- "Semana X de 48 (Y%)" — texto e barra de progresso (width)
- "X / 48" em Semanas Conquistadas
- "X / 96" em Histórias Aprendidas (2 por semana)
- "XX semanas" em Falta Pouco (48 - semana atual)

## Referência

- #[[file:index.html]] (seção #progresso)
- #[[file:Todos-Os-Textos.md]] (textos que alimentam o Voyant Tools)
