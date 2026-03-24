---
inclusion: auto
---

# Regras de PWA e Service Worker

## Service Worker (sw.js)

O projeto usa um Service Worker em `sw.js` na raiz com estratégia network-first e fallback para cache.

### Versionamento do Cache

- O cache é nomeado como `tio-binho-vX` (ex: `tio-binho-v8`)
- Ao fazer mudanças significativas no projeto (nova aula, alteração de CSS, mudança de estrutura), INCREMENTAR a versão do cache no `sw.js`
- Alterar a constante `CACHE_NAME` (ex: de `tio-binho-v8` para `tio-binho-v9`)
- O service worker automaticamente deleta caches antigos no evento `activate`

### Quando incrementar a versão

- Nova aula adicionada
- Alterações no `style.css`
- Alterações no `index.html` principal
- Mudanças em ícones ou imagens compartilhadas
- NÃO é necessário incrementar para edições menores dentro de uma aula já existente (a estratégia network-first já resolve)

## PWA em Páginas de Aula

Toda página `Aula-XX/index.html` DEVE incluir no JavaScript:
- Banner de instalação PWA (HTML do `#installBanner` + JS com `beforeinstallprompt`)
- Detecção de mobile para mostrar banner mesmo sem o evento nativo
- Verificação de modo standalone (não mostrar banner se já instalado)

O registro do service worker é feito na página principal (`index.html`), não nas páginas de aula. As páginas de aula herdam o SW já registrado.

## Manifest

O `manifest.json` na raiz é compartilhado por todas as páginas. As aulas referenciam via `../manifest.json`. Não criar manifests separados por aula.

## Referência

- #[[file:sw.js]]
- #[[file:manifest.json]]
