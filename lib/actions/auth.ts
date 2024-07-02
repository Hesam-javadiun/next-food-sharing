"use server";
import { type AuthFormState as AuthFormStateType } from "@/components/authentication-form";
import { redirect } from "next/navigation";
import { createUser } from "@/lib/data-base/user/create-user";
import { getUserByEmail } from "../data-base/user/get-user";

export async function authAction(
  isLoginMode: boolean,
  prevState: AuthFormStateType,
  formData: FormData
) {
  if (isLoginMode) {
    return login(prevState, formData);
  }
  return singUp(prevState, formData);
}

async function singUp(prevState: AuthFormStateType, formData: FormData) {
  const email = formData.get("email")! as string;
  const password = formData.get("password")! as string;

  try {
    validateCredentials({ email, password });
    createUser(email, password);
    redirect("./");
  } catch (error: unknown) {
    return {
      error,
    };
  }
}

async function login(prevState: AuthFormStateType, formData: FormData) {
  const email = formData.get("email")! as string;
  const password = formData.get("password")! as string;

  try {
    validateCredentials({ email , password });
    const user = getUserByEmail(email);
    console.log('user', user);
    redirect("./");
  } catch (error: unknown) {
    return {
      error,
    };
  }
}

function validateCredentials({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  let errors: { [errorName: string]: string } = {};

  if (!email.includes("@")) {
    errors.email = "Please enter a valid email address.";
  }

  if (password.trim().length < 8) {
    errors.password = "Password must be at least 8 characters long.";
  }

  if (Object.keys(errors).length > 0) {
    throw errors;
  }
}
