# Documento de Requisitos — Sessão de Revisão Semanal

## Introdução

O curso "Inglês com Tio Binho" é uma PWA de ensino de inglês do zero ao B2 em 12 meses, com 1 aula por semana contendo 2 textos cada. A cada 4 semanas (4 aulas), o aluno terá acesso a uma Sessão de Revisão que consolida o conteúdo estudado no bloco anterior. A primeira revisão aparece entre a Aula 04 e a Aula 05. O aluno acessa a revisão como se fosse uma aula normal, clicando no card correspondente na página principal.

## Glossário

- **Plataforma**: A aplicação web PWA "Inglês com Tio Binho" composta por HTML, CSS e JavaScript puro
- **Sessão_de_Revisão**: Página HTML dedicada que consolida o conteúdo de um bloco de 4 aulas, contendo vídeo resumo, lista de textos estudados, contagem de palavras e pontos importantes
- **Card_de_Revisão**: Elemento visual na grade de aulas da página principal que representa uma Sessão_de_Revisão e permite ao aluno acessá-la
- **Bloco_de_Aulas**: Conjunto de 4 aulas consecutivas que precedem uma Sessão_de_Revisão (ex: Aulas 01-04 formam o Bloco 1)
- **Página_Principal**: O arquivo index.html raiz do projeto que contém a seção de aulas com a grade de cards
- **Grade_de_Aulas**: Container CSS grid (classe `aulas-grid`) na Página_Principal que exibe os cards de aulas e revisões

## Requisitos

### Requisito 1: Posicionamento do Card de Revisão na Grade de Aulas

**User Story:** Como aluno, eu quero ver a sessão de revisão posicionada entre as aulas na grade, para que eu saiba exatamente quando é hora de revisar o conteúdo.

#### Critérios de Aceitação

1. WHEN o aluno visualiza a seção de aulas na Página_Principal, THE Plataforma SHALL exibir o Card_de_Revisão entre o card da Aula 04 e o card da Aula 05 na Grade_de_Aulas
2. THE Card_de_Revisão SHALL ocupar a largura total da Grade_de_Aulas (span completo das colunas do grid)
3. THE Card_de_Revisão SHALL exibir o título "📝 Revisão — Semanas 1 a 4", o subtítulo "Bloco 1", a lista dos textos revisados e um botão "📚 Acessar" com link para a página da Sessão_de_Revisão
4. THE Card_de_Revisão SHALL utilizar um gradiente visual distinto dos cards de aula para diferenciar visualmente a revisão das aulas regulares

### Requisito 2: Estrutura da Página da Sessão de Revisão

**User Story:** Como aluno, eu quero acessar uma página dedicada de revisão com o resumo das 4 semanas anteriores, para que eu possa consolidar meu aprendizado.

#### Critérios de Aceitação

1. THE Sessão_de_Revisão SHALL seguir a mesma estrutura HTML base das páginas de aula (toolbar, breadcrumb, container, footer) utilizando o CSS compartilhado (style.css)
2. THE Sessão_de_Revisão SHALL conter uma seção de vídeo com um player embed do YouTube exibindo o vídeo resumo do Bloco_de_Aulas
3. THE Sessão_de_Revisão SHALL conter uma seção "Textos Estudados" listando os 8 textos das 4 aulas do bloco com o nome de cada texto e a semana correspondente
4. THE Sessão_de_Revisão SHALL conter uma seção "Palavras Aprendidas" exibindo a contagem total de palavras estudadas até aquele ponto do curso
5. THE Sessão_de_Revisão SHALL conter uma seção "Pontos Importantes" com os destaques gramaticais, expressões-chave e vocabulário principal do Bloco_de_Aulas

### Requisito 3: Seção de Vídeo Resumo

**User Story:** Como aluno, eu quero assistir a um vídeo resumo das 4 semanas, para que eu tenha uma explicação visual e auditiva do conteúdo revisado.

#### Critérios de Aceitação

