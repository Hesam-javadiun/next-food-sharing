import type { MealData } from "./meal-type";

import db from "../db";

export const getMeal =(slug: MealData['slug']) => {
    return db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug);
}
