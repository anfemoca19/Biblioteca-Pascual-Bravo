import clsx from "clsx";
import styles from "../Navbar/navbar.module.scss";
import { Link, useLocation } from "react-router-dom";
import { useRef } from "react";

export default function Navbar() {
  const myRef = useRef(null);
  const location = useLocation();
  let changeText = () => {
    myRef.current.style.display = "flex";
  };
  return (
    <>
      <ul className={clsx("ps-0")}>
        <li
          className={clsx("mb-2", styles["nav-item"], {
            [styles.active]: location.pathname === "/dashboard",
          })}
        >
          <Link
            className={clsx("fs-6 mb-0 h1", styles["nav-link"])}
            to="/dashboard"
            onClick={() => {
              changeText();
            }}
          >
            <span ref={myRef} className={clsx(styles["text-menu"])}>
              Inicio
            </span>
          </Link>
        </li>
        <li
          className={clsx("mb-2", styles["nav-item"], {
            [styles.active]: location.pathname === "/configuration",
          })}
        >
          <Link
            className={clsx(
              "fs-6 mb-0 h1",
              styles["nav-link"],
              styles["link-style"]
            )}
            to="/registerBooks"
          >
            <span ref={myRef} className={clsx(styles["text-menu"])}>
              Registro de libros
            </span>
          </Link>
        </li>

        <li
          className={clsx("mb-2", styles["nav-item"], {
            [styles.active]: location.pathname === "/users",
          })}
        >
          <Link
            className={clsx("fs-6 ", styles["nav-link"], styles["link-style"])}
            to="/loadRecord"
          >
            <span ref={myRef} className={clsx(styles["text-menu"])}>
              Registro de préstamos
            </span>
          </Link>
        </li>

        <li
          className={clsx("mb-2", styles["nav-item"], {
            [styles.active]: location.pathname === "/categories",
          })}
        >
          <Link
            className={clsx("fs-6 ", styles["nav-link"], styles["link-style"])}
            to="/profile"
          >
            <span ref={myRef} className={clsx(styles["text-menu"])}>
              Mi perfil
            </span>
          </Link>
        </li>

        <li
          className={clsx("mb-2", styles["nav-item"], {
            [styles.active]: location.pathname === "/courses",
          })}
        >
          <Link
            className={clsx(
              "fs-6 mb-0 h1",
              styles["nav-link"],
              styles["link-style"]
            )}
          >
            {/* <span className={clsx(styles["nav-icon"], styles["icon-course"])} /> */}
            <span className={clsx(styles["text-menu"])}>Cerrar Sesión</span>
          </Link>
        </li>
      </ul>
    </>
  );
}
