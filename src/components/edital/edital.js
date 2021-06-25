import React, { Component } from "react";

import "./edital.css";

class Edital extends Component {
	render() {
		return (
            <section className="container_editalUesc">
				<h2 id="titleEdital">EDITAIS</h2>
				<section className="blockMain">
					<div className="contentBlocks">
						<h2 className="titleEdital">Programa de Internacionalização da Uesc</h2>
						<p className="sbtitleEdital">Seleção de Bolsistas - Inscrições de 15 a 19/06 Retificado</p>
					</div>
					<div className="contentBlocks">
						<h2 className="titleEdital">Programa de Apoio ao Ensino de Graduação - Paeg 2021c</h2>
						<p className="sbtitleEdital">Seleção de Bolsistas - Inscrições de 15 a 19/06</p>
					</div>
					<div className="contentBlocks">
						<h2 className="titleEdital">Cursos de Licenciatura EaD - UABc</h2>
						<p className="sbtitleEdital">Seleção de Bolsistas - Inscrições de 15 a 19/06 Retificado</p>
					</div>
					<div className="contentBlocks">
						<h2 className="titleEdital">Programa de Iniciação Científica - Pibic</h2>
						<p className="sbtitleEdital">Seleção de Bolsistas - Inscrições de 15 a 19/06 Retificado</p>
					</div>
					<button id="btn_lookAt_plus">Ver mais</button>
				</section>
			</section>
		);
	}
}

export default Edital;