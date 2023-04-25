import { FiEdit } from "react-icons/fi";
import { MdOutlineDelete } from "react-icons/md";
export default function TableMyProfile(props) {
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Nombre del libro </th>
            <th scope="col">Fecha del prestamo</th>
            <th scope="col">Nombre de quien entrega</th>
            <th scope="col">Tiempo del prestamo</th>
          </tr>
        </thead>
        <tbody>
          {props.loanList.map((book, key) => {
            return (
              <tr key={key}>
                <td>{book.nombre_libro}</td>
                <td>{book.fecha_prestamo}</td>
                <td>{book.nombre_presta}</td>
                <td>{book.tiempo_prestamo}</td>
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
