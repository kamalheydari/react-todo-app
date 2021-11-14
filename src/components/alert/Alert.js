import React, { useEffect } from "react";
import { useGlobalContext } from "../../context/context";

import "./alert.scss";

const Alert = () => {
  const { alert, showAlert, list } = useGlobalContext();

  useEffect(() => {
    const timeout = setTimeout(() => {
      showAlert();
    }, 3000);
    return () => clearTimeout(timeout);
  }, [list, showAlert]);

  return <p className={`alert alert-${alert.type}`}>{alert.msg}</p>;
};

export default Alert;
