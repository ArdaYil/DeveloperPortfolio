import ClassName from "../../util/ClassName";

interface Props {
  children: string;
  className?: string;
}

const ErrorMessage = ({ children, className }: Props) => {
  return <p className={ClassName("error-message", className)}>{children}</p>;
};

export default ErrorMessage;
