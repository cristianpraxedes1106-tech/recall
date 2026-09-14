# RECALL

**Jogue. Aprenda. Evolua.**

RECALL é uma plataforma de estudo gamificada feita somente com HTML, CSS e JavaScript. O usuário cria/importa decks e leva as perguntas para dentro de jogos arcade.

## O conceito

Os jogos são simples e independentes: Snake, Block Rush, Flap Recall e outros. Durante a partida, o jogo pausa ou cria uma oportunidade de pergunta. Acertos dão XP, moedas, combo e outras recompensas.

Questões dissertativas também são suportadas: o motor compara palavras relevantes da resposta do aluno com a resposta esperada e exige uma quantidade mínima de correspondências.

## Stack

- HTML5
- CSS3 + Bootstrap 5
- JavaScript vanilla
- Bootstrap Icons
- Canvas 2D para jogos
- localStorage para persistência
- GitHub Pages compatible

## Importação

Formato padrão:

```text
Pergunta | Resposta
```

O criador também permite `;`, Tab e outros separadores.

## Temas

- Claro
- Escuro
- Neon / Arcade

## Recompensas

- XP e níveis
- Moedas
- Sequência
- Conquistas
- Loja de itens
- Boosters e escudos
- Temas desbloqueáveis

## Estrutura

- `index.html` — hub
- `pages/games.html` — arcade
- `pages/play.html` — motor de jogo + perguntas
- `pages/create.html` — criação/importação de decks
- `pages/decks.html` — biblioteca
- `pages/rewards.html` — loja e conquistas
- `pages/settings.html` — temas e preferências
- `css/style.css` — design system responsivo
- `js/storage.js` — estado local
- `js/app.js` — dashboard
- `js/games.js` — catálogo de jogos
- `js/game-engine.js` — jogos + integração com perguntas

> Projeto experimental para GitHub Pages, sem backend obrigatório.