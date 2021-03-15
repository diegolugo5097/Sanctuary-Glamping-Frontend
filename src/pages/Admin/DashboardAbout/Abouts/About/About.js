import React from "react";
import { useDispatch } from "react-redux";
import { deleteAbout } from "../../../../../actions/AboutUs";

const About = ({ about, setCurrentId }) => {
  const dispatch = useDispatch();

  return (
    <tbody className="text-white">
      <tr>
        <td
          dangerouslySetInnerHTML={{
            __html:
              about.description && about.description.length > 1000
                ? about.description.substr(0, [635])
                : "no data",
          }}
        />
        <td>
          <div className="btn-group">
            <button
              className="btn btn-danger"
              onClick={() => dispatch(deleteAbout(about._id))}
              type="submit"
              value="Eliminar"
            >
              <i class="far fa-trash-alt"></i>
            </button>
            <button
              className="btn btn-warning"
              onClick={() => setCurrentId(about._id)}
              value="Editar"
              type="submit"
            >
              {" "}
              <i class="far fa-edit"></i>
            </button>
          </div>
        </td>
      </tr>
    </tbody>
  );
};

export default About;
