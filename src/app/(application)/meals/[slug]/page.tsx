import { PurpleText } from "@/src/components/UI";
import classes from "./page.module.css";

import { type MealData, getMeal } from "@/src/lib/data-base";
import Image from "next/image";
import { notFound } from "next/navigation";

const hasNotFoundMeal = (meal: unknown) => {
  return !Boolean(meal);
};
//toDo
//add tailwind add typescript add test 
//add 
const MealDetailsPage = function ({ params }: any) {
  const meal = getMeal(params.slug) as MealData;

  if (hasNotFoundMeal(meal)) {
    notFound();
  }
  
  meal.instructions = meal.instructions.replace(/\n/g, '<br />');
  return (
    <>
      <header className={classes.header}>
        <div className={classes.imageContainer}> <Image src={meal.image} alt={`${meal.title} image`} fill></Image></div>
        <div className={classes.leftBox}>
          <h1>{meal.title}</h1>
          <p>
            by <PurpleText>{meal.creator}</PurpleText>
          </p>
          <p>{meal.summary}</p>
        </div>
      </header>
      <main className={classes.content}>
        <p dangerouslySetInnerHTML={{__html: meal.instructions}}></p>
      </main>
    </>
  );
};

export default MealDetailsPage;
