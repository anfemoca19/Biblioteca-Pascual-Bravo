import clsx from "clsx";
import Label from "../../components/UI/Label/Label";
import Input from "../../components/UI/Input/input";
import Header from "../../components/Header/header";
import Layout from "../../components/Layout/Layout";
import Navbar from "../../components/Navbar/navbar";
import styles from "../LoadRecord/loadRecord.module.scss";
import Button from "../../components/UI/Button";

export default function LoadRecord() {
  return (
    <>
      <Header />
      <Layout navBar={<Navbar />}>
        <div className={clsx(styles["container-title"])}>
          <span className={clsx(styles["title-style"])}>
            Registro de préstamos
          </span>
        </div>
        <div
          className={clsx(
            "container-fluid p-4 mb-5 mt-4",
            styles["box-container"]
          )}
        >
          <div className={clsx("row text-center")}>
            <div className={clsx("col-5", styles["grid-container"])}>
              <Label htmlFor="nombre_libro ">
                Nombre del libro{" "}
                <span className={clsx(styles["style-asterik"])}>*</span>
              </Label>
              <Label htmlFor="nombre_escritor">
                Nombre del escritor
                <span className={clsx(styles["style-asterik"])}>*</span>
              </Label>
              <Label htmlFor="publicacion">
                Año de publicación{" "}
                <span className={clsx(styles["style-asterik"])}>*</span>
              </Label>
              <Label htmlFor="categoria">
                Categoria{" "}
                <span className={clsx(styles["style-asterik"])}>*</span>
              </Label>
            </div>
            <div className={clsx("col-7", styles["grid-container"])}>
              <Input id="password " className="mb-2 input-data-configuration" />
              <Input className="mb-2 input-data-configuration" />
              <Input className="mb-2 input-data-configuration" />
              <Input className="mb-2 input-data-configuration" />
            </div>
            <div className={clsx("col-12 mt-3")}>
              <Button>Actualizar</Button>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
