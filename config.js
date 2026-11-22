// ============================================================================
//  Taverna dos Agentes · CONFIGURAÇÃO
//  Edite só este arquivo para colocar os SEUS agentes na taverna.
//  (Edit only this file to put YOUR agents in the tavern. See README.md.)
// ============================================================================
self.TAVERNA = {

  // Nome que aparece no topo e na aba do navegador
  titulo: 'Taverna dos Agentes',

  // ---------------------------------------------------------------------------
  //  AGENTES
  //  id      : nome curto, sem espaço nem acento (vira o nome da pasta da arte)
  //  nome    : o que aparece na plaquinha
  //  cargo   : uma linha sobre o que ele faz (aparece na ficha)
  //  sala    : onde ele senta. Opções:
  //            'mesa-esquerda' · 'mesa-direita' · 'mesa-grande' · 'mesa-lareira'
  //            'mesa-canto'    · 'balcao'       · 'porta'
  //            (mesa cheia? ele vai para um lugar livre da Mesa Grande)
  //  chefe   : id de quem ele responde no organograma (vazio = responde a você)
  //  falas   : frases curtas que ele solta no balão
  //  sprite  : true se existe a pasta arte/agentes/<id>/ com as imagens
  //  poses   : imagens que existem na pasta (sem .png). Obrigatória: 'parado'.
  //            Usadas se existirem: 'andando1', 'andando2', 'bebendo', 'cochilando',
  //            'trabalhando' e o gesto especial (campo 'especial').
  //  especial: nome da pose do gesto próprio dele (opcional)
  //  cores   : sem sprite? ele vira um bonequinho desenhado com estas cores
  // ---------------------------------------------------------------------------
  agentes: [
    {
      id: 'porteiro', nome: 'Porteiro', cargo: 'Organiza a fila de tarefas',
      sala: 'porta', chefe: '',
      falas: ['Pegue a senha!', 'Fila andando.', 'Sua vez!'],
      sprite: true, especial: 'senha',
      poses: ['parado', 'andando1', 'andando2', 'bebendo', 'cochilando', 'trabalhando', 'senha']
    },
    {
      id: 'panda', nome: 'Panda', cargo: 'Artesão · modelagem 3D',
      sala: 'mesa-lareira', chefe: 'porteiro',
      falas: ['Medi duas vezes.', 'Peça pronta!', 'Imprimindo…'],
      sprite: true, especial: 'mostrando',
      poses: ['parado', 'andando1', 'andando2', 'bebendo', 'cochilando', 'trabalhando', 'mostrando']
    },
    {
      id: 'aprendiz', nome: 'Aprendiz', cargo: 'Exemplo de agente sem arte: vira um bonequinho desenhado',
      sala: 'balcao', chefe: 'porteiro',
      falas: ['Ainda não tenho sprite!', 'Me desenha?', 'Tô aprendendo.'],
      sprite: false, cores: { pele: '#f2cfae', roupa: '#2a4a6b' }
    }
  ],

  // ---------------------------------------------------------------------------
  //  CONSELHO: até 3 agentes que vão para a mesa redonda ao apertar "Conselho"
  // ---------------------------------------------------------------------------
  conselho: {
    membros: ['porteiro', 'panda'],
    falas: ['Isso vale o esforço?', 'Corta o que não rende.', 'Foco no principal.'],
    texto: 'O Conselho avalia o que está sendo feito e diz onde parar de gastar energia e onde focar.'
  },

  // ---------------------------------------------------------------------------
  //  TEXTOS DA TELA (traduza aqui se quiser outro idioma)
  // ---------------------------------------------------------------------------
  textos: {
    idioma: 'pt-BR',
    abrindo: 'Abrindo as portas…',
    botaoLista: '📜 Agentes', botaoReuniao: '🍺 Reunião', botaoConselho: '⚜ Conselho', botaoEncerrar: '✖ Encerrar',
    verInteira: 'Ver a taverna inteira ou de perto',
    dica: '👆 Arraste para os lados · toque num agente',
    dia: 'Dia de trabalho na taverna', noite: '💤 Noite: a turma descansa',
    emReuniao: '🍺 Todo mundo na Mesa Grande', emConselho: '⚜ O Conselho está reunido',
    stTaverna: '🍺 Na taverna', stReuniao: '🍺 Em reunião', stConselho: '⚜ No Conselho', stDescanso: '💤 Descansando',
    organograma: 'Organograma', organogramaDica: 'Toque num nome para achar o agente na taverna.',
    voce: 'Você', voceFaz: 'aprova',
    conselhoTitulo: '⚜ Reunião do Conselho'
  }
}
