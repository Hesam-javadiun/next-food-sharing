import sql from "better-sqlite3";
import { dummyMeals } from "./meals/dummy-data";

const db = sql("meals.db");

db.exec(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY,
    email TEXT UNIQUE,
    password TEXT
  );
`);

db.exec(`CREATE TABLE IF NOT EXISTS sessions (
  id TEXT NOT NULL PRIMARY KEY,
  expires_at INTEGER NOT NULL,
  user_id TEXT NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users(id)
)`);

db.exec(`
  CREATE TABLE IF NOT EXISTS meals (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    slug TEXT NOT NULL UNIQUE,
    title TEXT NOT NULL,
    image TEXT NOT NULL,
    summary TEXT NOT NULL,
    instructions TEXT NOT NULL,
    creator TEXT NOT NULL,
    creator_email TEXT NOT NULL
  );
`);
const hasMeals =
//@ts-ignore
  db.prepare("SELECT COUNT(*) as count FROM meals").get().count > 0;

if (!hasMeals) {
  db.exec(`
    INSERT INTO meals (slug, title, image, summary, instructions, creator, creator_email)
    VALUES
    ('juicy-cheese-burger', 'Juicy Cheese Burger', '/images/burger.jpg', 'A mouth-watering burger with a juicy beef patty and melted cheese, served in a soft bun.', '
        1. Prepare the patty:
           Mix 200g of ground beef with salt and pepper. Form into a patty.
  
        2. Cook the patty:
           Heat a pan with a bit of oil. Cook the patty for 2-3 minutes each side, until browned.
  
        3. Assemble the burger:
           Toast the burger bun halves. Place lettuce and tomato on the bottom half. Add the cooked patty and top with a slice of cheese.
  
        4. Serve:
           Complete the assembly with the top bun and serve hot.
      ', 'John Doe', 'johndoe@example.com'),
    ('spicy-curry', 'Spicy Curry', '/images/curry.jpg', 'A rich and spicy curry, infused with exotic spices and creamy coconut milk.', '
        1. Chop vegetables:
           Cut your choice of vegetables into bite-sized pieces.
  
        2. Sauté vegetables:
           In a pan with oil, sauté the vegetables until they start to soften.
  
        3. Add curry paste:
           Stir in 2 tablespoons of curry paste and cook for another minute.
  
        4. Simmer with coconut milk:
           Pour in 500ml of coconut milk and bring to a simmer. Let it cook for about 15 minutes.
  
        5. Serve:
           Enjoy this creamy curry with rice or bread.
      ', 'Hesam', 'hesam@example.com'),
    ('homemade-dumplings', 'Homemade Dumplings', '/images/dumplings.jpg', 'Tender dumplings filled with savory meat and vegetables, steamed to perfection.', '
        1. Prepare the filling:
           Mix minced meat, shredded vegetables, and spices.
  
        2. Fill the dumplings:
           Place a spoonful of filling in the center of each dumpling wrapper. Wet the edges and fold to seal.
  
        3. Steam the dumplings:
           Arrange dumplings in a steamer. Steam for about 10 minutes.
  
        4. Serve:
           Enjoy these dumplings hot, with a dipping sauce of your choice.
      ', 'Emily Chen', 'emilychen@example.com'),
    ('classic-mac-n-cheese', 'Classic Mac n Cheese', '/images/macncheese.jpg', 'Creamy and cheesy macaroni, a comforting classic thats always a crowd-pleaser.', '
        1. Cook the macaroni:
           Boil macaroni according to package instructions until al dente.
  
        2. Prepare cheese sauce:
           In a saucepan, melt butter, add flour, and gradually whisk in milk until thickened. Stir in grated cheese until melted.
  
        3. Combine:
           Mix the cheese sauce with the drained macaroni.
  
        4. Bake:
           Transfer to a baking dish, top with breadcrumbs, and bake until golden.
  
        5. Serve:
           Serve hot, garnished with parsley if desired.
      ', 'Laura Smith', 'laurasmith@example.com'),
    ('authentic-pizza', 'Authentic Pizza', '/images/pizza.jpg', 'Hand-tossed pizza with a tangy tomato sauce, fresh toppings, and melted cheese.', '
        1. Prepare the dough:
           Knead pizza dough and let it rise until doubled in size.
  
        2. Shape and add toppings:
           Roll out the dough, spread tomato sauce, and add your favorite toppings and cheese.
  
        3. Bake the pizza:
           Bake in a preheated oven at 220°C for about 15-20 minutes.
  
        4. Serve:
           Slice hot and enjoy with a sprinkle of basil leaves.
      ', 'Mario Rossi', 'mariorossi@example.com'),
    ('wiener-schnitzel', 'Wiener Schnitzel', '/images/schnitzel.jpg', 'Crispy, golden-brown breaded veal cutlet, a classic Austrian dish.', '
        1. Prepare the veal:
           Pound veal cutlets to an even thickness.
  
        2. Bread the veal:
           Coat each cutlet in flour, dip in beaten eggs, and then in breadcrumbs.
  
        3. Fry the schnitzel:
           Heat oil in a pan and fry each schnitzel until golden brown on both sides.
  
        4. Serve:
           Serve hot with a slice of lemon and a side of potato salad or greens.
      ', 'Franz Huber', 'franzhuber@example.com'),
    ('fresh-tomato-salad', 'Fresh Tomato Salad', '/images/tomato-salad.jpg', 'A light and refreshing salad with ripe tomatoes, fresh basil, and a tangy vinaigrette.', '
        1. Prepare the tomatoes:
          Slice fresh tomatoes and arrange them on a plate.
      
        2. Add herbs and seasoning:
           Sprinkle chopped basil, salt, and pepper over the tomatoes.
      
        3. Dress the salad:
           Drizzle with olive oil and balsamic vinegar.
      
        4. Serve:
           Enjoy this simple, flavorful salad as a side dish or light meal.
      ', 'Sophia Green', 'sophiagreen@example.com');
`);
}

export default db;

