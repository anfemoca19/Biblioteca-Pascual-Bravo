import clsx from "clsx";
import styles from "./LoginLayout.module.scss";

export default function LoginLayout({ className, children }) {
  return (
    <div className={clsx(styles["backgroun-img"], className)}>{children}</div>
  );
}
