---
inclusion: auto
---

# Padrão para Gerar Descrições de Vídeos do YouTube

Quando o usuário pedir "gere a descrição do vídeo da Aula XX Texto Y" ou similar, siga este processo:

## Como Gerar

1. Ler o markdown do texto: `Aula-XX/0Y-nome-do-texto/0Y-nome-do-texto.md`
2. Extrair: nome do texto, tema, vocabulário principal, frases prontas, expressões-chave
3. Gerar título, descrição e tags usando o template abaixo

## Formato do Título

```
Aula XX - Texto 0Y [Nome do Texto] | Inglês com Tio Binho 🇺🇸
```

Exemplos:
- `Aula 01 - Texto 01 Talking to People | Inglês com Tio Binho 🇺🇸`
- `Aula 01 - Texto 02 Colors and Numbers in Real Life | Inglês com Tio Binho 🇺🇸`
- `Aula 05 - Texto 01 At the Restaurant | Inglês com Tio Binho 🇺🇸`

## Formato da Descrição

```
🎯 [FRASE MOTIVACIONAL — 1 linha sobre o tema, animadora e direta]

Nesse vídeo você vai aprender inglês com a história "[Nome do Texto]"! A gente vai ver as palavras mais importantes, frases prontas pra usar na vida real e um mini diálogo prático.

📖 O que você vai aprender:
✅ [Tema/habilidade 1 extraído do texto]
✅ [Tema/habilidade 2]
✅ [Tema/habilidade 3]
✅ [Tema/habilidade 4]

🔤 Palavras-chave desse texto:
[lista de 8-12 palavras principais do texto, separadas por " · "]

⏱️ Esse vídeo é um resumo da aula. O texto completo com áudio original em inglês está no app!

📱 ACESSE O APP GRATUITO:
👉 https://ingles-com-tio-binho.vercel.app/

No app você encontra:
📖 Texto completo em inglês e português lado a lado
🎧 Áudio original pra treinar o ouvido
📝 Vocabulário e frases importantes
🗣️ Guia de estudo com os 6 passos do método

🔔 Se inscreve no canal e ativa o sininho pra não perder nenhuma aula!

📚 Essa é a Aula [XX] — Semana [X] do curso "Inglês com Tio Binho"
🎯 Curso completo: do ZERO ao intermediário em 12 meses!

💬 Deixa nos comentários: qual palavra desse texto você achou mais difícil?

#inglês #aprenderinglês #inglêsdozero #tiobinho #auladeinglês #inglêsparabrasileiros
```

## Formato das Tags

```
inglês, aprender inglês, inglês do zero, inglês para iniciantes, inglês com tio binho, tio binho, aula de inglês, inglês fácil, inglês para brasileiros, inglês para crianças, curso de inglês grátis, inglês básico, vocabulário inglês, frases em inglês, como aprender inglês, [nome do texto], [2-3 tags específicas do tema]
```

## Regras

- A frase motivacional deve ser curta, animadora e relacionada ao tema do texto
- Os 4 temas/habilidades devem ser extraídos do conteúdo real do markdown
- As palavras-chave devem ser as mais importantes do texto (verbos, substantivos-chave)
- O link do app SEMPRE aparece em destaque
- As tags específicas devem refletir o tema (ex: "restaurante em inglês", "viagem em inglês")
- Gerar tudo pronto pra copiar e colar no YouTube Studio

## Configurações Padrão no YouTube Studio

Esses campos ficam em "Mostrar mais" na página de Detalhes. Usar SEMPRE os mesmos valores:

- **Idioma do vídeo:** Português (Brasil)
- **Legendas:** Nenhuma (por enquanto)
- **Categoria:** Educação
- **Público:** Sim, é conteúdo para crianças (marcar "Sim, é feito para crianças")
- **Comentários:** Ativados
- **Licença:** Licença padrão do YouTube

## Referências

- Template completo: #[[file:youtube-template-videos.md]]
- Textos das aulas: `Aula-XX/0Y-nome-do-texto/0Y-nome-do-texto.md`
