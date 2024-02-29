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
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return db.prepare("SELECT * FROM meals").all() as MealData[];
}

