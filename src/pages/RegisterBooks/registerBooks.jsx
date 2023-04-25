import clsx from "clsx";
import Label from "../../components/UI/Label/Label";
import Input from "../../components/UI/Input/input";
import Header from "../../components/Header/header";
import Layout from "../../components/Layout/Layout";
import Navbar from "../../components/Navbar/navbar";
import styles from "../RegisterBooks/registerBooks.module.scss";
import Button from "../../components/UI/Button";
import { useEffect, useState } from "react";
import {
  deleteData,
  getCollectionDocuments,
  updateData,
} from "../../Utility/functionsDB";
import TableData from "../../components/TableData/tableData";
import { Toaster, toast } from "react-hot-toast";

export default function RegisterBook() {
  const [form, setForm] = useState(null);
  const [booksList, setBooksList] = useState([]);
  const hedersForm = [
    "nombre_autor",
    "fecha_nacimiento",
    "lugar_nacimineto",
    "titulo_libro",
    "id_libro",
    "editorial",
    "fecha_registro",
    "fecha_publicacion",
  ];

  useEffect(() => {
    async function fetchFunction() {
      await loadCollection();
      await setCurrentForm();
    }

    fetchFunction();
    return () => {};
  }, []);
  const loadCollection = async () => {
    let bookList = await getCollectionDocuments("books");
    setBooksList(bookList);
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
      updateData("books", formHeaders.id_libro, formHeaders);
      toast.success("El libro fue guardado exitosamente");
    } catch (error) {}
  };

  const getHeaderForm = async (input) => {
    let headersObjet = {};

    hedersForm.forEach(
      (item) => form[item] && (headersObjet[item] = form[item].value)
    );

    const formHeaders = {
      ...headersObjet,
      id_libro: window.crypto.randomUUID(),
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

      let result = booksList.find((item) => {
        return item.titulo_libro === idDiv;
      });
      deleteData("books", result.id_libro);
      toast.success("Libro eliminado");
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
          <span className={clsx(styles["title-style"])}>
            Registro de Libros
          </span>
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
              <Input
                id="nombre_autor"
                name="nombre_autor"
                className="mb-2 input-data-configuration"
                type="text"
                autoComplete="off"
                onChange={() => {}}
              />
              <Input
                id="fecha_nacimiento"
                name="fecha_nacimiento"
                className="mb-2 input-data-configuration"
                type="date"
                onChange={() => {}}
              />
              <Input
                id="lugar_nacimineto"
                name="lugar_nacimineto"
                className="mb-2 input-data-configuration"
                type="text"
                autoComplete="off"
                onChange={() => {}}
              />
              <Input
                id="titulo_libro"
                name="titulo_libro"
                className="mb-2 input-data-configuration"
                type="text"
                autoComplete="off"
                onChange={() => {}}
              />
              <Input
                id="fecha_publicacion"
                name="fecha_publicacion"
                className="mb-2 input-data-configuration"
                type="date"
                onChange={() => {}}
              />
              <Input
                id="editorial"
                name="editorial"
                className="mb-2 input-data-configuration"
                type="text"
                autoComplete="off"
                onChange={() => {}}
              />
              <Input
                id="fecha_registro"
                name="fecha_registro"
                className="mb-2 input-data-configuration"
                type="date"
                onChange={() => {}}
              />
            </div>
            <div className={clsx("col-12 mt-3")}>
              <Button type="submit">Guardar</Button>
            </div>
          </div>
        </form>
        <div className={clsx(styles["container-table"])}>
          <span className={clsx(styles["title-style"])}>Listado de Libros</span>
          <TableData
            booksList={booksList}
            onClick={(e, type) => {
              debugger;
              if (type === "edit") editBook(e);
              if (type === "delete") deleteBook(e);
            }}
          />
        </div>
      </Layout>
    </>
  );
}
