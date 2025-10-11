# NeonGoblin — Site Demo

Projeto demo de site para a fictícia NeonGoblin — estúdio de jogos com personalidade neon/goblin.

Como executar localmente

1. Abra a pasta do projeto no seu editor (ex: VS Code).
2. Abra `index.html` no navegador. Para melhor comportamento (CORS e fontes), recomendo servir via um servidor estático simples.

Exemplo com Python (Windows PowerShell):

```powershell
python -m http.server 8000
# Depois abra http://localhost:8000
```

O que está incluído

- `index.html` — estrutura do site (hero, about, games, footer)
- `styles.css` — estilos responsivos, paleta verde/neon, fontes pixel-like
- `script.js` — partículas interativas no hero, microinterações de botões
- `logo.svg` — logotipo (fornecido)

Notas de design

- Paleta principal: verde `#228B22`, variações e vermelho `#e63946` para contraste
- Tipografia: `Press Start 2P` (pixel feel) para títulos + `Inter` para corpo
- Acesso: foco visível, contraste razoável, elementos semânticos e aria labels básicos.

Próximos passos sugeridos

- Adicionar páginas de jogo detalhadas com trailers e screenshots
- Melhorar performance do canvas (reduzir partículas em low-end)
- Incluir preferências de tema (modo claro/escuro)
