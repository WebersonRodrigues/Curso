---
inclusion: auto
---

# Padrão para Criação de Revisões — Inglês com Tio Binho

Este documento define o padrão obrigatório para criar qualquer nova revisão no projeto. Toda nova revisão DEVE seguir fielmente esta estrutura.

## Quando Criar uma Revisão

- A cada 4 aulas, criar uma revisão consolidando o conteúdo do bloco
- Revisão 01 = Aulas 01-04 (Bloco 1)
- Revisão 02 = Aulas 05-08 (Bloco 2)
- Revisão 03 = Aulas 09-12 (Bloco 3)
- E assim por diante...

## Estrutura de Pastas

```
Revisao-XX/
└── index.html    # Página HTML completa da revisão (scroll contínuo, sem abas)
```

## Como Gerar uma Revisão

Quando o usuário pedir "gere revisão das aulas X a Y":

### 1. Ler os textos markdown de cada aula do bloco
- Ler `Aula-XX/01-*/01-*.md` e `Aula-XX/02-*/02-*.md` de cada aula
- Extrair: vocabulário, verbos, expressões, traduções de cada texto

### 2. Calcular estatísticas
- Contar palavras acumuladas: somar ~170 palavras por aula (85 por texto) ao total anterior
- Histórias: 2 por aula × número de aulas até ali
- Semanas: igual ao número da última aula do bloco
- Porcentagem: semanas / 48 × 100

### 3. Criar `Revisao-XX/index.html`

A página DEVE conter estas seções nesta ordem:

#### Head + Toolbar + Breadcrumb
- Mesmo padrão das páginas de aula (meta tags PWA, DM Sans, ../style.css, favicons, Supabase)
- Toolbar com logo → `../index.html` e botão "← Voltar"
- Breadcrumb: `🏠 Home › Revisão XX`

#### Cabeçalho
- Título: "📝 Revisão — Bloco X (Semanas Y a Z)"
- Subtítulo: "N textos estudados · X.XXX palavras · N semanas"

#### Seção: Vídeo Resumo
- Título: "🎬 Vídeo Resumo do Bloco X"
- Iframe YouTube responsivo 16:9 com placeholder `VIDEO_ID_AQUI`
- Mensagem: "⏳ Vídeo será adicionado em breve!"

#### Seção: Textos Estudados
- 4 cards com gradientes da paleta (vermelho, teal, amarelo, verde)
- Cada card: "Aula XX — Semana Y" com 2 textos linkando para `../Aula-XX/index.html`

#### Seção: Progresso
- Número grande de palavras com "de 8.160"
- Barra de progresso com porcentagem
- Grid 3 colunas: Histórias (X/96), Semanas (X/48), % Completo
- SEM usar `.info-cards` dentro de container cinza (evitar card dentro de card no mobile)

#### Seção: Texto Motivacional
- Card com gradiente roxo (#667eea → #764ba2)
- Explicar que as palavras estudadas são vocabulário passivo
- Comparar com níveis CEFR (A1 precisa ~500, A2 ~1000, B1 ~2000)
- Dicas para transformar passivo em ativo:
  - Ouvir áudios várias vezes
  - Ler textos em voz alta (internaliza frases, com o tempo sai naturalmente)
  - Repetir frases em voz alta
  - Fazer shadowing (pensar em inglês automaticamente)
  - Revisar no Anki todo dia
- Mensagem motivacional de fechamento

#### Seção: Vocabulário Consolidado
- 1 card por categoria de vocabulário encontrada nos textos do bloco
- Cada card com gradiente diferente da paleta do projeto
- Tabelas com colunas: English | Português
- Organizar por tema (verbos, substantivos, adjetivos, etc.)
- Usar emojis nos nomes dos animais, comidas, etc.

#### Seção: Expressões-Chave do Bloco
- Título: "🔑 Expressões-Chave do Bloco X"
- Tabela com header gradiente azul (#2563eb → #1d4ed8)
- Colunas: Expressão | Exemplo | Tradução
- Incluir TODAS as expressões importantes dos textos do bloco

#### Footer + JavaScript
- Footer: "Revisão XX — Bloco X (Semanas Y a Z)" + mensagem motivacional
- Botão voltar ao topo
- PWA install banner (mesmo código das aulas)
- Scripts: platform-detect.js, supabase-config.js, auth.js, access-log.js, initAuth()
- SEM abas (scroll contínuo)

### 4. Atualizar `index.html` principal

Inserir card de revisão na `aulas-grid` APÓS o card da última aula do bloco:

```html
<!-- Card de Revisão - Bloco X -->
<div class="aula-card revisao-card" style="grid-column: 1 / -1; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);">
    <h3 style="color: #fff;">📝 Revisão — Semanas Y a Z</h3>
    <p style="color: #fff;"><strong>Bloco X</strong></p>
    <div class="textos" style="color: rgba(255,255,255,0.9);">
        📖 Texto 1 · Texto 2<br>
        📖 Texto 3 · Texto 4<br>
        📖 Texto 5 · Texto 6<br>
        📖 Texto 7 · Texto 8
    </div>
    <a href="Revisao-XX/index.html" class="btn" style="color: #764ba2;">📚 Acessar Revisão</a>
</div>
```

## Paleta de Gradientes para Cards de Vocabulário

Rotacionar entre estes gradientes nos cards:
1. Vermelho coral: `linear-gradient(135deg, #FF6B6B 0%, #FF8E72 100%)` — texto branco
2. Teal: `linear-gradient(135deg, #4ECDC4 0%, #44A08D 100%)` — texto branco
3. Amarelo: `linear-gradient(135deg, #FFD93D 0%, #FFC93C 100%)` — texto #1a1a1a
4. Verde menta: `linear-gradient(135deg, #A8E6CF 0%, #56AB91 100%)` — texto branco
5. Rosa: `linear-gradient(135deg, #FF9A9E 0%, #FAD0C4 100%)` — texto #1a1a1a
6. Roxo: `linear-gradient(135deg, #667eea 0%, #764ba2 100%)` — texto branco

## Referência

Use como modelo:
- #[[file:Revisao-01/index.html]] (modelo de revisão completa)
- #[[file:index.html]] (página principal para inserir card de revisão)
- #[[file:style.css]] (CSS compartilhado)
