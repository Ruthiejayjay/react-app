import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  color?: "primary" | "secondary";
  onClick: () => void;
}

const Button = ({ children, onClick, color = "primary" }: Props) => {
  return (
    <div typeof="button" className={"btn btn-" + color} onClick={onClick}>
      {children}
    </div>
  );
};

export default Button;
