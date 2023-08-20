import { useContext } from "react";
import TextInput, { Props as TextInputProps } from "../input/TextInput";
import ErrorMessage from "./ErrorMessage";
import FormContext from "./FormContext";

type Porps = {
  name: string;
  placeholder: string;
  className?: string;
};

const InputField = ({ name, placeholder, className }: Porps) => {
  const { data, errors, setData, setErrors } = useContext(FormContext);

  return (
    <article className={className}>
      <TextInput
        value={data[name] as string}
        onChange={(newValue) => setData({ ...data, [name]: newValue })}
        placeholder={placeholder}
        className={`${className}__text-input`}
      />
      <ErrorMessage className={`${className}__error-message`}>
        {errors[name]}
      </ErrorMessage>
    </article>
  );
};

export default InputField;
