---
inclusion: auto
---

# Padrão para Criação de Novas Aulas - Inglês com Tio Binho

Este documento define o padrão obrigatório para criar qualquer nova aula no projeto. Toda nova aula DEVE seguir fielmente esta estrutura.

## Estrutura de Pastas

Cada aula segue este padrão de diretórios:

```
Aula-XX/
├── index.html                          # Página HTML da aula
├── Leia-aqui-primeiro.md               # Guia de estudo em markdown
├── 01-nome-do-texto/
│   ├── 01-nome-do-texto.md             # Texto completo + vocabulário em markdown
│   ├── 01-nome-do-texto.mp3            # Áudio do texto
│   └── 01-nome-do-texto.pdf            # PDF para download (opcional)
└── 02-nome-do-texto/
    ├── 02-nome-do-texto.md             # Texto completo + vocabulário em markdown
    ├── 02-nome-do-texto.mp3            # Áudio do texto
    └── 02-nome-do-texto.pdf            # PDF para download (opcional)
```

## Estrutura do index.html da Aula

O arquivo `Aula-XX/index.html` DEVE conter exatamente estas seções, nesta ordem:

### Head
- Meta tags PWA (theme-color, mobile-web-app-capable, apple-mobile-web-app-capable, etc.)
- Título: `Aula XX - Tio Binho`
- Link para `../manifest.json`
- Favicons apontando para `../favicon.*`
- Google Fonts: DM Sans (400, 500, 700)
- Link para `../style.css` (CSS compartilhado)

### Toolbar
- Logo com link para `../index.html`
- Botão "← Voltar" com link para `../index.html`

### Container com 3 abas (Guia, Texto 1, Texto 2)

#### Aba 0 - Guia (📋 Guia)
Conteúdo extraído do `Leia-aqui-primeiro.md`. Seções obrigatórias:
1. **🎯 Objetivo da Semana** - Descrição do que será aprendido
2. **📖 Textos da Semana** - Nome, tema, verbos/vocabulário principal e duração de cada texto
3. **🧠 Como Estudar os Textos** - Os 6 passos do método:
   - Passo 1: Compreensão Inicial (ler em português 3x)
   - Passo 2: Listening com Texto (áudio + texto em inglês, 5 min)
   - Passo 3: Listening com Tradução (áudio + texto em português, 5 min)
   - Passo 4: Listening Puro (só áudio, 5 min)
   - Passo 5: Anki (frase por frase)
   - Passo 6: Shadowing (repetir junto com áudio)
4. **💡 Dicas Importantes** - 5 dicas padrão (consistência, sem perfeição, repetição, fones, falar em voz alta)
5. **❓ Dúvidas Comuns** - 4 perguntas padrão (entender 100%?, tempo?, pular Anki?, shadowing perfeito?)

#### Aba 1 - Texto 1 e Aba 2 - Texto 2
Cada aba de texto DEVE conter, nesta ordem:

1. **Título** - `<h2>` com ícone e nome do texto
2. **Vídeo Resumo do YouTube** - Iframe YouTube responsivo 16:9 com placeholder `VIDEO_ID_AQUI` antes do áudio

```html
<div style="margin-bottom: 20px;">
    <h3 style="color: #2563eb; margin-bottom: 12px; font-size: 1.1em;">🎬 Vídeo Resumo</h3>
    <div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; border-radius: 12px; box-shadow: 0 5px 20px rgba(0,0,0,0.1);">
        <iframe src="https://www.youtube.com/embed/VIDEO_ID_AQUI" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none;" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
    <p style="text-align: center; color: #999; font-size: 0.85em; margin-top: 8px;">⏳ Vídeo será adicionado em breve!</p>
</div>
```

IMPORTANTE: Cada texto tem seu próprio vídeo. São 2 vídeos por aula (1 por texto). O `VIDEO_ID_AQUI` será substituído pelo ID real do YouTube quando o vídeo estiver pronto.

3. **Seção de Áudio** - Player `<audio>` com source apontando para o MP3 + botão de download do PDF (se existir)
4. **Texto Lado a Lado (side-by-side)** - Duas colunas:
   - Coluna esquerda: "US English" - texto completo em inglês
   - Coluna direita: "BR Português" - tradução completa em português
5. **Linha a Linha** - Cada frase em inglês seguida da tradução, separadas por bordas
6. **Vocabulário/Explicações** - Cards com as palavras ou verbos importantes do texto, cada um com: nome, significado, exemplo de uso e "por quê"

### Palavras em Destaque

Palavras que estão em **negrito** nos arquivos markdown DEVEM ser renderizadas com a classe CSS `palavra-destaque`:

```html
<span class="palavra-destaque">palavra</span>
```

Esta classe já existe no `style.css` e aplica cor vermelha (#e63946) + negrito. Usar em TODAS as seções: texto lado a lado, linha a linha e vocabulário.

IMPORTANTE: As palavras em destaque nos markdowns (entre `**`) representam os verbos ou vocabulário-chave da aula. Elas DEVEM aparecer destacadas tanto no texto em inglês quanto na tradução em português.

### Footer
- Nome da aula
- Mensagem motivacional

### JavaScript (no final do body)
Funções obrigatórias:
- `showText(textNumber)` - Troca entre as 3 abas
- `scrollToTop()` - Botão voltar ao topo
- Registro do Service Worker (`../sw.js`)
- Banner de instalação PWA (mesmo código das outras aulas)
- Feedback visual nos botões (scale 0.93)
- Navegação por teclado (ArrowLeft/ArrowRight nas abas)
- Lazy load de áudio

## Atualizações na Página Principal (index.html)

Ao adicionar uma nova aula, SEMPRE atualizar no `index.html` principal:

1. **Seção Aulas (#aulas)** - Desbloquear o card da aula:
   - Remover `style="opacity: 0.6;"` do `.aula-card`
   - Trocar o botão `🔒 Em Breve` por `📚 Acessar` com link para `Aula-XX/index.html`
   - Adicionar os nomes dos textos no card
2. **Seção Progresso (#progresso)** - Atualizar:
   - "Semana X de 48"
   - Barra de progresso (width %)
   - "Histórias Aprendidas: X / 96"
   - "Falta Pouco! XX semanas"
   - "Palavras Estudadas: X / 8.160" (calcular ~85 palavras novas por texto × número de textos)

## Atualização do Todos-Os-Textos.md

Adicionar os textos em inglês da nova aula ao arquivo `Todos-Os-Textos.md`, separados por `---`. Este arquivo alimenta o Voyant Tools para análise de vocabulário.

## Estilo Visual

- Usar SEMPRE o CSS compartilhado (`../style.css`), nunca CSS inline para componentes que já têm classe
- Manter a paleta de gradientes do projeto (vermelho coral, teal, amarelo, verde menta, rosa)
- Cards de vocabulário com `border-left: 3px solid #2563eb`
- Seções do guia com `background: #f9f9f9; border-left: 4px solid #2563eb`
- Seção de áudio com classe `.audio-section`
- Textos lado a lado com classe `.side-by-side` > `.column`
- Linha a linha com fundo `#f9f9f9`, inglês em `color: #2563eb` e português em `color: #666`

## Referência

Use como modelo os arquivos:
- #[[file:Aula-02/index.html]] (modelo mais recente com palavra-destaque)
- #[[file:style.css]] (CSS compartilhado)
- #[[file:index.html]] (página principal para atualizar cards e progresso)
