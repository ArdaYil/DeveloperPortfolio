import { AiOutlineClose } from "react-icons/ai";

interface Props {
  onClose: () => void;
  className?: string;
}

const CloseButton = ({ onClose, className }: Props) => {
  return (
    <div className={className} onClick={onClose}>
      <AiOutlineClose color="#000" size={30} />
    </div>
  );
};

export default CloseButton;
