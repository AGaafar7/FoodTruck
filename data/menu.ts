export type CategoryId =
  | "signature"
  | "sandwiches"
  | "platters"
  | "mexican"
  | "grill"
  | "drinks";

export type MenuItem = {
  id: string;
  name: string;
  description: string;
  price: number;
  calories?: number;
  image: string;
  category: CategoryId;
  tags?: ("signature" | "spicy" | "new" | "popular" | "veggie")[];
  variants?: string[];
};

export const categories = [
  { id: "signature", name: "Signature", emoji: "🍝" },
  { id: "sandwiches", name: "Sandwiches", emoji: "🥖" },
  { id: "platters", name: "Platters", emoji: "🍽️" },
  { id: "mexican", name: "Mexican", emoji: "🌮" },
  { id: "grill", name: "Grill", emoji: "🌭" },
  { id: "drinks", name: "Drinks", emoji: "🥤" },
] as const;

// Placeholder images — swap for /images/xxx.jpg when you have real photos
const IMG = {
  alfredoCook: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?q=80&w=1200&auto=format&fit=crop",
  alfredoPlate: "https://images.unsplash.com/photo-1645112411341-6c4fd023714a?q=80&w=1200&auto=format&fit=crop",
  alfredo: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?q=80&w=800&auto=format&fit=crop",
  shrimpAlfredo: "https://images.unsplash.com/photo-1633478062482-790e4b8b0d1a?q=80&w=800&auto=format&fit=crop",
  phillySteak: "https://images.unsplash.com/photo-1600891964092-4316c288032e?q=80&w=800&auto=format&fit=crop",
  phillyChicken: "https://images.unsplash.com/photo-1615297928064-24977384d0da?q=80&w=800&auto=format&fit=crop",
  gyros: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?q=80&w=800&auto=format&fit=crop",
  falafel: "https://images.unsplash.com/photo-1593001874117-c99c800e3eb3?q=80&w=800&auto=format&fit=crop",
  falafelPlatter: "https://images.unsplash.com/photo-1547058881-aa0edd92aab3?q=80&w=800&auto=format&fit=crop",
  tacos: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?q=80&w=800&auto=format&fit=crop",
  nachos: "https://images.unsplash.com/photo-1582169296194-e4d644c48063?q=80&w=800&auto=format&fit=crop",
  loadedFries: "https://images.unsplash.com/photo-1585109649139-366815a0d713?q=80&w=800&auto=format&fit=crop",
  hotDog: "https://images.unsplash.com/photo-1612392062631-94dd858cba88?q=80&w=800&auto=format&fit=crop",
  polish: "https://images.unsplash.com/photo-1619740455993-9e612b1af08a?q=80&w=800&auto=format&fit=crop",
  lemonadeStrawberry: "https://images.unsplash.com/photo-1497534446932-c925b458314e?q=80&w=800&auto=format&fit=crop",
  lemonadeMango: "https://images.unsplash.com/photo-1546173159-315724a31696?q=80&w=800&auto=format&fit=crop",
  lemonadeBlueberry: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?q=80&w=800&auto=format&fit=crop",
};

export const heroImages = {
  cooking: IMG.alfredoCook,
  plated: IMG.alfredoPlate,
  video: null as string | null,
};

export const menu: MenuItem[] = [
  { id: "chicken-alfredo", name: "Chicken Alfredo", description: "Fettuccine tossed in creamy parmesan alfredo, topped with grilled chicken and fresh herbs.", price: 14.99, calories: 720, image: IMG.alfredo, category: "signature", tags: ["signature", "popular"] },
  { id: "shrimp-alfredo", name: "Shrimp Alfredo", description: "Same creamy alfredo, loaded with sautéed shrimp and a hit of garlic butter.", price: 16.99, calories: 680, image: IMG.shrimpAlfredo, category: "signature", tags: ["signature"] },
  { id: "philly-steak", name: "Philly Steak", description: "Shaved ribeye, melted provolone, grilled onions and peppers on a toasted hoagie.", price: 12.99, calories: 810, image: IMG.phillySteak, category: "sandwiches", tags: ["popular"] },
  { id: "philly-chicken", name: "Philly Chicken", description: "Grilled chicken, provolone, onions and peppers on a toasted hoagie.", price: 11.99, calories: 720, image: IMG.phillyChicken, category: "sandwiches" },
  { id: "gyros", name: "Gyros", description: "Seasoned meat, tzatziki, tomato, onion, and fries wrapped in warm pita.", price: 11.49, calories: 760, image: IMG.gyros, category: "sandwiches", tags: ["popular"] },
  { id: "falafel-wrap", name: "Falafel Wrap", description: "Crispy falafel, tahini, pickled veg and fresh greens in a warm pita.", price: 9.99, calories: 540, image: IMG.falafel, category: "sandwiches", tags: ["veggie"] },
  { id: "falafel-platter", name: "Falafel Platter", description: "Six falafel, hummus, tahini, salad, pickles and warm pita.", price: 13.99, calories: 720, image: IMG.falafelPlatter, category: "platters", tags: ["veggie"] },
  { id: "tacos", name: "Tacos", description: "Three soft corn tortillas with onion, cilantro, salsa verde and lime.", price: 9.99, calories: 480, image: IMG.tacos, category: "mexican", variants: ["Beef", "Chicken"], tags: ["popular"] },
  { id: "nachos", name: "Loaded Nachos", description: "Warm tortilla chips, queso, pico de gallo, jalapeños, sour cream.", price: 10.99, calories: 890, image: IMG.nachos, category: "mexican", variants: ["Beef", "Chicken"], tags: ["spicy"] },
  { id: "loaded-fries", name: "Loaded Fries", description: "Crispy fries piled high with cheese sauce, meat, green onion, and drizzle.", price: 9.49, calories: 780, image: IMG.loadedFries, category: "mexican", variants: ["Beef", "Chicken"], tags: ["popular"] },
  { id: "hot-dog", name: "Classic Hot Dog", description: "All-beef dog, mustard, ketchup, onions, relish on a soft bun.", price: 6.99, calories: 420, image: IMG.hotDog, category: "grill" },
  { id: "polish", name: "Polish Sausage", description: "Smoky Polish sausage, grilled onions, brown mustard on a toasted bun.", price: 7.99, calories: 560, image: IMG.polish, category: "grill" },
  { id: "lemonade-strawberry", name: "Strawberry Lemonade", description: "Fresh-squeezed lemonade with real strawberries.", price: 4.49, image: IMG.lemonadeStrawberry, category: "drinks" },
  { id: "lemonade-mango", name: "Mango Lemonade", description: "Fresh-squeezed lemonade with sweet mango purée.", price: 4.49, image: IMG.lemonadeMango, category: "drinks" },
  { id: "lemonade-blueberry", name: "Blueberry Lemonade", description: "Fresh-squeezed lemonade with wild blueberries.", price: 4.49, image: IMG.lemonadeBlueberry, category: "drinks" },
];

export const topSellers = [
  menu.find((m) => m.id === "chicken-alfredo")!,
  menu.find((m) => m.id === "philly-steak")!,
  menu.find((m) => m.id === "gyros")!,
  menu.find((m) => m.id === "loaded-fries")!,
];