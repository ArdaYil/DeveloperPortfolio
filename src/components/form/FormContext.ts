import React from "react";

export type InitalValues = { [key: string]: number | string | boolean };
export type ErrorValues = { [key: string]: string };

type FormContextType = {
  data: InitalValues;
  errors: ErrorValues;
  setData: (data: InitalValues) => void;
  setErrors: (errors: ErrorValues) => void;
};

const FormContext = React.createContext<FormContextType>({} as FormContextType);

export default FormContext;
