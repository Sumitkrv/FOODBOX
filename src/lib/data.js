export const categories = [
  { id: "veg-curry", name: "Veg Curry Kits", icon: "🥗", image: "/mix-veg-curry.jpg" },
  { id: "paneer", name: "Paneer Kits", icon: "🧀", image: "/paneer-butter-masala.jpg" },
  { id: "dal", name: "Dal Kits", icon: "🍲", image: "/dal-tadka.jpg" },
  { id: "roti", name: "Roti Packs", icon: "🫓", image: "/roti-pack.jpg" },
  { id: "rice", name: "Rice Packs", icon: "🍚", image: "/jeera-rice.jpg" },
  { id: "family", name: "Family Boxes", icon: "👨‍👩‍👧‍👦", image: "/family-feast.png" },
  { id: "diet", name: "Healthy Diet Boxes", icon: "💪", image: "/gym-bowl.jpg" },
  { id: "quick", name: "Quick 15-Min Meals", icon: "⚡", image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=600&q=80" },
];

export const mealKits = [
  {
    id: "palak-paneer",
    name: "Palak Paneer Kit",
    image: "/palak-paneer.jpg",
    category: "paneer",
    cookTime: 15,
    spiceLevel: 2,
    servings: 1,
    price: 249,
    description:
      "Fresh spinach puree, paneer cubes, and aromatic spices — cook restaurant-style palak paneer at home.",
    ingredients: [
      { name: "Spinach puree", amount: 200, unit: "g" },
      { name: "Paneer cubes", amount: 150, unit: "g" },
      { name: "Onion", amount: 1, unit: "pc" },
      { name: "Tomato", amount: 1, unit: "pc" },
      { name: "Ginger-garlic paste", amount: 15, unit: "g" },
      { name: "Cream", amount: 30, unit: "ml" },
      { name: "Spice mix", amount: 1, unit: "pack" }
    ],
    nutrition: [
      { label: "Calories", value: "320 kcal" },
      { label: "Protein", value: "18g" },
      { label: "Carbs", value: "22g" },
      { label: "Fat", value: "16g" },
    ],
    instructions: [
      "Heat oil, sauté onions till golden.",
      "Add ginger-garlic paste and spice mix.",
      "Pour spinach puree, simmer 5 min.",
      "Add paneer, cream, cook 3 min. Serve hot.",
    ],
    rating: 4.8,
    reviews: 234,
  },
  {
    id: "dal-tadka",
    name: "Dal Tadka Kit",
    image: "/dal-tadka.jpg",
    category: "dal",
    cookTime: 12,
    spiceLevel: 3,
    servings: 1,
    price: 179,
    description: "Pre-soaked toor dal with tadka spices ready to temper and serve.",
    ingredients: [
      { name: "Toor dal (pre-soaked)", amount: 250, unit: "g" },
      { name: "Onion", amount: 1, unit: "pc" },
      { name: "Tomato", amount: 1, unit: "pc" },
      { name: "Green chilli", amount: 2, unit: "pcs" },
      { name: "Tadka spice mix", amount: 1, unit: "pack" },
      { name: "Ghee", amount: 20, unit: "ml" }
    ],
    nutrition: [
      { label: "Calories", value: "210 kcal" },
      { label: "Protein", value: "12g" },
      { label: "Carbs", value: "28g" },
      { label: "Fat", value: "6g" },
    ],
    instructions: ["Pressure cook dal for 2 whistles.", "Prepare tadka with ghee and spices.", "Mix tadka into dal, simmer 5 min."],
    rating: 4.6,
    reviews: 189,
  },
  {
    id: "paneer-butter-masala",
    name: "Paneer Butter Masala",
    image: "/paneer-butter-masala.jpg",
    category: "paneer",
    cookTime: 18,
    spiceLevel: 2,
    servings: 1,
    price: 269,
    description: "Rich tomato-cashew gravy with soft paneer — a crowd favourite.",
    ingredients: [
      { name: "Paneer", amount: 200, unit: "g" },
      { name: "Tomato puree", amount: 250, unit: "ml" },
      { name: "Cashew paste", amount: 50, unit: "g" },
      { name: "Butter", amount: 30, unit: "g" },
      { name: "Cream", amount: 20, unit: "ml" },
      { name: "Kasuri methi", amount: 5, unit: "g" },
      { name: "Spice blend", amount: 1, unit: "pack" }
    ],
    nutrition: [
      { label: "Calories", value: "380 kcal" },
      { label: "Protein", value: "16g" },
      { label: "Carbs", value: "24g" },
      { label: "Fat", value: "22g" },
    ],
    instructions: ["Sauté tomato puree with butter.", "Add cashew paste and spices.", "Add paneer and cream, simmer 8 min."],
    rating: 4.9,
    reviews: 412,
  },
  {
    id: "mix-veg-curry",
    name: "Mix Veg Curry Kit",
    image: "/mix-veg-curry.jpg",
    category: "veg-curry",
    cookTime: 15,
    spiceLevel: 2,
    servings: 1,
    price: 199,
    description: "Chopped seasonal vegetables with curry masala — wholesome and quick.",
    ingredients: [
      { name: "Carrot", amount: 100, unit: "g" },
      { name: "Beans", amount: 80, unit: "g" },
      { name: "Cauliflower", amount: 150, unit: "g" },
      { name: "Peas", amount: 50, unit: "g" },
      { name: "Potato", amount: 1, unit: "pc" },
      { name: "Onion", amount: 1, unit: "pc" },
      { name: "Tomato", amount: 1, unit: "pc" },
      { name: "Curry masala", amount: 1, unit: "pack" }
    ],
    nutrition: [
      { label: "Calories", value: "180 kcal" },
      { label: "Protein", value: "6g" },
      { label: "Carbs", value: "26g" },
      { label: "Fat", value: "8g" },
    ],
    instructions: ["Sauté vegetables with onion-tomato base.", "Add curry masala and ½ cup water.", "Cover and cook 12 min."],
    rating: 4.5,
    reviews: 156,
  },
  {
    id: "jeera-rice",
    name: "Jeera Rice Pack",
    image: "/jeera-rice.jpg",
    category: "rice",
    cookTime: 10,
    spiceLevel: 1,
    servings: 1,
    price: 89,
    description: "Pre-washed basmati rice with cumin tempering sachet.",
    ingredients: [
      { name: "Basmati rice", amount: 200, unit: "g" },
      { name: "Cumin seeds", amount: 10, unit: "g" },
      { name: "Ghee", amount: 15, unit: "ml" },
      { name: "Bay leaf", amount: 2, unit: "pcs" }
    ],
    nutrition: [
      { label: "Calories", value: "240 kcal" },
      { label: "Protein", value: "5g" },
      { label: "Carbs", value: "52g" },
      { label: "Fat", value: "4g" },
    ],
    instructions: ["Boil rice with bay leaf.", "Prepare jeera tadka, mix gently."],
    rating: 4.7,
    reviews: 98,
  },
  {
    id: "roti-pack",
    name: "Fresh Roti Pack (6)",
    image: "/roti-pack.jpg",
    category: "roti",
    cookTime: 5,
    spiceLevel: 1,
    servings: 1,
    price: 59,
    description: "Soft whole-wheat rotis, ready to heat and serve.",
    ingredients: [
      { name: "Whole wheat rotis (6)", amount: 6, unit: "pcs" },
      { name: "Ghee sachet", amount: 1, unit: "pc" }
    ],
    nutrition: [
      { label: "Calories", value: "120 kcal/roti" },
      { label: "Protein", value: "4g" },
      { label: "Carbs", value: "22g" },
      { label: "Fat", value: "2g" },
    ],
    instructions: ["Heat on tawa 30 sec each side or microwave 30 sec."],
    rating: 4.4,
    reviews: 267,
  },
  {
    id: "family-feast",
    name: "Family Feast Box",
    image: "/family-feast.png",
    category: "family",
    cookTime: 25,
    spiceLevel: 2,
    servings: 4,
    price: 599,
    description: "Complete dinner for 4 — dal, paneer curry, rice, and rotis.",
    ingredients: [
      { name: "Dal kit", amount: 1, unit: "pack" },
      { name: "Paneer curry kit", amount: 1, unit: "pack" },
      { name: "Jeera rice", amount: 1, unit: "pack" },
      { name: "Roti pack (8)", amount: 8, unit: "pcs" },
      { name: "Salad mix", amount: 150, unit: "g" }
    ],
    nutrition: [
      { label: "Calories", value: "~900 kcal/person" },
      { label: "Protein", value: "42g" },
      { label: "Carbs", value: "95g" },
      { label: "Fat", value: "28g" },
    ],
    instructions: ["Follow individual kit instructions.", "Serve together for a complete meal."],
    rating: 4.8,
    reviews: 89,
  },
  {
    id: "gym-bowl",
    name: "High-Protein Gym Bowl",
    image: "/gym-bowl.jpg",
    category: "diet",
    cookTime: 12,
    spiceLevel: 1,
    servings: 1,
    price: 219,
    description: "Grilled paneer, quinoa, and steamed veggies for fitness enthusiasts.",
    ingredients: [
      { name: "Paneer strips", amount: 150, unit: "g" },
      { name: "Quinoa", amount: 80, unit: "g" },
      { name: "Broccoli", amount: 100, unit: "g" },
      { name: "Bell pepper", amount: 1, unit: "pc" },
      { name: "Lemon herb dressing", amount: 30, unit: "ml" }
    ],
    nutrition: [
      { label: "Calories", value: "340 kcal" },
      { label: "Protein", value: "32g" },
      { label: "Carbs", value: "28g" },
      { label: "Fat", value: "10g" },
    ],
    instructions: ["Cook quinoa as per pack.", "Grill paneer and veggies 6 min.", "Toss with dressing."],
    rating: 4.7,
    reviews: 134,
  },
  {
    id: "quick-stir-fry",
    name: "Veg Stir Fry (15 min)",
    image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=800&q=80",
    category: "quick",
    cookTime: 15,
    spiceLevel: 2,
    servings: 1,
    price: 159,
    description: "Flash-fry mix with Asian-style sauce sachet.",
    ingredients: [
      { name: "Bell pepper", amount: 1, unit: "pc" },
      { name: "Broccoli", amount: 120, unit: "g" },
      { name: "Carrot", amount: 80, unit: "g" },
      { name: "Baby corn", amount: 60, unit: "g" },
      { name: "Sauce mix", amount: 1, unit: "pack" },
      { name: "Sesame oil", amount: 10, unit: "ml" }
    ],
    nutrition: [
      { label: "Calories", value: "190 kcal" },
      { label: "Protein", value: "5g" },
      { label: "Carbs", value: "22g" },
      { label: "Fat", value: "8g" },
    ],
    instructions: ["Heat wok with oil.", "Stir-fry vegetables 6 min.", "Add sauce, toss 2 min. Serve."],
    rating: 4.6,
    reviews: 201,
  },
];



export const addOns = [
  { id: "extra-roti", name: "Extra Roti (4 pcs)", price: 39 },
  { id: "jeera-rice", name: "Jeera Rice", price: 89 },
  { id: "extra-paneer", name: "Extra Paneer (100g)", price: 79 },
];

export const testimonials = [
  { name: "Priya Sharma", location: "Mumbai", rating: 5, text: "FOODBOX changed how I cook! Fresh chopped veggies save me 30 minutes every day.", avatar: "PS" },
  { name: "Rahul Mehta", location: "Bangalore", rating: 5, text: "The paneer kits are incredible. Tastes just like restaurant food at home.", avatar: "RM" },
  { name: "Anita Desai", location: "Pune", rating: 4, text: "Family plan is perfect for us. Kids love the quick meals!", avatar: "AD" },
  { name: "Vikram Singh", location: "Delhi", rating: 5, text: "Gym diet plan helped me hit my protein goals without meal prep stress.", avatar: "VS" },
];

export const offers = [
  { title: "Refer & Earn", desc: "Get ₹100 for every friend who orders", icon: "🎁", color: "from-green-500 to-emerald-600" },
  { title: "First Order", desc: "Flat 30% off with code FRESH30", icon: "🏷️", color: "from-orange-500 to-amber-500" },
  { title: "Cashback", desc: "5% wallet cashback on every order", icon: "💰", color: "from-blue-500 to-indigo-600" },
  { title: "Loyalty Points", desc: "Earn 10 points per ₹100 spent", icon: "⭐", color: "from-purple-500 to-violet-600" },
];

export function getMealKit(id) {
  return mealKits.find((k) => k.id === id);
}

export const spiceLabels = ["Mild", "Light", "Medium", "Hot", "Extra Hot"];
