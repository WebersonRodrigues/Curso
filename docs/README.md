# 📚 Inglês com Tio Binho - Documentação do Projeto

## Visão Geral

PWA (Progressive Web App) educacional criado para ensinar inglês a crianças, seguindo uma metodologia própria baseada em listening, shadowing e repetição espaçada. As alunas instalam o app direto no celular e acessam aulas semanais com textos, áudios e guias de estudo.

**Stack:** HTML, CSS e JavaScript puro (sem frameworks, sem build tools)  
**Hospedagem:** Vercel  
**Tipo:** Site estático com funcionalidade PWA

---

## Estrutura de Pastas

```
/
├── index.html              # Página principal (SPA com 4 seções)
├── style.css               # CSS compartilhado (principal + aulas)
├── sw.js                   # Service Worker (cache e offline)
├── manifest.json           # Configuração do PWA
├── capa.png                # Imagem de capa da home
├── tiobinho.png            # Mascote (desativado temporariamente)
├── icone-192.png           # Ícone PWA 192x192
├── icone-512.png           # Ícone PWA 512x512
├── favicon.ico             # Favicon
├── favicon-96x96.png       # Favicon 96x96
├── favicon.svg             # Favicon SVG
├── apple-touch-icon.png    # Ícone para iOS
├── Objetivo-do-Curso.md    # Documento completo da metodologia
├── Todos-Os-Textos.md      # Compilado de textos (usado no Voyant Tools)
│
├── Aula-01/                # Aula da Semana 1
│   ├── index.html          # Página da aula (guia + 2 textos)
│   ├── Leia-aqui-primeiro.md   # Guia em markdown
│   ├── 01-Talking-to-People/
│   │   ├── 01-Talking-to-People.md    # Texto completo + vocabulário
│   │   ├── 01-Talking-to-People.mp3   # Áudio do texto
│   │   ├── 01-Talking-to-People.pdf   # PDF para download
│   │   └── 01-Talking-to-People.png   # Imagem de apoio
│   └── 02-Colors-and-Numbers-in-Real-Life/
│       ├── 02-Colors-and-Numbers-in-Real-Life.md
│       ├── 02-Colors-and-Numbers-in-Real-Life.mp3
│       ├── 02-Colors-and-Numbers-in-Real-Life.pdf
│       └── 02-Colors-and-Numbers-in-Real-Life.png
│
├── Aula-02/                # Aula da Semana 2 (conteúdo pronto, sem index.html)
│   ├── Leia-aqui-primeiro.md
│   ├── 01-verbos-essenciais/
│   │   ├── 01-verbos-essenciais.md
│   │   └── 01-verbos-essenciais.mp3
│   └── 02-animals-around-us/
│       ├── 02-animals-around-us.md
│       └── 02-animals-around-us.mp3
│
├── favicon/                # Favicons extras
└── docs/                   # Esta documentação
```

---

## Arquitetura da Aplicação

### Página Principal (`index.html`)

Funciona como uma SPA (Single Page Application) com 4 seções navegáveis:

| Seção | ID | Descrição |
|-------|----|-----------|
| Home | `#home` + `#home-content` | Capa visual + boas-vindas com cards informativos |
| Objetivo | `#objetivo` | Metodologia, cronograma e metas do curso |
| Aulas | `#aulas` | Grid de cards com links para cada aula |
| Progresso | `#progresso` | Barra de progresso, estatísticas e desafios semanais |

A navegação é feita pela função `showSection(sectionId)` que:
1. Esconde todas as seções (adiciona classe `hidden`)
2. Mostra a seção selecionada
3. Atualiza o estado ativo na navbar
4. Faz scroll suave até a seção

### Páginas de Aula (`Aula-XX/index.html`)

Cada aula é uma página HTML independente com sistema de abas:

| Aba | Conteúdo |
|-----|----------|
| 📋 Guia | Objetivo da semana, passos de estudo, dicas e FAQ |
| Texto 1 | Áudio + texto lado a lado (EN/PT) + linha a linha + vocabulário |
| Texto 2 | Mesmo formato do Texto 1 |

A troca de abas é feita pela função `showText(textNumber)` que esconde/mostra as divs `text-0`, `text-1`, `text-2`.

---

## PWA (Progressive Web App)

### manifest.json

- **display:** standalone (sem barra do navegador)
- **orientation:** portrait-primary (vertical)
- **theme_color:** #FF6B6B (vermelho coral)
- **ícones:** 96x96, 192x192, 512x512 (any + maskable)

### Service Worker (`sw.js`)

- **Cache:** `tio-binho-v8`
- **Estratégia:** Network First com fallback para cache
- **Pré-cache:** index.html, ícones, capa, manifest, fonte DM Sans
- **Offline:** Se a rede falhar, serve do cache. Se não tiver cache, serve index.html

### Banner de Instalação

Aparece automaticamente em dispositivos mobile:
1. Captura o evento `beforeinstallprompt` (Android)
2. Detecta mobile via user-agent como fallback
3. Não aparece se já está em modo standalone/PWA
4. Botão "Instalar" dispara o prompt nativo ou mostra instruções manuais

