import ClassName from "../../util/ClassName";

export interface Props {
  value: string;
  placeholder?: string;
  className?: string;
  onChange: (newValue: string) => void;
}

const TextInput = ({ placeholder, value, className, onChange }: Props) => {
  return (
    <input
      value={value}
      type="text"
      className={ClassName(className, "text-input")}
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

export default TextInput;
