import React from "react";
import { useDispatch } from "react-redux";
import { deleteGlamping } from "../../../../../actions/Glamping";
import { Collapse, Space } from "antd";

const { Panel } = Collapse;

const Glamping = ({ glamping, setCurrentId }) => {
  const dispatch = useDispatch();
  return (
    <tbody className="text-white">
      <tr>
        <td>{glamping.name}</td>
        <td dangerouslySetInnerHTML={{ __html: glamping.description }} />
        <Space direction="vertical">
          <Collapse collapsible="header">
            <Panel header="Imagenes">
              <label>Imagen principal</label>
              <div>
                <img src={glamping.image_1} width={200} />
              </div>
              <label className="mt-4">Imagenes secundarias</label>
              <div>
                <img src={glamping.image_2} width={200} />
                <img src={glamping.image_3} width={200} />
                <img src={glamping.image_4} width={200} />
                <img src={glamping.image_5} width={200} />
                <img src={glamping.image_6} width={200} />
              </div>
            </Panel>
          </Collapse>
        </Space>
        <td>
          <div className="btn-group">
            <button
              className="btn btn-danger"
              onClick={() => dispatch(deleteGlamping(glamping._id))}
              type="submit"
              value="Eliminar"
            >
              <i class="far fa-trash-alt"></i>
            </button>
            <button
              className="btn btn-warning"
              onClick={() => setCurrentId(glamping._id)}
              value="Editar"
              type="submit"
            >
              <i class="far fa-edit"></i>
            </button>
          </div>
        </td>
      </tr>
    </tbody>
  );
};
export default Glamping;
