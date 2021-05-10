import React from "react";
import "../assets/sass/index.scss";

import ContentAssignment from "../components/ContentAssignment";

export default props => {
    return(
        <div className="app">
            <header className="header-application">
                <p>Tarefas</p><small>Cadastro</small>
            </header>
            <ContentAssignment />
        </div>
    )
}