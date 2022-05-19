import React, { createContext, useContext, useEffect, useState } from "react";

//? Get List From LocalStorage
const getLocalStorage = () => {
  let list = localStorage.getItem("list");
  if (list) {
    return (list = JSON.parse(localStorage.getItem("list")));
  } else {
    return [];
  }
};

const AppContext = createContext();

const AppProvider = ({ children }) => {
  //? States
  const [todo, setTodo] = useState("");
  const [list, setList] = useState(getLocalStorage());
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);
  const [alert, setAlert] = useState({ show: false, msg: "", type: "" });

  //? Handlers

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!todo) {
      showAlert(true, "danger", "please enter value");
    } else if (todo && isEditing) {
      setList(
        list.map((item) => {
          if (item.id === editID) {
            return { ...item, title: todo };
          }
          return item;
        })
      );
      setTodo("");
      setEditID(null);
      setIsEditing(false);
      showAlert(true, "success", "value changed");
    } else {
      showAlert(true, "success", "item added to the list");
      const newItem = { id: new Date().getTime().toString(), title: todo };

      setList([...list, newItem]);
      setTodo("");
    }
  };

  //? Alert Function
  const showAlert = (show = false, type = "", msg = "") => {
    setAlert({ show, type, msg });
  };

  const clearList = () => {
    showAlert(true, "danger", "empty list");
    setList([]);
  };
  const removeItem = (id) => {
    showAlert(true, "danger", "item removed");
    setList(list.filter((item) => item.id !== id));
  };
  const editItem = (id) => {
    const specificItem = list.find((item) => item.id === id);
    setIsEditing(true);
    setEditID(id);
    setTodo(specificItem.title);
  };

  //? Set List on LocalStorage
  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);

  return (
    <AppContext.Provider
      value={{
        handleSubmit,
        todo,
        setTodo,
        isEditing,
        list,
        clearList,
        removeItem,
        editItem,
        alert,
        showAlert,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

//? Costum Hook
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export default AppProvider;
