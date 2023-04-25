import clsx from "clsx";
import Label from "../../components/UI/Label/Label";
import Input from "../../components/UI/Input/input";
import Header from "../../components/Header/header";
import Layout from "../../components/Layout/Layout";
import Navbar from "../../components/Navbar/navbar";
import styles from "../LoadRecord/loadRecord.module.scss";
import Button from "../../components/UI/Button";
import { Toaster, toast } from "react-hot-toast";
import { useEffect, useState } from "react";
import {
  deleteData,
  getCollectionDocuments,
  updateData,
} from "../../Utility/functionsDB";
import TableLoanRecord from "./TableData/tableData";

export default function MyProfile() {
  const [form, setForm] = useState(null);
  const [loanList, setLoanList] = useState([]);
  const [myData, setMyData] = useState([]);
  const hedersForm = ["nombre", "identificacion", "programa"];

  useEffect(() => {
    async function fetchFunction() {
      await loadCollection();
      await setCurrentForm();
    }

    fetchFunction();
    return () => {};
  }, []);
  const loadCollection = async () => {
    let loanList = await getCollectionDocuments("loan_record");
    setLoanList(loanList);
    let myData = await getCollectionDocuments("profile");
    let miProfile = myData.find((item) => {
      return item.nombre === `${localStorage.nombre}`;
    });
    setMyData(miProfile);
  };

  const setCurrentForm = async () => {
    let formulario = document.getElementById("currentForm");
    setForm(formulario);
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const { formHeaders } = await getHeaderForm();
      // setDoc(doc(db, "books", window.crypto.randomUUID()), formHeaders);
      updateData("profile", formHeaders.id_prestamo, formHeaders);
      toast.success("La creación de perfil fue guardado exitosamente");
    } catch (error) {}
  };

  const getHeaderForm = async (input) => {
    let headersObjet = {};

    hedersForm.forEach(
      (item) => form[item] && (headersObjet[item] = form[item].value)
    );

    const formHeaders = {
      ...headersObjet,
      id_prestamo: window.crypto.randomUUID(),
    };

    return { formHeaders: formHeaders };
  };

  const editBook = (e) => {
    console.log("llegamos");
  };

  const deleteBook = (e) => {
    try {
      let divInputs = e.target.closest("tr");
      let idDiv =
        parseInt(divInputs.children[1].innerText) ||
        divInputs.children[1].innerText;

      let result = loanList.find((item) => {
        return item.titulo_libro === idDiv;
      });
      deleteData("profile", result.id_libro);
      toast.success("El perfil fue eliminado");
    } catch (error) {
      toast.error("Error al eliminar el libro", error);
    }
  };
  return (
    <>
      <Toaster />
      <Header />
      <Layout navBar={<Navbar />}>
        <div className={clsx(styles["container-title"])}>
          <span className={clsx(styles["title-style"])}>Mi perfil</span>
        </div>
        <form
          id="currentForm"
          className={clsx(
            "container-fluid p-4 mb-5 mt-4",
            styles["box-container"]
          )}
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <div className={clsx("row text-center")}>
            <div className={clsx("col-5", styles["grid-container"])}>
              <Label htmlFor="nombre_presta ">
                Nombre <span className={clsx(styles["style-asterik"])}>*</span>
              </Label>
              <Label htmlFor="identificacion">
                Identificacion
                <span className={clsx(styles["style-asterik"])}>*</span>
              </Label>
              <Label htmlFor="publicacprogramaion">
                Pograma <span className={clsx(styles["style-asterik"])}>*</span>
              </Label>
            </div>
            <div className={clsx("col-7", styles["grid-container"])}>
              <Input
                id="nombre"
                name="nombre"
                className="mb-2 input-data-configuration"
                type="text"
                autoComplete="off"
                required
                value={myData.nombre}
              />
              <Input
                id="identificacion"
                name="identificacion"
                className="mb-2 input-data-configuration"
                type="number"
                autoComplete="off"
                required
                value={myData.identificacion}
              />
              <Input
                id="programa"
                name="programa"
                className="mb-2 input-data-configuration"
                type="text"
                autoComplete="off"
                required
                value={myData.programa}
              />
            </div>
            <div className={clsx("col-12 mt-3")}>
              <Button type="submit">Guardar</Button>
            </div>
          </div>
        </form>
        <div className={clsx(styles["container-table"])}>
          <span className={clsx("mb-4", styles["title-style"])}>
            Mis prestamos
          </span>
          <TableLoanRecord
            loanList={loanList}
            onClick={(e, type) => {
              if (type === "edit") editBook(e);
              if (type === "delete") deleteBook(e);
            }}
          />
        </div>
      </Layout>
    </>
  );
}
