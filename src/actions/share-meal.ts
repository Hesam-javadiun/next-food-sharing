"use server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { saveMeal } from "../lib/data-base";

function isInvalidText(text: unknown) {
  if (typeof text === "string") {
    return !text || text.trim() === "";
  }
  return false;
}

const shareMeal = async (
  pervState: { message: string | null },
  mealFormData: FormData
) => {
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
    !(<string>meal.creator_email).includes("@") ||
    !meal.image ||
    meal.image.size === 0
  ) {
    // throw new Error("invalid input");
    return { message: "invalid input.!" };
  }

  await saveMeal(meal);
  await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("dummy");
    }, 3000);
  });

  revalidatePath("/meals");
  redirect("/meals");
};

export default shareMeal;
