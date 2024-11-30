
import { Link, PurpleText, GridContainer, MealCard } from "@/src/components/UI";
import { getMeals } from "@/src/lib/data-base";
import { Suspense } from "react";
import LoadingMeals from "./loading-meals";
import classes from "./page.module.css";
import type { MealData } from "@/src/lib/data-base";

const Meals = async function () {
  const meals = await getMeals();

  return (
    <GridContainer className="w-[min(100%,90rem)] m-auto p-10 list-none ">
      {meals.map((meal: MealData) => (
        <li key={meal.id} className="h-120">
          <MealCard {...meal}></MealCard>
        </li>
      ))}
    </GridContainer>
  );
};

const MealsPage = function () {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious meals, created <PurpleText>by you</PurpleText>
        </h1>
        <p>
          Choose your favorite recipe and cook it yourself. It is easy and fun!
        </p>
        <p>
          <Link href="meals/share" isBackgroundColorFilled>
            Share Your Favorite Recipe
          </Link>
        </p>
      </header>
      <Suspense fallback={<LoadingMeals />}>
        <Meals />
      </Suspense>
    </>
  );
};

export default MealsPage;
