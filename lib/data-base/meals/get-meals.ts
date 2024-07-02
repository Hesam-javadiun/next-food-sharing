import { type MealData } from "./meal-type";
import db from "../db";

export async function getMeals(): Promise<MealData[]> {
  await new Promise((resolve) => setTimeout(resolve, 4000));

  return db.prepare("SELECT * FROM meals").all() as MealData[];
}


