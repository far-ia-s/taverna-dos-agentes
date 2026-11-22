# 🍺 Agent Tavern

*[Versão em português](README.md)*

An animated medieval tavern where your AI agents work, drink, hold meetings, and nap at night.
Each agent has a name, a role, a spot in the tavern, and their own lines. Built with plain HTML and JavaScript: nothing to install, no build step, works offline, and installs as an app on your phone.
Originally called "Taverna dos Agentes."

## Features

- Animated agents: they work, drink, do their signature move, and nap at night (day and night follow your clock).
- **Meeting:** everyone heads to the Big Table.
- **Council:** up to 3 agents you pick sit at the round table.
- **Org chart:** who reports to whom; tap a name to find that agent.
- Installs as a phone app (PWA) and opens without internet after the first visit.

## Getting started

1. Download this folder.
2. Open `index.html` in your browser.
3. To install it as an app and use it offline, serve the folder over HTTP. For example:
   ```
   python -m http.server 8000
   ```
   then open `http://localhost:8000`. It also works on GitHub Pages as is.

## Add your own agents

Everything lives in one file: **`config.js`**. For each agent:

```js
{
  id: 'scribe',                // no spaces or accents; it's also the art folder name
  nome: 'Scribe',              // name
  cargo: 'Writes the copy',    // role
  sala: 'mesa-esquerda',       // spot: mesa-esquerda, mesa-direita, mesa-grande, mesa-lareira, mesa-canto, balcao, porta
  chefe: '',                   // id of who they report to (empty = you)
  falas: ['Copy is ready!', 'Proofreading…'],  // lines
  sprite: false,               // no art? you get a simple drawn character
  cores: { pele: '#f2cfae', roupa: '#5a2a6b' }  // skin and outfit colors
}
```

The config keys and `sala` values are code ids, so keep them as they are. The on-screen text (buttons, titles, hints) can be translated in the `textos` block of `config.js`.

**Custom art:** create `arte/agentes/<id>/` with transparent PNGs, 192 px tall, and list the ones you have in `poses`.
Required: `parado` (idle). Used if present: `andando1`, `andando2` (walking), `bebendo` (drinking), `cochilando` (napping), `trabalhando` (working), plus one signature move (the `especial` field).
Changed the art or the config after publishing? Bump `VERSAO` in `sw.js` so phones download the new files.

## Credits and license

- Code and art: [MIT](LICENSE) license. Use it, change it, and share it freely; just keep the license notice.
- Sample background and characters made with AI help and edited by hand.
- Cinzel font (Google Fonts, OFL license).

Want a custom version for your company? **[Get in touch](https://fariascorp.com.br/taverna/)**
Developed by [Agência SMA](https://www.instagram.com/agenciasaomiguel/)
