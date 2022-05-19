import React from "react";
import { useGlobalContext } from "../../context/context";
import Alert from "../alert/Alert";

import "./form.scss";

const Form = ({ children }) => {
  const {
    handleSubmit,
    todo,
    setTodo,
    isEditing,
    list,
    clearList,
    alert,
  } = useGlobalContext();

  return (
    <form className='form' onSubmit={handleSubmit}>
      <div className='form__alert'>{alert.show && <Alert />}</div>

      <h2 className='form__title'>Todo App</h2>
      <div className='form__control'>
        <input
          type='text'
          className='form__input'
          placeholder='...'
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button type='submit' className='form__btn'>
          {isEditing ? "Edit" : "Add"}
        </button>
      </div>
      {children}
      {list.length > 1 && (
        <button className='form__clear' onClick={clearList}>
          Clear Items
        </button>
      )}
    </form>
  );
};

export default React.memo(Form);
