import "../Input/input.scss";
import clsx from "clsx";

export default function Input({ children, typeInput, className, ...props }) {
  let selectClass = props.selectClass ? ` ${props.selectClass}` : "";
  return (
    <div>
      <input
        className={clsx("class-basic", className, {
          "input-primary": typeInput === "primary",
          "input-secondary": typeInput === "secondary",
          "input-terciary": typeInput === "terciary",
        })}
        {...props}
      ></input>
    </div>
  );
}
