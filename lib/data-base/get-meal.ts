import sql from "better-sqlite3";
import type { MealData } from "./get-meals";

const db = sql("meals.db");

export const getMeal =(slug: MealData['slug']) => {
    return db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug);
}
