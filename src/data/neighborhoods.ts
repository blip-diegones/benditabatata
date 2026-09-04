export interface NeighborhoodOption {
  name: string;
  fee: number;
  category: 'Retirada' | 'São Lourenço (Urbano/Central)' | 'Regiões Afastadas / Cidades Vizinhas';
}

export const NEIGHBORHOODS: NeighborhoodOption[] = [
  // Retirada
  { name: "Retirar no Balcão (Grátis)", fee: 0, category: "Retirada" },

  // Bairros de São Lourenço (R$ 6,00 padrão)
  { name: "Canaã", fee: 6.00, category: "São Lourenço (Urbano/Central)" },
  { name: "Carioca", fee: 6.00, category: "São Lourenço (Urbano/Central)" },
  { name: "Centro", fee: 6.00, category: "São Lourenço (Urbano/Central)" },
  { name: "Cohab", fee: 6.00, category: "São Lourenço (Urbano/Central)" },
  { name: "Estação", fee: 6.00, category: "São Lourenço (Urbano/Central)" },
  { name: "Federal (Nossa Senhora de Fátima)", fee: 6.00, category: "São Lourenço (Urbano/Central)" },
  { name: "Jardim Ana Maria", fee: 6.00, category: "São Lourenço (Urbano/Central)" },
  { name: "Jardim Bela Vista", fee: 6.00, category: "São Lourenço (Urbano/Central)" },
  { name: "Jardim São Lourenço", fee: 6.00, category: "São Lourenço (Urbano/Central)" },
  { name: "Jardim Serrano", fee: 6.00, category: "São Lourenço (Urbano/Central)" },
  { name: "João de Deus (Barreiro)", fee: 6.00, category: "São Lourenço (Urbano/Central)" },
  { name: "Lagoa Seca", fee: 6.00, category: "São Lourenço (Urbano/Central)" },
  { name: "Madureira", fee: 6.00, category: "São Lourenço (Urbano/Central)" },
  { name: "Mirante", fee: 6.00, category: "São Lourenço (Urbano/Central)" },
  { name: "Monte Verde", fee: 6.00, category: "São Lourenço (Urbano/Central)" },
  { name: "Nossa Senhora de Lourdes (Cafundó)", fee: 6.00, category: "São Lourenço (Urbano/Central)" },
  { name: "Parque Olímpico", fee: 6.00, category: "São Lourenço (Urbano/Central)" },
  { name: "Porta do Céu", fee: 6.00, category: "São Lourenço (Urbano/Central)" },
  { name: "Residencial Ramon", fee: 6.00, category: "São Lourenço (Urbano/Central)" },
  { name: "Santa Mônica 1", fee: 6.00, category: "São Lourenço (Urbano/Central)" },
  { name: "Santa Mônica 2", fee: 6.00, category: "São Lourenço (Urbano/Central)" },
  { name: "Solar dos Lagos", fee: 9.00, category: "São Lourenço (Urbano/Central)" },
  { name: "Sonda", fee: 6.00, category: "São Lourenço (Urbano/Central)" },
  { name: "São Lourenço Velho", fee: 6.00, category: "São Lourenço (Urbano/Central)" },
  { name: "Vale dos Pinheiros", fee: 8.00, category: "São Lourenço (Urbano/Central)" },
  { name: "Vila Carneiro", fee: 6.00, category: "São Lourenço (Urbano/Central)" },
  { name: "Vila Nova", fee: 6.00, category: "São Lourenço (Urbano/Central)" },

  // Cidades Vizinhas & Lugares Afastados (Frete especial / mais caro)
  { name: "Soledade de Minas (Cidade Vizinha)", fee: 18.00, category: "Regiões Afastadas / Cidades Vizinhas" },
  { name: "Carmo de Minas (Cidade Vizinha)", fee: 18.00, category: "Regiões Afastadas / Cidades Vizinhas" },
  { name: "Campos (Região Afastada)", fee: 16.00, category: "Regiões Afastadas / Cidades Vizinhas" },
  { name: "Outro Local / Zona Rural (A combinar no WhatsApp)", fee: 10.00, category: "Regiões Afastadas / Cidades Vizinhas" },
];
