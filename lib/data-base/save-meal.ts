import slugify from "slugify";
import { type MealData } from "./meal-type";
import xss from "xss";
import fs from "node:fs";
import sql from 'better-sqlite3'

const savedImagePath = `public/images`;
const db = sql('meals.db');

export const saveMeal = async function (meal: any) {
  const mealData: Partial<MealData> = { ...meal };

  mealData.instructions = xss(meal.instructions);

  const { slug, fileName } = generateUniqueFileName(meal.title, meal.image);
  mealData.slug = slug;

  // const path = `${savedImagePath}/${fileName}`;

  // await createImageFile(meal.image, path);

  // mealData.image = `/images/${fileName}`;
  mealData.image = `/images/macncheese.jpg`;

  addIntoDatabase(mealData as MealData);
};

function generateUniqueFileName(mealTitle: string, imageObject: File) {
  const slug = slugify(mealTitle);
  const extension = imageObject.name.split(".").pop();
  const fileName = `${slug}.${extension}`;

  return { slug, fileName };
}

async function createImageFile(imageFileObject: File, path: string) {
  const stream = fs.createWriteStream(path);
  const bufferedImage = await imageFileObject.arrayBuffer();

  stream.write(Buffer.from(bufferedImage), (error) => {
    if (error) {
      throw new Error("Saving Image failed!");
    }
  });
}

function addIntoDatabase(mealData: MealData) {
  db.prepare(
    `
      INSERT INTO meals 
        (title, summary, instructions, creator, creator_email, image, slug)
      VALUES (
        @title,
        @summary,
        @instructions,
        @creator,
        @creator_email,
        @image,
        @slug
      )  
    `
  ).run(mealData);
}

