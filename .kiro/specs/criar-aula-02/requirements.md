# Documento de Requisitos: Criar Aula 02

## Introdução

Criar a página da Aula 02 do curso de inglês PWA "Inglês com Tio Binho", seguindo exatamente o mesmo padrão visual e estrutural da Aula 01. A Aula 02 contém dois textos: "My Simple Day" (verbos essenciais) e "Animals Around Us". O conteúdo já existe em arquivos markdown e os áudios mp3 já estão disponíveis. Além da página da aula, é necessário atualizar a página principal (index.html) para desbloquear o card da Aula 02 e atualizar a seção de progresso. Palavras em negrito nos textos originais devem ser exibidas com cor de destaque na página HTML.

## Glossário

- **PWA**: Progressive Web App — aplicação web que funciona como app nativo
- **Página_da_Aula**: Arquivo HTML dentro da pasta Aula-02 (Aula-02/index.html) que exibe o conteúdo da aula com abas Guia, Texto 1 e Texto 2
- **Página_Principal**: Arquivo index.html na raiz do projeto que contém as seções Home, Objetivo, Aulas e Progresso
- **Card_de_Aula**: Componente visual na seção Aulas da Página_Principal que representa uma aula com título, textos e botão de acesso
- **Aba_Guia**: Primeira aba da Página_da_Aula contendo instruções de estudo
- **Aba_Texto**: Aba da Página_da_Aula contendo player de áudio, texto lado a lado EN/PT, seção linha a linha e vocabulário
- **Palavra_Destacada**: Palavra que aparece em negrito no markdown original e deve ser exibida com cor de destaque (não apenas negrito) na página HTML
- **Seção_Lado_a_Lado**: Área com duas colunas mostrando texto em inglês à esquerda e tradução em português à direita
- **Seção_Linha_a_Linha**: Área mostrando cada frase em inglês seguida da tradução, para estudo detalhado
- **Seção_Vocabulário**: Área com cards de vocabulário mostrando palavra, significado, exemplo e contexto

## Requisitos

### Requisito 1: Criar a Página da Aula 02

**User Story:** Como aluno, eu quero acessar a página da Aula 02, para que eu possa estudar os textos e áudios da Semana 2.

#### Critérios de Aceitação

1. THE Página_da_Aula SHALL seguir a mesma estrutura HTML da Aula 01 (Aula-01/index.html), incluindo toolbar, breadcrumb, abas e footer
2. WHEN o aluno acessar Aula-02/index.html, THE Página_da_Aula SHALL exibir o título "Aula 02 - Semana 2" no header
3. THE Página_da_Aula SHALL conter três abas: "📋 Guia", "Texto 1" e "Texto 2"
4. WHEN a Página_da_Aula carregar, THE Aba_Guia SHALL ser exibida como aba ativa por padrão
5. THE Página_da_Aula SHALL referenciar o CSS compartilhado (../style.css), as fontes do Google Fonts, o manifest da raiz (../manifest.json) e os favicons com caminhos relativos (../), seguindo o mesmo padrão da Aula 01. A Página_da_Aula NÃO SHALL registrar um service worker próprio nem criar um novo manifest.json, pois o PWA é gerenciado pela Página_Principal na raiz e o scope do manifest já cobre todas as subpastas

### Requisito 2: Conteúdo da Aba Guia

**User Story:** Como aluno, eu quero ver o guia de estudo da Aula 02, para que eu saiba como estudar os textos da semana.

#### Critérios de Aceitação

1. THE Aba_Guia SHALL exibir o conteúdo do arquivo Aula-02/Leia-aqui-primeiro.md convertido para HTML
2. THE Aba_Guia SHALL incluir as seções: Objetivo da Semana, Textos da Semana, Como Estudar os Textos, Dicas Importantes e Dúvidas Comuns
3. THE Aba_Guia SHALL exibir os nomes corretos dos textos da Aula 02: "My Simple Day" (Verbos Essenciais) e "Animals Around Us"
4. THE Aba_Guia SHALL seguir o mesmo padrão visual da Aba_Guia da Aula 01 (cores, espaçamentos, ícones, bordas)

### Requisito 3: Conteúdo do Texto 1 — "My Simple Day"

**User Story:** Como aluno, eu quero estudar o texto "My Simple Day" com áudio, texto bilíngue e vocabulário, para que eu possa aprender os verbos essenciais em contexto.

#### Critérios de Aceitação

1. WHEN o aluno clicar na aba "Texto 1", THE Aba_Texto SHALL exibir o título "Texto 1: My Simple Day"
2. THE Aba_Texto SHALL incluir um player de áudio apontando para o arquivo ./01-verbos-essenciais/01-verbos-essenciais.mp3
3. THE Seção_Lado_a_Lado SHALL exibir o texto em inglês na coluna esquerda e a tradução em português na coluna direita, conforme o conteúdo do arquivo 01-verbos-essenciais.md
4. THE Seção_Linha_a_Linha SHALL exibir cada frase em inglês seguida da tradução em português, conforme a seção "Versão Linha a Linha" do arquivo 01-verbos-essenciais.md
5. THE Seção_Vocabulário SHALL exibir os verbos essenciais em cards com significado, exemplo e contexto, conforme a seção "Verbos Essenciais" do arquivo 01-verbos-essenciais.md
6. WHEN uma palavra estiver em negrito no markdown original, THE Página_da_Aula SHALL exibir essa Palavra_Destacada com uma cor de destaque visualmente diferente do texto normal, utilizando uma classe CSS específica

