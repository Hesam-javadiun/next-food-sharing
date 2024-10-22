import { MealCard, GridContainer } from "@/src/components/UI";
import type { MealData } from "@/src/lib/data-base";
import classes from "./meals-grid.module.css";

type MealsGridProps = {
  meals: MealData[];
};
//ToDo
//extract grid
//extract meal fetching
//add tailwind add test

const MealsGrid = function ({ meals }: MealsGridProps) {
  return (
    <GridContainer className="w-[min(100%,90rem)] m-auto p-10 list-none ">
      {meals.map((meal: MealData) => (
        <li key={meal.id} className={classes.item}>
          <MealCard {...meal}></MealCard>
        </li>
      ))}
    </GridContainer>
  );
};

export default MealsGrid;
