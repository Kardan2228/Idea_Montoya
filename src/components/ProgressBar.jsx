import React from "react";
import style from './ProgressBar.module.scss'

const ProgressBar = ({loading}) => {
    return (
          <div className={style.txtInf}>{loading && 'Cargando la información...'}</div>
    )
  }
  
  export default ProgressBar;