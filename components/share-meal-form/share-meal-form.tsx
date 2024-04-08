import ImageInput from "@/components/image-input";
import { inputs } from "@/components/UI";
import classes from "./share-meal-form.module.css";
import { shareMeal } from "@/lib/actions";
import SubmitButton from './submit-button';

const ShareMealForm = function () {

  return (
    <form className={classes.form} action={shareMeal}>
      <div className={classes.row}>
        <div>
          <label htmlFor="name">Your Name</label>
          <inputs.input name="name" id="name" required type='text'></inputs.input>
        </div>
        <div>
          <label htmlFor="email">Your Email</label>
          <inputs.input name="email" id="email" required type='email'></inputs.input>
        </div>
      </div>
      <label htmlFor="title">Title</label>
      <inputs.input name="title" id="title" required type='text'></inputs.input>
      <label htmlFor="summary">Summary</label>
      <inputs.input name="summary" id="summary" required type='text'></inputs.input>
      <label htmlFor="instructions">Instruction</label>
      <inputs.textarea
        name="instructions"
        id="instructions"
        // id=""
        // cols="30"
        // rows="10"
      ></inputs.textarea>
      <ImageInput name={"image"} labelText="Your Image" required></ImageInput>
      <SubmitButton />
    </form>
  );
};

export default ShareMealForm;
