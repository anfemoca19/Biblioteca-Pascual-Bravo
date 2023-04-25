import clsx from "clsx";
import { Link } from "react-router-dom";
import styles from "../Header/header.module.scss";
import Logo from "../../imagenes/logoPascual.png";
import Input from "../UI/Input/input";
import { BsSearch } from "react-icons/bs";

export default function Header() {
  window.localStorage.setItem("nombre", "Andres Felipe Morales Cardona");
  return (
    <div className={clsx("container-fluid mt-2")}>
      <div
        className={clsx(
          "row",
          styles["container-web"],
          styles["container-mobile"],
          styles["container-tablet"]
        )}
      >
        <div className={clsx("col-3 p-2", styles["container-logo"])}>
          <Link to={"/home"}>
            <img className={clsx(styles.logo)} src={Logo} alt="logo" />
          </Link>
        </div>
        <div
          className={clsx(
            "col-6 p-4 d-flex align-items-center",
            styles["container-user"]
          )}
        >
          <div className={clsx(styles["container-data-user"])}>
            <span>{localStorage.nombre}</span>
          </div>
        </div>
        <div
          className={clsx("col-3 p-2 ", styles["container-pricipal-search"])}
        >
          <div className={clsx(styles["container-search"])}>
            <BsSearch />
            <Input
              className={clsx("border-0 ", styles["input-search"])}
              type="text"
              placeholder="Buscar"
            ></Input>
          </div>
        </div>
      </div>
    </div>
  );
}
