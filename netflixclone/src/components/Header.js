import React from "react";
import './Header.css';

export default ({black}) => {
    return(
        <header className={black ? 'black' : ''}>
            <div className="header--logo">
                <a href="/">
                    <img src="https://plataformafasttrade.com.br/wp-content/uploads/2022/04/pre-mercado-americano-opera-em-leve-alta-a-espera-de-balancos-netflix-derrete-1.jpg" alt="Netflix" />
                </a>
            </div>
            <div className="header--user">
                <a href="/">
                    <img src="https://static.vecteezy.com/ti/vetor-gratis/t1/5285091-icone-do-panda-fofo-para-o-logotipo-gr%C3%A1tis-vetor.jpg" alt="Usuário"/>
                </a>
            </div>
        </header>
    );
}