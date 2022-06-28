import React from "react";
import style from "./ProgressBar.module.scss";

const ProgressBar = ({ loading }) => {
  return (
    <div className="containerPB">
      <div className={style.loader}>
      </div>
    </div>
  );
};

export default ProgressBar;
