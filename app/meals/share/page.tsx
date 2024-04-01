import classes from "./page.module.css";
import { PurpleText, } from "@/components/UI";
import ShareMealForm from '@/components/share-meal-form';

const MealsSharePage = function () {

  const shareMeal = async (fromData: unknown) => {
    'use server';
    console.log('formData', fromData);
  }

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
