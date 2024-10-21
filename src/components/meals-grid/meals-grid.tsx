import MealCard from "@/src/components/UI/meal-card";
import type { MealData } from "@/src/lib/data-base";
import classes from "./meals-grid.module.css";

type MealsGridProps = {
  meals: MealData[]
};
//ToDo
//extract grid 
//extract meal fetching 
//add tailwind add test 

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
