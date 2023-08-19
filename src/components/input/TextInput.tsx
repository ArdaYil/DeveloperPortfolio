export interface Props {
  value: string;
  placeholder?: string;
  onChange: (newValue: string) => void;
}

const TextInput = ({ placeholder, value, onChange }: Props) => {
  return (
    <input
      value={value}
      type="text"
      className="text-input"
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

export default TextInput;
