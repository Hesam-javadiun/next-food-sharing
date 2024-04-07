"use server";
import { saveMeal } from "../data-base";
import { redirect } from "next/navigation";


function isInvalidText(text : unknown) {
  if(typeof text === 'string'){
    return !text || text.trim() === "";
  }
  return false
}

const shareMeal = async (mealFormData: FormData) => {
  const meal = {
    creator: mealFormData!.get("name"),
    creator_email: mealFormData!.get("email"),
    title: mealFormData!.get("title"),
    summary: mealFormData!.get("summary"),
    instructions: mealFormData!.get("instructions"),
    image: <File>mealFormData!.get("image"),
  };

  if (
    isInvalidText(meal.title) ||
    isInvalidText(meal.summary) ||
    isInvalidText(meal.instructions) ||
    isInvalidText(meal.creator) ||
    isInvalidText(meal.creator_email) ||
    (!(<string>meal.creator_email).includes('@')) ||
    !meal.image || meal.image.size === 0
  ){
    throw new Error('invalid input')
  }
  

  await saveMeal(meal);
  redirect("/meals");
};

export default shareMeal;


//! is not null
//? if was exist go and continue