---

## CSS e Design

### Arquivo: `style.css`

CSS compartilhado entre a página principal e todas as páginas de aula.

**Paleta de cores (gradientes):**
- 🔴 Vermelho coral: `#FF6B6B → #FF8E72`
- 🟢 Teal: `#4ECDC4 → #44A08D`
- 🟡 Amarelo: `#FFD93D → #FFC93C`
- 🟢 Verde menta: `#A8E6CF → #56AB91`
- 🩷 Rosa: `#FF9A9E → #FAD0C4`
- 🔵 Azul (progresso): `#2563eb → #1e40af`

**Responsividade:**
- Desktop: layout padrão, toolbar sticky, grids multi-coluna
- Tablet/Mobile (≤768px): toolbar relativa, menu hambúrguer, grids 1 coluna
- Mobile pequeno (≤480px): fontes e espaçamentos reduzidos

**Componentes principais:**
- `.toolbar` — Barra de navegação com gradiente
- `.content` — Cards brancos com sombra e border-radius
- `.info-card` — Cards coloridos com gradiente
- `.aula-card` — Cards de aula com hover animado
- `.progress-bar` — Barra de progresso azul
- `.side-by-side` — Layout 2 colunas para texto EN/PT
- `.audio-section` — Player de áudio com botão de download
- `.back-to-top` — Botão flutuante para voltar ao topo

---

## Metodologia de Ensino

O curso segue uma progressão de 12 meses (48 semanas, 96 textos):

| Período | Nível | Meta |
|---------|-------|------|
| Meses 1-3 | A1 | Apresentação, palavras comuns, perguntas simples |
| Meses 4-6 | A2 | Conversas curtas, rotina, pedir ajuda |
| Meses 7-9 | B1 | Tópicos variados, opiniões, situações inesperadas |
| Meses 10-12 | B2 | Conversas fluidas, vocabulário amplo |

**Rotina de estudo por texto (6 passos):**
1. Ler em português 3x (compreensão)
2. Ouvir áudio + texto em inglês (5 min)
3. Ouvir áudio + texto em português (5 min)
4. Ouvir só o áudio (5 min)
5. Adicionar frases no Anki (memorização)
6. Shadowing — repetir junto com o áudio (fala)

**Ferramentas complementares:**
- Duolingo: 300 XP/semana para reforço
- Anki: revisão diária de frases completas
- Voyant Tools: visualização de palavras estudadas (iframe no progresso)

---

## Como Adicionar uma Nova Aula

### 1. Criar a estrutura de pastas

```
Aula-XX/
├── index.html
├── Leia-aqui-primeiro.md
├── 01-nome-do-texto/
│   ├── 01-nome-do-texto.md
│   ├── 01-nome-do-texto.mp3
│   └── 01-nome-do-texto.pdf
└── 02-nome-do-texto/
    ├── 02-nome-do-texto.md
    ├── 02-nome-do-texto.mp3
    └── 02-nome-do-texto.pdf
```

### 2. Criar o `index.html` da aula

Copiar `Aula-01/index.html` como base e atualizar:
- Título e número da aula
- Conteúdo do Guia (aba 0)
- Textos 1 e 2 (abas 1 e 2): áudio, texto EN/PT, linha a linha, vocabulário
- Caminhos dos arquivos de áudio e PDF

### 3. Atualizar a página principal

No `index.html` principal, na seção `#aulas`:
- Adicionar um novo `.aula-card` com link para `Aula-XX/index.html`
- Remover o estilo de bloqueio (`opacity: 0.6`, `cursor: not-allowed`)

### 4. Atualizar o progresso

Na seção `#progresso` do `index.html`:
- Atualizar "Semana X de 48"
- Atualizar "Histórias Aprendidas: X / 96"
- Atualizar "Palavras Estudadas: X / 8.160"
- Ajustar a largura da barra de progresso

### 5. Atualizar o Todos-Os-Textos.md

Adicionar os textos em inglês da nova aula ao arquivo `Todos-Os-Textos.md` (usado pelo Voyant Tools para análise de vocabulário).

### 6. Atualizar o Service Worker (se necessário)

Se quiser pré-cachear novos recursos, incrementar a versão do cache em `sw.js`:
```js
const CACHE_NAME = 'tio-binho-vX'; // incrementar
```

---

## Status Atual

| Item | Status |
|------|--------|
| Aula 01 (Semana 1) | ✅ Completa (index.html + conteúdo + áudios) |
| Aula 02 (Semana 2) | ⚠️ Conteúdo pronto (md + mp3), falta index.html |
| Aulas 03-48 | ❌ Não iniciadas |
| Mascote Tio Binho | 🔇 Desativado (poluía o mobile) |
| Progresso | 📊 Hardcoded (não é dinâmico) |

---

## Deploy

O projeto é hospedado na Vercel como site estático. Basta fazer push para o repositório Git conectado e o deploy é automático. Não há build step — os arquivos são servidos diretamente.
