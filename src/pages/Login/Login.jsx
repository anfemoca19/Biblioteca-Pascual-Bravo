import styles from "./Login.module.scss";
import logo from "../../imagenes/logoPascual.png";
import Button from "../../components/UI/Button";
import { Link } from "react-router-dom";
import LoginLayout from "../../components/LoginLayout/LoginLayout";
import clsx from "clsx";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebaseConfig/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-hot-toast";

export default function Login() {
  const history = useNavigate();
  const [savedOk, setSavedOk] = useState(false);

  useEffect(() => {
    async function fetchData() {
      window.onpopstate = function (e) {
        history.replace("/");
      };
      if (localStorage.usuario) {
        return;
      }
    }
    fetchData();
  }, [savedOk]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData(e.target);
      const formValues = Object.fromEntries(formData);
      await signInWithEmailAndPassword(auth, formValues.email, formValues.pw);
      const user = auth.currentUser;
      if (user !== null) {
        localStorage.email = formValues.email;
        localStorage.usuario = formValues.usuario;
        history.replace("/home");
        setSavedOk(!savedOk);
      }
    } catch (error) {
      toast.error(error);
    }
  };
  return (
    <LoginLayout>
      <section className={styles["container-login"]}>
        <img src={logo} alt="logo" className={styles["img-logo"]} />
        <form
          className={styles["form-login"]}
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <span className={styles["tittle"]}>Inicia Sesión</span>
          <div clas="form-outline ">
            <input
              type="email"
              id="form2Example1"
              className={clsx("form-control", styles["border-input"])}
              placeholder="Email"
              required
            />
          </div>

          <div className="form-outline mb-4">
            <input
              type="password"
              id="form2Example2"
              className={clsx("form-control", styles["border-input"])}
              placeholder="Contraseña"
              required
            />
          </div>
          <div className={styles["container-btn-iniciar"]}>
            <Button name="iniciar_seccion " onCli>
              Iniciar sesión
            </Button>
          </div>

          <div className="row mb-4 mt-5 form-group">
            <div className="col justify-content-center ">
              <div className="form-check">
                <input
                  className={clsx("form-check-input", styles["check-color"])}
                  type="checkbox"
                  value=""
                  id="form2Example31"
                />
                <label
                  className={clsx(
                    "form-check-label",
                    styles["color-text-check"]
                  )}
                  htmlFor="form2Example31"
                >
                  {" "}
                  Recuerdame
                </label>
              </div>
            </div>
          </div>

          <div className={clsx("form-group", styles["container-btn-footer"])}>
            <Link
              to="/register"
              className={clsx(styles["border-button-login"])}
              name="register"
            >
              {" "}
              Crear Cuenta
            </Link>

            <Link
              to="/forgotPass"
              className={clsx(styles["border-button-login"])}
              name="forgot-pass"
            >
              ¿Olvidó su contraseña?
            </Link>
          </div>
        </form>
      </section>
    </LoginLayout>
  );
}
