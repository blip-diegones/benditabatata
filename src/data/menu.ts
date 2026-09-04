export interface BatataItem {
  id: string;
  name: string;
  price: number;
  description: string;
  ingredients: string[];
  image: string;
  tag?: string;
  highlight?: boolean;
}

export const MENU_ITEMS: BatataItem[] = [
  {
    id: "frango-cremoso",
    name: "Frango Cremoso",
    price: 29.90,
    description: "Frango desfiado com tempero da casa, muito Catupiry, muçarela maçaricada/gratinada e batata palha crocante por cima.",
    ingredients: ["Frango Cremoso", "Catupiry Original", "Muçarela Gratinada", "Batata Palha"],
    image: "/images/frango-cremoso.jpg",
    tag: "O Mais Pedido ⭐",
    highlight: true
  },
  {
    id: "strogonoff-frango",
    name: "Strogonoff de Frango",
    price: 31.90,
    description: "Strogonoff encorpado e suculento, coberto com Catupiry, muçarela douradinha no forno e finalizado com batata palha crocante.",
    ingredients: ["Strogonoff de Frango", "Catupiry", "Muçarela Gratinada", "Batata Palha"],
    image: "/images/strogonoff-frango.jpg",
    tag: "Irresistível 🤤",
    highlight: true
  },
  {
    id: "4-queijos",
    name: "4 Queijos",
    price: 29.90,
    description: "Para os amantes de queijo de verdade: muçarela gratinada puxando, Catupiry cremoso, provolone defumado e o toque salgadinho do parmesão.",
    ingredients: ["Catupiry", "Parmesão", "Provolone Defumado", "Muçarela Gratinada"],
    image: "/images/4-queijos.jpg",
    tag: "Super Queijuda 🧀"
  },
  {
    id: "bacon-brocolis",
    name: "Bacon com Brócolis",
    price: 30.90,
    description: "Equilíbrio dos deuses: pedacinhos crocantes de bacon frito com brócolis frescos salteados no Catupiry e cobertos por queijo gratinado.",
    ingredients: ["Catupiry", "Bacon Crocante", "Brócolis Frescos", "Muçarela Gratinada"],
    image: "/images/bacon-brocolis.jpg",
    tag: "Queridinha da Galera 🥓"
  },
  {
    id: "calafrango",
    name: "Calafrango",
    price: 32.90,
    description: "A união dos dois maiores sucessos: frango cremoso desfiado + fatias de calabresa fininha salteada com Catupiry e muçarela.",
    ingredients: ["Catupiry", "Frango Cremoso", "Calabresa", "Muçarela Gratinada"],
    image: "/images/calafrango.jpg",
    tag: "Recheio em Dobro 🔥"
  },
  {
    id: "bolonhesa",
    name: "Bolonhesa Especial",
    price: 33.90,
    description: "Carne moída de primeira cozida lentamente em molho artesanal com ervas finas, muito Catupiry e muçarela gratinada até estalar.",
    ingredients: ["Carne Moída Selecionada", "Catupiry", "Muçarela Gratinada"],
    image: "/images/bolonhesa.jpg",
    tag: "Fartura Pura 🥩"
  },
  {
    id: "a-moda",
    name: "À Moda da Casa",
    price: 32.90,
    description: "Para quem quer tudo de melhor: calabresa, cubos de bacon crocante, milho doce, ervilhas frescas, Catupiry e muçarela gratinada.",
    ingredients: ["Calabresa", "Bacon", "Milho", "Ervilha", "Catupiry", "Muçarela Gratinada"],
    image: "/images/a-moda.jpg",
    tag: "Completona 🚀"
  },
  {
    id: "frango-brocolis",
    name: "Frango com Brócolis",
    price: 30.90,
    description: "Cremosa e aconchegante: o sabor suave do frango desfiado com os floretes de brócolis, Catupiry generoso e queijo gratinado.",
    ingredients: ["Catupiry", "Frango Cremoso", "Brócolis", "Muçarela Gratinada"],
    image: "/images/frango-brocolis.jpg"
  },
  {
    id: "pizza",
    name: "Sabor Pizza",
    price: 29.90,
    description: "O gostinho clássico irresistível: presunto selecionado, rodelas de tomate, orégano aromático, Catupiry e muçarela borbulhante.",
    ingredients: ["Presunto", "Catupiry", "Tomate", "Orégano", "Muçarela Gratinada"],
    image: "/images/a-moda.jpg",
    tag: "Clássico 🍕"
  }
];
