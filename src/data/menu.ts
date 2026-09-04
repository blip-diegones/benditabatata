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
    description: "Frango cremoso, Catupiry, muçarela gratinada e batata palha.",
    ingredients: ["Frango Cremoso", "Catupiry", "Muçarela Gratinada", "Batata Palha"],
    image: "/images/frango-cremoso.jpg",
    tag: "Mais Pedido",
    highlight: true
  },
  {
    id: "strogonoff-frango",
    name: "Strogonoff de Frango",
    price: 31.90,
    description: "Strogonoff de frango, Catupiry, muçarela gratinada e batata palha.",
    ingredients: ["Strogonoff de Frango", "Catupiry", "Muçarela Gratinada", "Batata Palha"],
    image: "/images/strogonoff-frango.jpg",
    tag: "Destaque",
    highlight: true
  },
  {
    id: "4-queijos",
    name: "4 Queijos",
    price: 29.90,
    description: "Catupiry, parmesão, provolone e muçarela gratinada.",
    ingredients: ["Catupiry", "Parmesão", "Provolone", "Muçarela Gratinada"],
    image: "/images/4-queijos.jpg"
  },
  {
    id: "bacon-brocolis",
    name: "Bacon com Brócolis",
    price: 30.90,
    description: "Catupiry, bacon, brócolis e muçarela gratinada.",
    ingredients: ["Catupiry", "Bacon", "Brócolis", "Muçarela Gratinada"],
    image: "/images/bacon-brocolis.jpg"
  },
  {
    id: "calafrango",
    name: "Calafrango",
    price: 32.90,
    description: "Catupiry, frango cremoso, calabresa e muçarela gratinada.",
    ingredients: ["Catupiry", "Frango Cremoso", "Calabresa", "Muçarela Gratinada"],
    image: "/images/calafrango.jpg"
  },
  {
    id: "bolonhesa",
    name: "Bolonhesa",
    price: 33.90,
    description: "Carne moída, Catupiry e muçarela gratinada.",
    ingredients: ["Carne Moída", "Catupiry", "Muçarela Gratinada"],
    image: "/images/bolonhesa.jpg"
  },
  {
    id: "a-moda",
    name: "À Moda",
    price: 32.90,
    description: "Calabresa, bacon, milho, ervilha, Catupiry e muçarela gratinada.",
    ingredients: ["Calabresa", "Bacon", "Milho", "Ervilha", "Catupiry", "Muçarela Gratinada"],
    image: "/images/a-moda.jpg"
  },
  {
    id: "frango-brocolis",
    name: "Frango com Brócolis",
    price: 30.90,
    description: "Catupiry, frango cremoso, brócolis e muçarela gratinada.",
    ingredients: ["Catupiry", "Frango Cremoso", "Brócolis", "Muçarela Gratinada"],
    image: "/images/frango-brocolis.jpg"
  },
  {
    id: "pizza",
    name: "Pizza",
    price: 29.90,
    description: "Presunto, Catupiry, tomate, orégano e muçarela gratinada.",
    ingredients: ["Presunto", "Catupiry", "Tomate", "Orégano", "Muçarela Gratinada"],
    image: "/images/a-moda.jpg"
  }
];
