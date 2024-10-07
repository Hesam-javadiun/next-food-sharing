import { PurpleText, } from "@/src/components/UI";
import ShareMealForm from '@/src/components/share-meal-form';
import classes from "./page.module.css";

const MealsSharePage = function () {


  return (
    <>
      <header className={classes.header} >
        <h1>
          Share your <PurpleText>favorite meal</PurpleText>
        </h1>
        <p>Or any other meal you feel needs sharing!</p>
      </header>
      <main>
        <ShareMealForm />
      </main>
    </>
  );
};

export default MealsSharePage;
