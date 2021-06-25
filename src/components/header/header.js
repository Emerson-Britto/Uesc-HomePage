/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import "./header.css";

class Header extends Component {
	render() {
		return (
			<section className="box_header">
				<ul className="optionsOnHeader">
					<li><a className="options">A UESC</a></li>
					<li><a className="options">Estrutura Organizacional</a></li>
					<li><a className="options">Serviços</a></li>
					<li><a href="http://www.uesc.br/cursos/graduacao" className="options">Graduação</a></li>
					<li><a href="http://www.uesc.br/cursos/pos_graduacao" className="options">Pós-Graduação</a></li>
					<li><a href="http://www.uesc.br/fale_conosco" className="options">Fale-Conosco</a></li>
				</ul>
			</section>
		);
	}
}

export default Header;