1. THE Sessão_de_Revisão SHALL exibir um iframe do YouTube responsivo com proporção 16:9
2. THE Sessão_de_Revisão SHALL exibir o título do vídeo acima do player
3. IF o vídeo do YouTube não estiver disponível, THEN THE Sessão_de_Revisão SHALL exibir uma mensagem informando que o vídeo será adicionado em breve

### Requisito 4: Seção de Textos Estudados

**User Story:** Como aluno, eu quero ver a lista completa dos textos que estudei nas últimas 4 semanas, para que eu possa relembrar o que foi coberto.

#### Critérios de Aceitação

1. THE Sessão_de_Revisão SHALL listar cada texto com o número da aula, o número da semana e o título do texto (ex: "Aula 01 — Semana 1: Talking to People")
2. THE Sessão_de_Revisão SHALL agrupar os textos por aula, exibindo 2 textos por aula
3. WHEN o aluno clica no nome de um texto na lista, THE Sessão_de_Revisão SHALL navegar para a página da aula correspondente

### Requisito 5: Seção de Contagem de Palavras

**User Story:** Como aluno, eu quero saber quantas palavras já aprendi até este ponto do curso, para que eu tenha noção do meu progresso.

#### Critérios de Aceitação

1. THE Sessão_de_Revisão SHALL exibir o número total de palavras estudadas até o final do Bloco_de_Aulas correspondente
2. THE Sessão_de_Revisão SHALL exibir o número total de palavras do curso completo (8.160) como referência
3. THE Sessão_de_Revisão SHALL exibir uma barra de progresso visual representando a porcentagem de palavras estudadas em relação ao total do curso

### Requisito 6: Seção de Pontos Importantes

**User Story:** Como aluno, eu quero ver os pontos mais importantes das 4 semanas, para que eu possa focar na revisão do que é essencial.

#### Critérios de Aceitação

1. THE Sessão_de_Revisão SHALL listar as categorias de vocabulário aprendidas no bloco (ex: verbos, animais, família, comida, higiene, clima)
2. THE Sessão_de_Revisão SHALL listar as expressões-chave mais importantes do bloco com exemplo de uso e tradução
3. THE Sessão_de_Revisão SHALL apresentar os pontos importantes em cards visuais seguindo o padrão de gradientes do projeto

### Requisito 7: Padrão Visual e Responsividade

**User Story:** Como aluno, eu quero que a sessão de revisão tenha o mesmo padrão visual do restante do curso e funcione bem no celular, para que a experiência seja consistente.

#### Critérios de Aceitação

1. THE Sessão_de_Revisão SHALL utilizar a fonte DM Sans, os gradientes da paleta do projeto (#FF6B6B, #4ECDC4, #FFD93D, #A8E6CF, #FF9A9E) e o CSS compartilhado (style.css)
2. THE Sessão_de_Revisão SHALL ser responsiva, adaptando o layout para telas de 768px e 480px de largura
3. THE Card_de_Revisão SHALL ser responsivo, adaptando a largura total do grid para coluna única em telas de 768px ou menos
4. THE Sessão_de_Revisão SHALL incluir o registro do Service Worker e o banner de instalação PWA conforme o padrão das páginas de aula

### Requisito 8: Escalabilidade para Revisões Futuras

**User Story:** Como desenvolvedor, eu quero que o padrão da sessão de revisão seja replicável para os próximos blocos de 4 aulas, para que eu possa criar novas revisões facilmente.

#### Critérios de Aceitação

1. THE Sessão_de_Revisão SHALL ser armazenada em uma pasta dedicada seguindo o padrão `Revisao-XX/index.html` (ex: Revisao-01, Revisao-02)
2. THE Plataforma SHALL suportar a inserção de novos Card_de_Revisão na Grade_de_Aulas após cada bloco de 4 aulas (após Aula 08, após Aula 12, etc.)
3. THE Sessão_de_Revisão SHALL parametrizar o conteúdo (título do bloco, lista de textos, contagem de palavras, pontos importantes) de forma que cada nova revisão precise apenas alterar os dados específicos do bloco
