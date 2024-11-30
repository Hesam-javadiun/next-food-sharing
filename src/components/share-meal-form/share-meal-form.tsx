import { shareMeal } from "@/src/actions";
import { inputs, Form } from "@/src/components/UI";
import ImageInput from "@/src/components/image-input";
// import classes from "./share-meal-form.module.css";
import SubmitButton from "./submit-button";

//todo
// add style to input and form with tailwind
// add corrected props to inputs and form component fix typescript bugs
// add more test to each unit

const ShareMealForm = function () {
  const initialState = {
    message: null,
  };

  return (
    <Form
      action={shareMeal}
      initialState={initialState}
      className="w-[min(50rem,100%)] m-auto flex flex-col gap-4"
    >
      <div className="flex justify-center align-center gap-4">
        <inputs.input
          name="name"
          id="name"
          required
          type="text"
          label="Your Name"
          as="input"
        ></inputs.input>
        <inputs.input
          name="email"
          id="email"
          required
          type="text"
          label="Your Email"
          as="input"
        ></inputs.input>
      </div>
      <inputs.input
        name="title"
        id="title"
        required
        type="text"
        label="Title"
        as="input"
      ></inputs.input>
      <inputs.input
        name="summary"
        id="summary"
        required
        type="text"
        label="Summary"
        as="input"
      ></inputs.input>
      <inputs.input
        name="instructions"
        id="instructions"
        label="Instruction"
        as="textarea"
        rows={10}
      ></inputs.input>
      <ImageInput name={"image"} labelText="Your Image" required></ImageInput>
      <SubmitButton />
    </Form>
  );
};

export default ShareMealForm;
