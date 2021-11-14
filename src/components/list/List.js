import React from "react";
import { FaTrash, FaEdit } from "react-icons/fa";
import { useGlobalContext } from "../../context/context";

import "./list.scss";
const List = () => {
  const { list, removeItem, editItem } = useGlobalContext();
  return (
    <div className="list">
      {list.map(({ id, title }) => {
        return (
          <article className="list__item" key={id}>
            <p className="list__tilte">{title}</p>
            <div className="list__btn-container">
              <button
                className="btn-edit"
                type="button"
                onClick={() => editItem(id)}
              >
                <FaEdit className="icon edit" />
              </button>
              <button
                className="btn-delete"
                type="button"
                onClick={() => removeItem(id)}
              >
                <FaTrash className="icon delete" />
              </button>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default List;
