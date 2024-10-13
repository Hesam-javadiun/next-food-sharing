import MealsGrid from "@/src/components/meals-grid";
import { Link, PurpleText } from "@/src/components/UI";
import { getMeals } from "@/src/lib/data-base";
import { Suspense } from "react";
import LoadingMeals from './loading-meals';
import classes from "./page.module.css";
//todo 
//it must use better typescript 
//you have to add api for this next res and request
//add tailwind and add test 
//must extract whole logic fetching and showing meals 
const Meals = async function () {
  const meals = await getMeals();

  return <MealsGrid meals={meals} />;
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