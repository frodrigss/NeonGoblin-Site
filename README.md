# NeonGoblin — Site

Landing page for a fictional indie studio com estética neon e temática goblin.

## Como rodar localmente

1. Abra a pasta do projeto no seu editor (ex.: VS Code).
2. Sirva o diretório com um servidor estático simples ou abra `index.html` direto no navegador. Servir via HTTP garante carregamento correto de fontes externas.

Exemplo com Python (Windows PowerShell):

```powershell
python -m http.server 8000
# Depois acesse http://localhost:8000
```

## Estrutura do projeto

```
.
├── index.html
├── assets
│   ├── css
│   │   └── styles.css
│   ├── js
│   │   └── script.js
│   └── images
│       └── logo.png
├── README.md
└── LICENSE
```

- `index.html` — Estrutura completa com hero, destaques, vitrine filtrável de jogos, CTA e modal de detalhes.
- `assets/css/styles.css` — Layout responsivo, grid animado, cartões com efeitos neon e suporte à navegação móvel.
- `assets/js/script.js` — Partículas interativas, menu hambúrguer, scroll spy, lista de jogos gerada via dados, filtros, modal e validação do formulário.
- `assets/images/logo.png` — Marca do estúdio utilizada no cabeçalho e rodapé.

## Notas de design

- Paleta neon baseada em verdes, azuis e laranja quente para destaques.
- Tipografia primária com `Inter` e exibição de títulos em gradiente para reforçar a identidade.
- Focus visível, estrutura semântica e estados ARIA para navegação acessível e componentes interativos.

## Próximos passos sugeridos

- Criar páginas detalhadas por jogo com trailer, screenshots e roadmap.
- Conectar o formulário a uma ferramenta real de mailing (ex.: Buttondown, Mailchimp).
- Adicionar seleção de idioma e alternância de tema (light/dark) persistente.
