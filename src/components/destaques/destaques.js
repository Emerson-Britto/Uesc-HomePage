import React, { Component } from "react";

import "./destaques.css";

class Destaques extends Component {
    render() {
        return (
            <section>
                <h2 id="titleGridTrends">Destaques </h2>
                <section className="gridTrends">
                    <article className="trends" id="trend1">
                        <p className="titleArticle">Provas já tem datas definidas</p>
                        <p className="btn_plusInfor">Saiba Mais</p>
                    </article>
                    <article className="trends" id="trend2">
                        <p className="titleArticle">Novas Atualizações na Plataforma do SISU</p>
                        <p className="btn_plusInfor">Saiba Mais</p>
                    </article>
                    <article className="trends" id="trend3">
                        <p className="titleArticle">Vacinação contra COVID-19</p>
                        <p className="btn_plusInfor">Saiba Mais</p>
                    </article>
                    <article className="trends" id="trend4">
                        <p className="titleArticle">Nossa Historia - Uesc TimeLine</p>
                        <p className="btn_plusInfor">Saiba Mais</p>
                    </article>
                </section>
            </section>
        );
    }
}

export default Destaques;
