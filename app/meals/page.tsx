import { getMeals } from "@/lib/data-base";
import { Link, PurpleText } from "@/components/UI";
import classes from "./page.module.css";
import MealsGrid from "@/components/meals-grid";

const MealsPage = async function () {
  const meals = await getMeals();

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
      <MealsGrid meals={meals} />
    </>
  );
};

export default MealsPage;
