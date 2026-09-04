export interface AddonOption {
  id: string;
  name: string;
  price: number;
}

export const ADDON_OPTIONS: AddonOption[] = [
  { id: "bacon-extra", name: "Bacon Crocante Extra", price: 4.50 },
  { id: "catupiry-dobro", name: "Catupiry Original em Dobro", price: 4.00 },
  { id: "mucarela-macaricada", name: "Muçarela Extra Dourada no Forno", price: 3.50 },
  { id: "palha-extra", name: "Batata Palha Crocante Extra", price: 2.00 },
];

export const REMOVAL_OPTIONS: string[] = [
  "Sem batata palha",
  "Sem orégano",
  "Queijo bem tostadinho",
  "Molho à parte"
];
