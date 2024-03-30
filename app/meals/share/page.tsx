import classes from "./page.module.css";
import { PurpleText, inputs } from "@/components/UI";
import ImageInput from "@/components/image-input";

const MealsSharePage = function () {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Share your <PurpleText>favorite meal</PurpleText>
        </h1>
        <p>Or any other meal you feel needs sharing!</p>
      </header>
      <main>
        <form className={classes.form}>
          <div className={classes.row}>
            <div>
              <label htmlFor="name" className={classes.label}>Your Name</label>
              <inputs.input name="name"></inputs.input>
            </div>
            <div>
              <label htmlFor="email" className={classes.label}>Your Email</label>
              <inputs.input name="email"></inputs.input>
            </div>
          </div>
          <label htmlFor="title" className={classes.label}>Title</label>
          <inputs.input name="title"></inputs.input>
          <label htmlFor="summary" className={classes.label}>Summary</label>
          <inputs.input name="summary"></inputs.input>
          <label htmlFor="instructions" className={classes.label}>Instruction</label>
          <inputs.textarea
            name="instructions"
            // id=""
            // cols="30"
            // rows="10"
          ></inputs.textarea>
          <ImageInput></ImageInput>
        </form>
      </main>
    </>
  );
};

export default MealsSharePage;
