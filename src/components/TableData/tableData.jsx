import { FiEdit } from "react-icons/fi";
import { MdOutlineDelete } from "react-icons/md";
export default function TableData(props) {
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Id del Libro</th>
            <th scope="col">Titulo del libro</th>
            <th scope="col">Autor</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">{props.id_libro}</th>
            <td>{props.titulo_libro}</td>
            <td>{props.nombre_autor}</td>
            <td>
              <FiEdit />
              <MdOutlineDelete />
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
