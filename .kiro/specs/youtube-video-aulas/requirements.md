# Requirements Document

## Introduction

Integração de vídeo-aulas do YouTube nas páginas de aula do PWA "Inglês com Tio Binho". Cada texto de cada aula terá um player de vídeo do YouTube embutido (iframe embed) posicionado antes da seção de áudio, permitindo que o aluno assista à explicação do Tio Binho diretamente no app ou abra o vídeo no YouTube. O canal é @InglescomTioBinho e cada texto do curso terá um vídeo correspondente.

## Glossary

- **Página_de_Aula**: Arquivo HTML independente localizado em `Aula-XX/index.html` que contém o sistema de abas (Guia, Texto 1, Texto 2) de uma aula semanal
- **Seção_de_Texto**: Conteúdo exibido ao clicar em "Texto 1" ou "Texto 2" dentro de uma Página_de_Aula, identificado pelo div `#text-1` ou `#text-2`
- **Seção_de_Áudio**: Componente com classe `.audio-section` dentro de uma Seção_de_Texto que contém o player de áudio e o botão de download do PDF
- **Seção_de_Vídeo**: Novo componente a ser criado que exibe o player embed do YouTube e o link para abrir no YouTube, posicionado antes da Seção_de_Áudio
- **Player_Embed**: Iframe responsivo do YouTube que reproduz o vídeo dentro do app sem redirecionar o aluno
- **Link_YouTube**: Link clicável que abre o vídeo correspondente diretamente no YouTube (nova aba ou app do YouTube)
- **Video_ID**: Identificador único do vídeo no YouTube (ex: `dQw4w9WgXcQ`), usado para construir a URL do embed e do link

## Requirements

### Requirement 1: Exibição do Vídeo Embed do YouTube

**User Story:** Como aluno, eu quero ver o vídeo explicativo do Tio Binho embutido dentro do texto da aula, para que eu possa assistir à explicação sem sair do app.

#### Acceptance Criteria

1. WHEN o aluno abre uma Seção_de_Texto (Texto 1 ou Texto 2), THE Seção_de_Vídeo SHALL exibir um Player_Embed do YouTube com o vídeo correspondente àquele texto
2. THE Seção_de_Vídeo SHALL ser posicionada entre o título do texto (h2) e a Seção_de_Áudio, como primeiro elemento interativo da Seção_de_Texto
3. THE Player_Embed SHALL utilizar um iframe com a URL `https://www.youtube-nocookie.com/embed/{Video_ID}` para preservar a privacidade do aluno
4. THE Player_Embed SHALL manter proporção 16:9 e ocupar 100% da largura disponível do container

### Requirement 2: Link para Abrir no YouTube

**User Story:** Como aluno, eu quero ter a opção de abrir o vídeo diretamente no YouTube, para que eu possa assistir no app do YouTube se preferir.

#### Acceptance Criteria

1. THE Seção_de_Vídeo SHALL exibir um Link_YouTube com o texto "▶ Assistir no YouTube" abaixo do Player_Embed
2. WHEN o aluno clica no Link_YouTube, THE Página_de_Aula SHALL abrir a URL `https://www.youtube.com/watch?v={Video_ID}` em uma nova aba do navegador
3. THE Link_YouTube SHALL utilizar o atributo `target="_blank"` e `rel="noopener noreferrer"` para segurança

### Requirement 3: Design Responsivo e Consistente

**User Story:** Como aluno que usa celular, eu quero que o vídeo se adapte bem à tela do meu dispositivo, para que eu tenha uma boa experiência assistindo pelo app.

#### Acceptance Criteria

1. THE Seção_de_Vídeo SHALL utilizar estilos CSS consistentes com a paleta de cores existente (gradiente coral `#FFE5E5 → #FFF0E5`, borda lateral `#FF6B6B`)
2. WHILE a largura da tela for menor ou igual a 768px, THE Player_Embed SHALL manter a proporção 16:9 usando a técnica de `aspect-ratio: 16/9` com `width: 100%`
3. WHILE a largura da tela for menor ou igual a 480px, THE Seção_de_Vídeo SHALL reduzir o padding para manter o conteúdo legível
4. THE Seção_de_Vídeo SHALL ter `border-radius: 12px` e `margin-bottom: 20px` para manter consistência visual com a Seção_de_Áudio

### Requirement 4: Comportamento sem Vídeo Disponível

**User Story:** Como aluno, eu quero que a aula funcione normalmente mesmo quando o vídeo ainda não foi publicado, para que meu estudo não seja prejudicado.

#### Acceptance Criteria

1. IF o Video_ID de um texto não estiver configurado (vazio ou ausente), THEN THE Página_de_Aula SHALL ocultar completamente a Seção_de_Vídeo para aquele texto
2. IF o Video_ID não estiver configurado, THEN THE Seção_de_Áudio SHALL permanecer como primeiro elemento interativo da Seção_de_Texto, mantendo o comportamento atual
3. THE Página_de_Aula SHALL permitir que Texto 1 tenha vídeo configurado enquanto Texto 2 não tenha, e vice-versa, de forma independente

### Requirement 5: Configuração dos Vídeos por Texto

**User Story:** Como desenvolvedor (Tio Binho), eu quero uma forma simples de configurar o Video_ID de cada texto em cada aula, para que eu possa adicionar vídeos conforme vou publicando no YouTube.

#### Acceptance Criteria

1. THE Página_de_Aula SHALL armazenar os Video_IDs em atributos `data-youtube-id` nos elementos de Seção_de_Texto (`#text-1` e `#text-2`)
2. WHEN uma nova aula é criada, THE Página_de_Aula SHALL incluir os atributos `data-youtube-id` vazios por padrão nos elementos de Seção_de_Texto
3. THE Página_de_Aula SHALL utilizar JavaScript para ler o atributo `data-youtube-id` e gerar dinamicamente a Seção_de_Vídeo com o Player_Embed e o Link_YouTube

### Requirement 6: Acessibilidade do Player de Vídeo

**User Story:** Como aluno, eu quero que o player de vídeo seja acessível, para que todos possam interagir com o conteúdo.

#### Acceptance Criteria

1. THE Player_Embed SHALL incluir o atributo `title` com o texto descritivo "Vídeo explicativo: {nome_do_texto}" no iframe
2. THE Player_Embed SHALL incluir o atributo `allowfullscreen` para permitir visualização em tela cheia
3. THE Link_YouTube SHALL incluir o atributo `aria-label` com o texto "Abrir vídeo {nome_do_texto} no YouTube (abre em nova aba)"

### Requirement 7: Aplicação em Todas as Aulas Existentes

**User Story:** Como desenvolvedor, eu quero que a estrutura de vídeo seja adicionada a todas as aulas já criadas, para que eu possa ir adicionando os vídeos conforme publico no YouTube.

#### Acceptance Criteria

1. THE Página_de_Aula de cada aula existente (Aula-01, Aula-02, Aula-03) SHALL incluir os atributos `data-youtube-id` nos elementos de Seção_de_Texto
2. THE CSS compartilhado (`style.css`) SHALL conter os estilos da Seção_de_Vídeo para que todas as aulas presentes e futuras utilizem o mesmo visual
3. THE JavaScript de geração da Seção_de_Vídeo SHALL ser implementado de forma reutilizável, presente em cada Página_de_Aula ou em um arquivo JS compartilhado
