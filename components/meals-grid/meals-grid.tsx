import classes from "./meals-grid.module.css";
import MealCard from "@/components/meal-card";
import type { MealData } from "@/lib/data-base";

type MealsGridProps = {
  meals: MealData[]
};

const MealsGrid = function ({ meals }: MealsGridProps) {
  return (
    <ul className={classes.container}>
      {meals.map((meal: MealData) => (
        <li key={meal.id} className={classes.item}>
          <MealCard {...meal}></MealCard>
        </li>
      ))}
    </ul>
  );
};

export default MealsGrid;
