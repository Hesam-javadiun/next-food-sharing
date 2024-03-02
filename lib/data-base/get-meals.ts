import sql from "better-sqlite3";

const db = sql("meals.db");

export type MealData = {
  id: number;
  image: string;
  title: string;
  summary: string;
  slug: string;
  instructions: string;
  creator: string;
  creator_email: string;
}


export async function getMeals():Promise<MealData[]> {
  await new Promise((resolve) => setTimeout(resolve, 4000));

  // throw new Error('something happened!')
  return db.prepare("SELECT * FROM meals").all() as MealData[];
}

