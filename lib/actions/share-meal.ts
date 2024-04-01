"use server";
import { type MealData, saveMeal } from "../data-base";
import { redirect } from "next/navigation";
const shareMeal = async (mealFormData: FormData) => {
  const meal = {
    creator: mealFormData!.get("name"),
    creator_email: mealFormData!.get("email"),
    title: mealFormData!.get("title"),
    summary: mealFormData!.get("summary"),
    instructions: mealFormData!.get("instructions"),
    image: mealFormData!.get("image"),
  };

  await saveMeal(meal);
  redirect('/meals')
};

export default shareMeal;
