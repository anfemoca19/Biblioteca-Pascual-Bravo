import "./Label.scss";
import clsx from "clsx";

export default function Label({ children, typeButton, className, ...props }) {
  return (
    <label className={clsx(className, {})} {...props}>
      {children}
    </label>
  );
}
