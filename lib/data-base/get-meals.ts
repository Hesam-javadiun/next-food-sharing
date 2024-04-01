import sql from "better-sqlite3";
import { type MealData } from "./meal-type";

const db = sql("meals.db");

export async function getMeals(): Promise<MealData[]> {
  await new Promise((resolve) => setTimeout(resolve, 4000));

  // throw new Error('something happened!')
  return db.prepare("SELECT * FROM meals").all() as MealData[];
}