### Requisito 4: Conteúdo do Texto 2 — "Animals Around Us"

**User Story:** Como aluno, eu quero estudar o texto "Animals Around Us" com áudio, texto bilíngue e vocabulário, para que eu possa aprender o vocabulário de animais em inglês.

#### Critérios de Aceitação

1. WHEN o aluno clicar na aba "Texto 2", THE Aba_Texto SHALL exibir o título "Texto 2: Animals Around Us"
2. THE Aba_Texto SHALL incluir um player de áudio apontando para o arquivo ./02-animals-around-us/02-animals-around-us.mp3
3. THE Seção_Lado_a_Lado SHALL exibir o texto em inglês na coluna esquerda e a tradução em português na coluna direita, conforme o conteúdo do arquivo 02-animals-around-us.md
4. THE Seção_Linha_a_Linha SHALL exibir cada frase em inglês seguida da tradução em português, conforme a seção "Versão Linha a Linha" do arquivo 02-animals-around-us.md
5. THE Seção_Vocabulário SHALL exibir os nomes de animais em cards com significado, exemplo e contexto, conforme a seção "Palavras Importantes" do arquivo 02-animals-around-us.md
6. WHEN uma palavra estiver em negrito no markdown original, THE Página_da_Aula SHALL exibir essa Palavra_Destacada com a mesma cor de destaque utilizada no Texto 1

### Requisito 5: Classe CSS para Palavras Destacadas

**User Story:** Como aluno, eu quero que as palavras-chave dos textos sejam visualmente destacadas com cor diferente, para que eu identifique facilmente os termos importantes durante o estudo.

#### Critérios de Aceitação

1. THE style.css SHALL conter uma nova classe CSS para Palavra_Destacada que aplique uma cor de destaque visível e harmoniosa com o design existente
2. THE Palavra_Destacada SHALL ser exibida com cor diferente do texto normal, sem depender apenas de negrito
3. THE Palavra_Destacada SHALL manter legibilidade em dispositivos móveis e desktop
4. WHEN a Palavra_Destacada aparecer na Seção_Lado_a_Lado, THE Página_da_Aula SHALL aplicar a classe de destaque tanto no texto em inglês quanto no texto em português

### Requisito 6: Desbloquear Aula 02 na Página Principal

**User Story:** Como aluno, eu quero ver a Aula 02 desbloqueada na página principal, para que eu possa acessá-la diretamente pela seção de Aulas.

#### Critérios de Aceitação

1. WHEN o aluno acessar a seção Aulas da Página_Principal, THE Card_de_Aula da Aula 02 SHALL ser exibido sem opacidade reduzida (remover style="opacity: 0.6")
2. THE Card_de_Aula da Aula 02 SHALL exibir os nomes dos textos: "My Simple Day" e "Animals Around Us" em vez de "Em breve..."
3. THE Card_de_Aula da Aula 02 SHALL conter um botão "📚 Acessar" com link funcional para Aula-02/index.html, em vez do botão "🔒 Em Breve" desabilitado
4. THE Card_de_Aula da Aula 02 SHALL manter o mesmo padrão visual dos cards desbloqueados (gradiente de cor, hover, sombra)

### Requisito 7: Atualizar Seção de Progresso

**User Story:** Como aluno, eu quero ver meu progresso atualizado na página principal, para que eu saiba que avancei para a Semana 2.

#### Critérios de Aceitação

1. THE Página_Principal SHALL exibir "Semana 2 de 48" na seção de progresso geral
2. THE Página_Principal SHALL atualizar a barra de progresso para refletir 2 semanas de 48 (aproximadamente 4%)
3. THE Página_Principal SHALL exibir "2 / 48" em Semanas Conquistadas
4. THE Página_Principal SHALL exibir "4 / 96" em Histórias Aprendidas
5. THE Página_Principal SHALL exibir "46 semanas" em "Falta Pouco!"
6. THE Página_Principal SHALL atualizar o contador de Palavras Estudadas para incluir as palavras da Aula 02

### Requisito 8: Atualizar Todos-Os-Textos.md

**User Story:** Como administrador do curso, eu quero que o arquivo Todos-Os-Textos.md contenha os textos da Aula 02, para que a ferramenta Voyant Tools analise todo o vocabulário estudado.

#### Critérios de Aceitação

1. THE Todos-Os-Textos.md SHALL conter os textos em inglês da Aula 02 ("My Simple Day" e "Animals Around Us") adicionados após os textos existentes
2. THE Todos-Os-Textos.md SHALL manter os textos da Aula 01 intactos
3. THE Todos-Os-Textos.md SHALL separar cada texto com uma linha divisória (---)
