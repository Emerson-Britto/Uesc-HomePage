/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import logoUesc from '../../assets/img/BrasãoDaUESC.png';
import iconInfor from '../../assets/img/rss_feed_white_24dp.svg';
import "./banner.css";

class Banner extends Component {
    render() {
        return (
            <section className="banner">
                <section className="box_header">
                    <ul className="optionsOnHeader">
                        <li><a href="http://www.uesc.br/a_uesc/regimento.pdf" className="options">A UESC</a></li>
                        <li><a href="http://www.uesc.br/colegiados/" className="options">Estrutura Organizacional</a></li>
                        <li><a href="https://www.prograd.uesc.br/PortalSagres/" className="options">Portal Acadêmico</a></li>
                        <li><a href="http://www.uesc.br/cursos/graduacao" className="options">Graduação</a></li>
                        <li><a href="http://www.uesc.br/cursos/pos_graduacao" className="options">Pós-Graduação</a></li>
                        <li><a href="http://www.uesc.br/fale_conosco" className="options">Fale-Conosco</a></li>
                    </ul>
                </section>
                
                <img id="brandingBanner" src={logoUesc}></img>
                <section className="box_bannerNotify">
                    <div className="boxNotify">
                        <img className="iconNotify" src={iconInfor}></img>
                        <p className="textNotify">Novo Resultado da Lista de Espera!</p>
                        <a href="http://www.uesc.br/publicacoes/editais/06.2021/061.2021.pdf">
                            <button id="btn_plusInfor">Saiba Mais</button></a>
                    </div>
                </section>
            </section>
        );
    }
}

export default Banner;
