---
inclusion: auto
---

# Visão Geral do Projeto — Inglês com Tio Binho

## O que é

PWA de ensino de inglês do zero ao B2 em 12 meses. Público-alvo: crianças e iniciantes brasileiros. O curso usa a metodologia de texto + áudio com repetição (listening, shadowing, Anki). Tom informal, divertido e motivacional.

## Stack Técnica

- HTML/CSS/JS puro (sem frameworks)
- CSS compartilhado: `style.css` (todas as páginas referenciam)
- Supabase: autenticação Google OAuth + banco de dados (usuários, registros de acesso)
- PWA: `manifest.json` + `sw.js` (service worker)
- Fonte: Google Fonts DM Sans (400, 500, 700)

## Estrutura do Projeto

```
/                           # Raiz do projeto
├── index.html              # Página principal (Home, Objetivo, Aulas, Progresso)
├── style.css               # CSS compartilhado por TODAS as páginas
├── auth.js                 # Autenticação (Google OAuth, visitante, sessão)
├── access-log.js           # Registro de acessos no Supabase
├── platform-detect.js      # Detecção de plataforma (iOS, Android, standalone)
├── supabase-config.js      # Configuração do Supabase (URL, chave, admins)
├── sw.js                   # Service Worker para PWA
├── manifest.json           # Manifesto PWA
├── Todos-Os-Textos.md      # Todos os textos em inglês (alimenta Voyant Tools)
│
├── Aula-XX/                # Pasta de cada aula (01, 02, 03...)
│   ├── index.html          # Página da aula (3 abas: Guia, Texto 1, Texto 2)
│   ├── Leia-aqui-primeiro.md
│   ├── 01-nome-texto/      # Subpasta do texto 1
│   │   ├── 01-nome-texto.md
│   │   ├── 01-nome-texto.mp3
│   │   └── 01-nome-texto.pdf
│   └── 02-nome-texto/      # Subpasta do texto 2
│
└── Revisao-XX/             # Pasta de cada revisão (01, 02, 03...)
    └── index.html          # Página da revisão (scroll contínuo, sem abas)
```

## Fluxo de Autenticação

1. Usuário abre `index.html` → vê tela de login (overlay)
2. Opções: "Entrar com Google" ou "Entrar como Visitante"
3. Google: OAuth via Supabase → redireciona de volta → sessão ativa
4. Visitante: `sessionStorage.visitante = true` → sem persistência
5. Páginas de aula/revisão: se sem sessão, redireciona para `../index.html`
6. Toda página carrega: `platform-detect.js` → `supabase-config.js` → `auth.js` → `access-log.js` → `initAuth()`

## Scripts obrigatórios em TODA página (aula ou revisão)

```html
<script src="../platform-detect.js"></script>
<script src="../supabase-config.js"></script>
<script src="../auth.js"></script>
<script src="../access-log.js"></script>
<script>
    document.addEventListener('DOMContentLoaded', function() {
        initAuth();
    });
</script>
```

## Página Principal (index.html)

4 seções navegáveis via toolbar:
- **Home**: Capa + boas-vindas + info cards
- **Objetivo**: Metodologia, como funciona, metas por trimestre
- **Aulas**: Grade de cards (`aulas-grid`) com aulas + revisões
- **Progresso**: Semanas, histórias, palavras, Voyant Tools iframe, desafio da semana

### Grade de Aulas (aulas-grid)

Ordem dos cards na grade:
```
Aula 01 → Aula 02 → Aula 03 → Aula 04 → [Revisão 01 full-width]
Aula 05 → Aula 06 → Aula 07 → Aula 08 → [Revisão 02 full-width]
...
```

Cards de revisão usam `grid-column: 1 / -1` + gradiente roxo (#667eea → #764ba2).

## Ao Adicionar Nova Aula — Checklist

1. Criar pasta `Aula-XX/` seguindo `padrao-aulas.md`
2. Cada texto DEVE ter um vídeo resumo do YouTube (iframe 16:9) ANTES do player de áudio — usar placeholder `VIDEO_ID_AQUI`
3. Atualizar `index.html`:
   - Adicionar card na `aulas-grid` (verificar nth-child no CSS pra gradiente)
   - Atualizar seção Progresso (semanas, histórias, palavras, barra)
4. Atualizar `Todos-Os-Textos.md` com os textos em inglês
5. Atualizar Voyant Tools corpus se necessário

## Ao Adicionar Nova Revisão — Checklist

1. Criar pasta `Revisao-XX/` seguindo `padrao-revisoes.md`
2. Atualizar `index.html`: inserir card de revisão após a última aula do bloco

## Contagem de Palavras

- ~85 palavras novas por texto × 2 textos por aula = ~170 por aula
- Total do curso: 8.160 palavras (48 semanas × 170)
- Progresso atual (4 aulas): 1.284 palavras

## Níveis CEFR — Referência

| Nível | Palavras necessárias | Meses no curso |
|-------|---------------------|----------------|
| A1    | ~500                | 1-3            |
| A2    | ~1.000              | 4-6            |
| B1    | ~2.000              | 7-9            |
| B2    | ~4.000              | 10-12          |

## Paleta de Cores

- Vermelho coral: #FF6B6B → #FF8E72
- Teal: #4ECDC4 → #44A08D
- Amarelo: #FFD93D → #FFC93C
- Verde menta: #A8E6CF → #56AB91
- Rosa: #FF9A9E → #FAD0C4
- Roxo (revisões): #667eea → #764ba2
- Azul destaque: #2563eb
- Palavra destaque (CSS): #e63946 (classe `.palavra-destaque`)

## Metodologia de Ensino (6 passos)

1. Compreensão Inicial — ler texto em português 3x
2. Listening com Texto — áudio + texto em inglês (5 min)
3. Listening com Tradução — áudio + texto em português (5 min)
4. Listening Puro — só áudio (5 min)
5. Anki — frase por frase com áudio
6. Shadowing — repetir junto com o áudio

## Referências Rápidas

- Modelo de aula: #[[file:Aula-02/index.html]]
- Modelo de revisão: #[[file:Revisao-01/index.html]]
- CSS compartilhado: #[[file:style.css]]
- Página principal: #[[file:index.html]]
- Padrão de aulas: #[[file:.kiro/steering/padrao-aulas.md]]
- Padrão de revisões: #[[file:.kiro/steering/padrao-revisoes.md]]
