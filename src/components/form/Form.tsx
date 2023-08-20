import React, { useState } from "react";
import { Children } from "react";
import { FormEvent, ReactNode } from "react";
import FormContext, { ErrorValues, InitalValues } from "./FormContext";

interface Props {
  children: ReactNode | Array<ReactNode>;
  initialValues: InitalValues;
  className?: string;
}

const getErrorFields = (initalValues: InitalValues) => {
  const errorFields = {} as InitalValues;

  for (let i in initalValues) errorFields[i] = "";

  return errorFields as ErrorValues;
};

const Form = ({ children, initialValues, className }: Props) => {
  const [data, setData] = useState(initialValues);
  const [errors, setErrors] = useState(getErrorFields(initialValues));

  const handleSubmit = (e: FormEvent<HTMLElement>) => {
    e.preventDefault();
  };

  return (
    <form className={className} onSubmit={handleSubmit}>
      <FormContext.Provider value={{ data, errors, setData, setErrors }}>
        {children}
      </FormContext.Provider>
    </form>
  );
};

export default Form;
