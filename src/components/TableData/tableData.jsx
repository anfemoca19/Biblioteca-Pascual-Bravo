import { FiEdit } from "react-icons/fi";
import { MdOutlineDelete } from "react-icons/md";
export default function TableData(props) {
  console.log("estos son los props", props);
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Id del Libro</th>
            <th scope="col">Titulo del libro</th>
            <th scope="col">Editorial</th>
            <th scope="col">Autor</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {props.booksList.map((book, key) => {
            return (
              <tr>
                <th scope="row">{key}</th>
                <td>{book.titulo_libro}</td>
                <td>{book.editorial}</td>
                <td>{book.nombre_autor}</td>
                <td>
                  <FiEdit
                    name="edit"
                    onClick={(e) => {
                      props.onClick(e, "edit");
                    }}
                  />
                  <MdOutlineDelete
                    name="delete"
                    onClick={(e) => {
                      props.onClick(e, "delete");
                    }}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
