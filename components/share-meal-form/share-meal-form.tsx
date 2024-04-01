import ImageInput from "@/components/image-input";
import { inputs } from "@/components/UI";
import classes from "./share-meal-form.module.css";
import { shareMeal } from "@/lib/actions";

const ShareMealForm = function () {
  return (
    <form className={classes.form} action={shareMeal}>
      <div className={classes.row}>
        <div>
          <label htmlFor="name">Your Name</label>
          <inputs.input name="name" id="name"></inputs.input>
        </div>
        <div>
          <label htmlFor="email">Your Email</label>
          <inputs.input name="email" id="email"></inputs.input>
        </div>
      </div>
      <label htmlFor="title">Title</label>
      <inputs.input name="title" id="title"></inputs.input>
      <label htmlFor="summary">Summary</label>
      <inputs.input name="summary" id="summary"></inputs.input>
      <label htmlFor="instructions">Instruction</label>
      <inputs.textarea
        name="instructions"
        id="instructions"
        // id=""
        // cols="30"
        // rows="10"
      ></inputs.textarea>
      <ImageInput name={"image"} labelText="Your Image"></ImageInput>
      <button type="submit" className={classes.submitButton}>
        Share Meal
      </button>
    </form>
  );
};

export default ShareMealForm;
