// ============================================================
//  CLAUDIN — tudo o que você precisa editar está aqui 💛
//  Troque os textos, datas e fotos. Não precisa mexer no resto.
// ============================================================

const DADOS = {
  // Nome (ou apelido) de quem está viajando
  nome: "Amor",

  // Quem está com saudade (aparece nas assinaturas)
  deQuem: "Eu",

  // Datas da viagem (formato AAAA-MM-DDTHH:MM)
  partida: "2026-11-01T08:00",
  volta: "2026-12-15T18:00",

  // Onde a pessoa está — o fuso faz o relógio "lá" funcionar
  destino: {
    cidade: "Lisboa",
    pais: "Portugal",
    fuso: "Europe/Lisbon", // lista: https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
  },

  // Um recado por dia (rotaciona sozinho)
  recadosDoDia: [
    "Hoje eu acordei e a primeira coisa que pensei foi em você.",
    "Cada dia que passa é um dia a menos até o nosso abraço.",
    "Se o céu tá bonito aí, saiba que daqui eu tô olhando o mesmo.",
    "Come direitinho, bebe água e me manda foto do almoço.",
    "Tô guardando todas as histórias pra te contar pessoalmente.",
    "A casa tá silenciosa demais sem a sua risada.",
    "Distância é só um detalhe quando o coração tá no mesmo lugar.",
  ],

  // Linha do tempo de memórias.
  // Coloque as fotos na pasta /fotos e escreva o nome do arquivo.
  // Se a foto não existir, aparece um cartão colorido no lugar.
  memorias: [
    {
      data: "Março de 2023",
      titulo: "O dia em que tudo começou",
      texto: "Lembra daquele café que esfriou porque a gente não parava de conversar?",
      foto: "fotos/01.jpg",
      emoji: "☕",
    },
    {
      data: "Julho de 2023",
      titulo: "Nossa primeira viagem",
      texto: "A estrada, a playlist repetida mil vezes e você cantando errado de propósito.",
      foto: "fotos/02.jpg",
      emoji: "🚗",
    },
    {
      data: "Dezembro de 2024",
      titulo: "Aquele Natal",
      texto: "A gente queimou o pavê e mesmo assim foi o melhor jantar do ano.",
      foto: "fotos/03.jpg",
      emoji: "🎄",
    },
    {
      data: "Agosto de 2025",
      titulo: "Domingo de nada",
      texto: "Filme, cobertor e pipoca. Os dias simples são os meus preferidos com você.",
      foto: "fotos/04.jpg",
      emoji: "🍿",
    },
  ],

  // Cartas "Abra quando..."
  cartas: [
    {
      quando: "estiver com saudade",
      emoji: "🥺",
      texto:
        "Eu também tô. Fecha os olhos por um segundo e lembra do meu abraço apertado — ele tá te esperando aqui. Falta pouco, prometo.",
    },
    {
      quando: "não conseguir dormir",
      emoji: "🌙",
      texto:
        "Respira fundo comigo: inspira em quatro, segura em quatro, solta em quatro. Imagina que eu tô do seu lado fazendo carinho no seu cabelo. Boa noite, meu bem.",
    },
    {
      quando: "o dia estiver difícil",
      emoji: "🌧️",
      texto:
        "Dias ruins não duram pra sempre. Você é muito mais forte do que imagina — e eu sou sua torcida número um, de qualquer distância.",
    },
    {
      quando: "estiver feliz",
      emoji: "☀️",
      texto:
        "Que coisa boa! Guarda esse sorriso e me conta tudo depois. Sua felicidade é a minha também.",
    },
    {
      quando: "precisar rir",
      emoji: "😂",
      texto:
        "Lembra daquela vez que você tentou abrir a porta empurrando e era pra puxar... três vezes seguidas? Pois é. Eu lembro. Sempre.",
    },
    {
      quando: "faltar uma semana pra voltar",
      emoji: "✈️",
      texto:
        "SETE DIAS! Já tô planejando a comida, o filme e o abraço de boas-vindas. Aproveita o finalzinho, que aqui tem alguém contando as horas.",
    },
  ],

  // Motivos (aparecem um de cada vez no "pote de motivos")
  motivos: [
    "O jeito que você ri das suas próprias piadas antes de terminar de contar.",
    "Como você sempre lembra dos pequenos detalhes.",
    "Seu abraço, que conserta qualquer dia.",
    "A sua coragem de ir viver coisas novas.",
    "O jeito que você fala meu nome.",
    "Você me faz querer ser uma pessoa melhor.",
    "As mensagens de bom dia com erro de digitação.",
    "Porque com você até a fila do mercado fica divertida.",
  ],
};
