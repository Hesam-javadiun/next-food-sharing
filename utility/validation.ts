type ValidateInputType = {
  validator: (value: any) => boolean;
  message: string;
  code: string;
};

type ErrorObjectType = {
  [errorName: string]: string;
};

export default class Validation {
  private isCustomError(error: unknown): boolean {
    if (!(error instanceof Error)) {
      return false;
    }

    if (!("cause" in error)) {
      return false;
    }

    if (!("code" in (error.cause as Pick<Error, "cause">))) {
      return false;
    }

    return true;
  }

  private validate(
    { code, validator, message }: ValidateInputType,
    errors: ErrorObjectType,
    value: unknown
  ) {
    try {
      if (validator(value)) {
        throw Error(message, { cause: { code, value } });
      }
    } catch (er: unknown) {
      if (this.isCustomError(er)) {
        errors[(er as any).cause.code] = message;
      } else {
        throw er;
      }
    }
  }

  public generateValidation(
    { code, validator, message }: ValidateInputType
  ) {
    return this.validate.bind(null, {
      code,
      validator,
      message,
    });
  }
}
