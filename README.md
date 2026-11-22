# 🍺 Taverna dos Agentes

*[English version](README.en.md)*

Uma taverna medieval animada onde os seus agentes de IA trabalham, bebem, fazem reunião e cochilam à noite.
Cada agente tem nome, cargo, lugar na taverna e frases próprias. Feita em HTML e JavaScript puros: sem instalar nada, sem build, funciona offline e vira app no celular.

## O que ela faz

- Agentes animados: trabalham, bebem, fazem o gesto próprio e cochilam de noite (o dia e a noite seguem o relógio).
- **Reunião:** todo mundo vai para a Mesa Grande.
- **Conselho:** até 3 agentes escolhidos sentam na mesa redonda.
- **Organograma:** quem responde a quem; toque num nome para achar o agente.
- Instala como app no celular (PWA) e abre sem internet depois da primeira visita.

## Como rodar

1. Baixe esta pasta.
2. Abra o `index.html` no navegador.
3. Para instalar como app e usar offline, sirva a pasta por http. Por exemplo:
   ```
   python -m http.server 8000
   ```
   e abra `http://localhost:8000`. Também funciona direto no GitHub Pages.

## Coloque os seus agentes

Tudo fica em um arquivo só: **`config.js`**. Para cada agente:

```js
{
  id: 'escriba',               // sem espaço nem acento; é o nome da pasta da arte
  nome: 'Escriba',
  cargo: 'Escreve os textos',
  sala: 'mesa-esquerda',       // mesa-esquerda, mesa-direita, mesa-grande, mesa-lareira, mesa-canto, balcao, porta
  chefe: '',                   // id de quem ele responde (vazio = você)
  falas: ['Texto pronto!', 'Revisando…'],
  sprite: false,               // sem arte? vira um bonequinho desenhado
  cores: { pele: '#f2cfae', roupa: '#5a2a6b' }
}
```

**Com arte própria:** crie `arte/agentes/<id>/` com PNGs de fundo transparente, 192 px de altura, e liste em `poses` as que existem.
Obrigatória: `parado`. Usadas se existirem: `andando1`, `andando2`, `bebendo`, `cochilando`, `trabalhando` e um gesto especial (campo `especial`).
Mudou a arte ou o config depois de publicar? Suba a `VERSAO` no `sw.js` para os celulares baixarem de novo.

## Créditos e licença

- Código e arte: licença [MIT](LICENSE). Use, mude e distribua à vontade, mantendo o aviso de licença.
- Fundo e personagens de exemplo feitos com ajuda de IA e editados à mão.
- Fonte Cinzel (Google Fonts, licença OFL).

Quer uma versão sob medida para a sua empresa? **[Fale com a gente](https://fariascorp.com.br/taverna/)**
Developed by [Agência SMA](https://www.instagram.com/agenciasaomiguel/)
