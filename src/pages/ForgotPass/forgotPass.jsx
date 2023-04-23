import styles from "./forgotPass.module.scss";
import logo from "../../imagenes/logo-en-blanco.png";
import Button from "../../components/UI/Button";
import clsx from "clsx";
import LoginLayout from "../../components/LoginLayout/LoginLayout";

export default function ForgotPass() {
  return (
    <LoginLayout>
      <section className={styles["container-forgot-pass"]}>
        <div className="imagen-fondo"></div>

        <img src={logo} alt="logo" className={clsx(styles["img-logo"])} />
        <form className={styles["form-forgot"]}>
          <span className={clsx("mb-4", styles["title-style"])}>
            ¿Olvidó su contraseña?
          </span>
          <p className={clsx("mt-3", styles["parrafo-style"])}>
            No hay problema, permitanos conocer su correo y le enviaremos un
            correo con el link para que pueda actualizar su clave.
          </p>
          <div clas="form-outline mb-4">
            <input
              type="email"
              id="form2Example1"
              className={clsx("form-control mb-4", styles["style-input"])}
              placeholder="Email"
            />
          </div>
          <div className={clsx("mt-4", styles["container-btn-iniciar"])}>
            <Button labelText="Iniciar sección" name="iniciar_sesión">
              Iniciar Sesión{" "}
            </Button>
          </div>
        </form>
      </section>
    </LoginLayout>
  );
}
