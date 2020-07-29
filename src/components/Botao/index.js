import React from "react";


function Botao(props) {
  return (
    <a className={props.className} href={props.href}>
        {props.children}
    </a>
  );
}

export default Botao;
