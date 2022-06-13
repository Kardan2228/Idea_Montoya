import React from "react";
import style from './ProgressBar.module.scss'

const ProgressBar = ({loading}) => {
    return (
      <div className={style.containerPreloud}>
          <div className={style.txtInf}>{loading && 'Cargando la información...'}</div>
      </div>
    )
  }
  
  export default ProgressBar;