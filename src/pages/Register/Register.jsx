import styles from "./Register.module.scss";
import logo from "../../imagenes/logoPascual.png";
import Button from "../../components/UI/Button";
import { Link } from "react-router-dom";
import clsx from "clsx";
import LoginLayout from "../../components/LoginLayout/LoginLayout";

export default function Register() {
  const handleSubmit = () => {};
  return (
    <LoginLayout>
      <section className={styles["container-register"]}>
        <img src={logo} alt="logo" className={styles["img-logo"]} />
        <form
          className={styles["form-register"]}
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <p className={styles["title"]}>Crear cuenta</p>
          <div clas="form-outline ">
            <input
              type="text"
              id="nombre_completo"
              className={clsx("form-control", styles["style-input"])}
              placeholder="Nombre Completo"
            />
          </div>

          <div clas="form-outline ">
            <input
              type="text"
              id="empresa"
              className={clsx("form-control", styles["style-input"])}
              placeholder="Empresa"
            />
          </div>

          <div clas="form-outline ">
            <input
              type="number"
              id="telefono"
              className={clsx("form-control", styles["style-input"])}
              placeholder="Telefono"
            />
          </div>

          <div clas="form-outline ">
            <input
              type="email"
              id="email"
              className={clsx("form-control", styles["style-input"])}
              placeholder="Email"
            />
          </div>

          <div className="form-outline ">
            <input
              type="password"
              id="contrasena"
              className={clsx("form-control", styles["style-input"])}
              placeholder="Contraseña"
            />
          </div>

          <div className="form-outline mb-4">
            <input
              type="password"
              id="confirmar_contrasena"
              className={clsx("form-control", styles["style-input"])}
              placeholder="Confirmar contraseña"
            />
          </div>
          <div className={styles["container-btn-crear"]}>
            <Button labelText="Crear cuenta" name="iniciar_seccion">
              Crear cuenta
            </Button>
          </div>

          <div className="d-sm-flex mt-4">
            <Link to="/login" className={styles["border-button-register"]}>
              {" "}
              Ya tengo cuenta{" "}
            </Link>
          </div>
        </form>
      </section>
    </LoginLayout>
  );
}
