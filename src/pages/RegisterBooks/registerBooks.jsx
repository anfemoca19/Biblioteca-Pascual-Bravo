import clsx from "clsx";
import Label from "../../components/UI/Label/Label";
import Input from "../../components/UI/Input/input";
import Header from "../../components/Header/header";
import Layout from "../../components/Layout/Layout";
import Navbar from "../../components/Navbar/navbar";
import styles from "../RegisterBooks/registerBooks.module.scss";
import Button from "../../components/UI/Button";

export default function RegisterBook() {
  return (
    <>
      <Header />
      <Layout navBar={<Navbar />}>
        <div className={clsx(styles["container-title"])}>
          <span className={clsx(styles["title-style"])}>
            Registro de Libros
          </span>
        </div>
        <form
          className={clsx(
            "container-fluid p-4 mb-5 mt-4",
            styles["box-container"]
          )}
        >
          <div className={clsx("row text-center")}>
            <div className={clsx("col-5", styles["grid-container"])}>
              <Label htmlFor="nombre_escritor">
                Nombre del Autor
                <span className={clsx(styles["style-asterik"])}>*</span>
              </Label>
              <Label htmlFor="publicacion">
                Fecha de nacimiento
                <span className={clsx(styles["style-asterik"])}>*</span>
              </Label>
              <Label htmlFor="categoria">
                Lugar de nacimiento{" "}
                <span className={clsx(styles["style-asterik"])}>*</span>
              </Label>
              <Label htmlFor="nombre_libro ">
                Titulo del libro{" "}
                <span className={clsx(styles["style-asterik"])}>*</span>
              </Label>{" "}
              <Label htmlFor="categoria">
                Fecha de publicación{" "}
                <span className={clsx(styles["style-asterik"])}>*</span>
              </Label>
              <Label htmlFor="nombre_libro ">
                id del libro{" "}
                <span className={clsx(styles["style-asterik"])}>*</span>
              </Label>{" "}
              <Label htmlFor="categoria">
                Editorial{" "}
                <span className={clsx(styles["style-asterik"])}>*</span>
              </Label>
              <Label htmlFor="categoria">
                Fecha de registro{" "}
                <span className={clsx(styles["style-asterik"])}>*</span>
              </Label>
            </div>
            <div className={clsx("col-7", styles["grid-container"])}>
              <Input id="password " className="mb-2 input-data-configuration" />
              <Input className="mb-2 input-data-configuration" type="date" />
              <Input className="mb-2 input-data-configuration" />
              <Input className="mb-2 input-data-configuration" />
              <Input className="mb-2 input-data-configuration" type="date" />
              <Input className="mb-2 input-data-configuration" />
              <Input className="mb-2 input-data-configuration" />
              <Input className="mb-2 input-data-configuration" type="date" />
            </div>
            <div className={clsx("col-12 mt-3")}>
              <Button type="button">Actualizar</Button>
            </div>
          </div>
        </form>
      </Layout>
    </>
  );
}
