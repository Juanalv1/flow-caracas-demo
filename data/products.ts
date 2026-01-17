export interface Product {
  id: number;
  name: string;
  team: string;
  league: 'MLB' | 'NBA' | 'NFL' | 'ACCESORIO';
  price: number;
  colors: string[];
  image: string;
  description: string;
  stock: 'in_stock' | 'low_stock' | 'out_of_stock';
  slug: string;
}

export const products: Product[] = [
  // MLB (8 productos)
  {
    id: 1,
    name: "Gorra New York Yankees",
    team: "Yankees",
    league: "MLB",
    price: 18,
    colors: ["#1C2841", "#FFFFFF", "#C4CED4"],
    image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=400&h=400&fit=crop",
    description: "Gorra oficial New York Yankees con logo bordado. Snapback ajustable.",
    stock: "in_stock",
    slug: "gorra-new-york-yankees"
  },
  {
    id: 2,
    name: "Gorra LA Dodgers",
    team: "Dodgers",
    league: "MLB",
    price: 18,
    colors: ["#005A9C", "#FFFFFF", "#EF3E42"],
    image: "https://images.unsplash.com/photo-1575428652377-a2d80e2277fc?w=400&h=400&fit=crop",
    description: "Gorra clásica Los Angeles Dodgers azul con logo LA bordado.",
    stock: "in_stock",
    slug: "gorra-la-dodgers"
  },
  {
    id: 3,
    name: "Gorra Boston Red Sox",
    team: "Red Sox",
    league: "MLB",
    price: 18,
    colors: ["#BD3039", "#0C2340", "#FFFFFF"],
    image: "https://images.unsplash.com/photo-1556306535-0f09a537f0a3?w=400&h=400&fit=crop",
    description: "Gorra roja Boston Red Sox con B bordada clásica.",
    stock: "in_stock",
    slug: "gorra-boston-red-sox"
  },
  {
    id: 4,
    name: "Gorra Chicago Cubs",
    team: "Cubs",
    league: "MLB",
    price: 18,
    colors: ["#0E3386", "#CC3433", "#FFFFFF"],
    image: "https://images.unsplash.com/photo-1620231109648-302d034cb29b?w=400&h=400&fit=crop",
    description: "Gorra azul royal Chicago Cubs con C bordada.",
    stock: "low_stock",
    slug: "gorra-chicago-cubs"
  },
  {
    id: 5,
    name: "Gorra San Francisco Giants",
    team: "Giants",
    league: "MLB",
    price: 18,
    colors: ["#27251F", "#FD5A1E", "#FFFFFF"],
    image: "https://images.unsplash.com/photo-1534215754734-18e55d13e346?w=400&h=400&fit=crop",
    description: "Gorra negra San Francisco Giants con detalles naranja.",
    stock: "in_stock",
    slug: "gorra-san-francisco-giants"
  },
  {
    id: 6,
    name: "Gorra Atlanta Braves",
    team: "Braves",
    league: "MLB",
    price: 18,
    colors: ["#13274F", "#CE1141", "#FFFFFF"],
    image: "https://images.unsplash.com/photo-1595341888016-a392ef81b7de?w=400&h=400&fit=crop",
    description: "Gorra navy Atlanta Braves con logo A bordado.",
    stock: "in_stock",
    slug: "gorra-atlanta-braves"
  },
  {
    id: 7,
    name: "Gorra Miami Marlins",
    team: "Marlins",
    league: "MLB",
    price: 18,
    colors: ["#000000", "#00A3E0", "#EF3340"],
    image: "https://images.unsplash.com/photo-1521369909029-2afed882baee?w=400&h=400&fit=crop",
    description: "Gorra negra Miami Marlins con detalles cyan.",
    stock: "in_stock",
    slug: "gorra-miami-marlins"
  },
  {
    id: 8,
    name: "Gorra Texas Rangers",
    team: "Rangers",
    league: "MLB",
    price: 18,
    colors: ["#003278", "#C0111F", "#FFFFFF"],
    image: "https://images.unsplash.com/photo-1622445275576-721325763afe?w=400&h=400&fit=crop",
    description: "Gorra azul real Texas Rangers con T bordada.",
    stock: "low_stock",
    slug: "gorra-texas-rangers"
  },

  // NBA (8 productos)
  {
    id: 9,
    name: "Gorra LA Lakers",
    team: "Lakers",
    league: "NBA",
    price: 20,
    colors: ["#552583", "#FDB927", "#FFFFFF"],
    image: "https://images.unsplash.com/photo-1556306535-0f09a537f0a3?w=400&h=400&fit=crop",
    description: "Gorra morada y dorada Los Angeles Lakers oficial.",
    stock: "in_stock",
    slug: "gorra-la-lakers"
  },
  {
    id: 10,
    name: "Gorra Chicago Bulls",
    team: "Bulls",
    league: "NBA",
    price: 20,
    colors: ["#CE1141", "#000000", "#FFFFFF"],
    image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=400&h=400&fit=crop",
    description: "Gorra roja icónica Chicago Bulls con logo de toro.",
    stock: "in_stock",
    slug: "gorra-chicago-bulls"
  },
  {
    id: 11,
    name: "Gorra Miami Heat",
    team: "Heat",
    league: "NBA",
    price: 20,
    colors: ["#000000", "#98002E", "#F9A01B"],
    image: "https://images.unsplash.com/photo-1575428652377-a2d80e2277fc?w=400&h=400&fit=crop",
    description: "Gorra negra Miami Heat con detalles en rojo.",
    stock: "in_stock",
    slug: "gorra-miami-heat"
  },
  {
    id: 12,
    name: "Gorra Golden State Warriors",
    team: "Warriors",
    league: "NBA",
    price: 20,
    colors: ["#1D428A", "#FFC72C", "#FFFFFF"],
    image: "https://images.unsplash.com/photo-1620231109648-302d034cb29b?w=400&h=400&fit=crop",
    description: "Gorra azul Golden State Warriors con logo bordado.",
    stock: "in_stock",
    slug: "gorra-golden-state-warriors"
  },
  {
    id: 13,
    name: "Gorra Boston Celtics",
    team: "Celtics",
    league: "NBA",
    price: 20,
    colors: ["#007A33", "#BA9653", "#FFFFFF"],
    image: "https://images.unsplash.com/photo-1534215754734-18e55d13e346?w=400&h=400&fit=crop",
    description: "Gorra verde kelly Boston Celtics clásica.",
    stock: "low_stock",
    slug: "gorra-boston-celtics"
  },
  {
    id: 14,
    name: "Gorra Brooklyn Nets",
    team: "Nets",
    league: "NBA",
    price: 20,
    colors: ["#000000", "#FFFFFF", "#707271"],
    image: "https://images.unsplash.com/photo-1595341888016-a392ef81b7de?w=400&h=400&fit=crop",
    description: "Gorra negra minimalista Brooklyn Nets.",
    stock: "in_stock",
    slug: "gorra-brooklyn-nets"
  },
  {
    id: 15,
    name: "Gorra New York Knicks",
    team: "Knicks",
    league: "NBA",
    price: 20,
    colors: ["#006BB6", "#F58426", "#FFFFFF"],
    image: "https://images.unsplash.com/photo-1521369909029-2afed882baee?w=400&h=400&fit=crop",
    description: "Gorra azul y naranja New York Knicks.",
    stock: "in_stock",
    slug: "gorra-new-york-knicks"
  },
  {
    id: 16,
    name: "Gorra Phoenix Suns",
    team: "Suns",
    league: "NBA",
    price: 20,
    colors: ["#1D1160", "#E56020", "#FFFFFF"],
    image: "https://images.unsplash.com/photo-1622445275576-721325763afe?w=400&h=400&fit=crop",
    description: "Gorra morada Phoenix Suns con detalles naranja.",
    stock: "in_stock",
    slug: "gorra-phoenix-suns"
  },

  // NFL (8 productos)
  {
    id: 17,
    name: "Gorra Dallas Cowboys",
    team: "Cowboys",
    league: "NFL",
    price: 20,
    colors: ["#003594", "#869397", "#FFFFFF"],
    image: "https://images.unsplash.com/photo-1556306535-0f09a537f0a3?w=400&h=400&fit=crop",
    description: "Gorra navy Dallas Cowboys con estrella icónica.",
    stock: "in_stock",
    slug: "gorra-dallas-cowboys"
  },
  {
    id: 18,
    name: "Gorra New England Patriots",
    team: "Patriots",
    league: "NFL",
    price: 20,
    colors: ["#002244", "#C60C30", "#B0B7BC"],
    image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=400&h=400&fit=crop",
    description: "Gorra navy New England Patriots con logo bordado.",
    stock: "in_stock",
    slug: "gorra-new-england-patriots"
  },
  {
    id: 19,
    name: "Gorra San Francisco 49ers",
    team: "49ers",
    league: "NFL",
    price: 20,
    colors: ["#AA0000", "#B3995D", "#FFFFFF"],
    image: "https://images.unsplash.com/photo-1575428652377-a2d80e2277fc?w=400&h=400&fit=crop",
    description: "Gorra roja San Francisco 49ers con detalles dorados.",
    stock: "in_stock",
    slug: "gorra-san-francisco-49ers"
  },
  {
    id: 20,
    name: "Gorra Green Bay Packers",
    team: "Packers",
    league: "NFL",
    price: 20,
    colors: ["#203731", "#FFB612", "#FFFFFF"],
    image: "https://images.unsplash.com/photo-1620231109648-302d034cb29b?w=400&h=400&fit=crop",
    description: "Gorra verde Green Bay Packers con G amarilla.",
    stock: "low_stock",
    slug: "gorra-green-bay-packers"
  },
  {
    id: 21,
    name: "Gorra Pittsburgh Steelers",
    team: "Steelers",
    league: "NFL",
    price: 20,
    colors: ["#000000", "#FFB612", "#FFFFFF"],
    image: "https://images.unsplash.com/photo-1534215754734-18e55d13e346?w=400&h=400&fit=crop",
    description: "Gorra negra Pittsburgh Steelers con logo bordado.",
    stock: "in_stock",
    slug: "gorra-pittsburgh-steelers"
  },
  {
    id: 22,
    name: "Gorra Las Vegas Raiders",
    team: "Raiders",
    league: "NFL",
    price: 20,
    colors: ["#000000", "#A5ACAF", "#FFFFFF"],
    image: "https://images.unsplash.com/photo-1595341888016-a392ef81b7de?w=400&h=400&fit=crop",
    description: "Gorra negra Las Vegas Raiders con escudo plateado.",
    stock: "in_stock",
    slug: "gorra-las-vegas-raiders"
  },
  {
    id: 23,
    name: "Gorra Kansas City Chiefs",
    team: "Chiefs",
    league: "NFL",
    price: 20,
    colors: ["#E31837", "#FFB81C", "#FFFFFF"],
    image: "https://images.unsplash.com/photo-1521369909029-2afed882baee?w=400&h=400&fit=crop",
    description: "Gorra roja Kansas City Chiefs con flecha bordada.",
    stock: "in_stock",
    slug: "gorra-kansas-city-chiefs"
  },
  {
    id: 24,
    name: "Gorra Seattle Seahawks",
    team: "Seahawks",
    league: "NFL",
    price: 20,
    colors: ["#002244", "#69BE28", "#A5ACAF"],
    image: "https://images.unsplash.com/photo-1622445275576-721325763afe?w=400&h=400&fit=crop",
    description: "Gorra navy Seattle Seahawks con detalles verdes.",
    stock: "in_stock",
    slug: "gorra-seattle-seahawks"
  },

  // Accesorios (4 productos)
  {
    id: 25,
    name: "Camiseta NBA Genérica",
    team: "Varios",
    league: "ACCESORIO",
    price: 15,
    colors: ["#000000", "#FFFFFF", "#CE1141"],
    image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&h=400&fit=crop",
    description: "Camiseta deportiva estilo NBA. Varios equipos disponibles.",
    stock: "in_stock",
    slug: "camiseta-nba-generica"
  },
  {
    id: 26,
    name: "Mochila Deportiva",
    team: "Urbana",
    league: "ACCESORIO",
    price: 25,
    colors: ["#000000", "#1C2841", "#CE1141"],
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop",
    description: "Mochila negra urbana con compartimentos múltiples.",
    stock: "in_stock",
    slug: "mochila-deportiva"
  },
  {
    id: 27,
    name: "Gorra Plana Personalizable",
    team: "Custom",
    league: "ACCESORIO",
    price: 16,
    colors: ["#000000", "#FFFFFF", "#CE1141", "#1D428A", "#007A33"],
    image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=400&h=400&fit=crop",
    description: "Gorra plana lisa disponible en varios colores.",
    stock: "in_stock",
    slug: "gorra-plana-personalizable"
  },
  {
    id: 28,
    name: "Set 3 Gorras Mix",
    team: "Combo",
    league: "ACCESORIO",
    price: 48,
    colors: ["#000000", "#002D72", "#CE1141"],
    image: "https://images.unsplash.com/photo-1521369909029-2afed882baee?w=400&h=400&fit=crop",
    description: "Combo especial de 3 gorras mixtas MLB/NBA/NFL.",
    stock: "low_stock",
    slug: "set-3-gorras-mix"
  }
];

export const getProductsByLeague = (league: string) => {
  return products.filter(p => p.league === league);
};

export const getProductBySlug = (slug: string) => {
  return products.find(p => p.slug === slug);
};

export const getRelatedProducts = (product: Product, limit: number = 4) => {
  return products
    .filter(p => p.league === product.league && p.id !== product.id)
    .slice(0, limit);
};
