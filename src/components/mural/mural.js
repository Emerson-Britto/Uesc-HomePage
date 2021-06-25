import React, { Component } from "react";

import "./mural.css";

class Mural extends Component {
	render() {
		return (
            <section className="muralUesc">
				<div className="papersNotes" id="note1">
					<h2 className="titleMural">Transparência Emergencial - Covid 19</h2>
					<p className="subTitleMural"><a href="http://www.uesc.br/proad/index.php?item=conteudo_contratacoes-e-aquisicoes.php">Uesc Atende a Lei Federal nº 13.979/20</a></p>
				</div>
				<div className="papersNotes" id="note2">
				    <h2 className="titleMural">Resoluções Consepe</h2>
					<p className="subTitleMural subTitleMura2"><a href="http://www.uesc.br/publicacoes/consepe/03.2021/resolucao_consepe_n__15_2021.pdf">Nº 15/2021 - Sobre Atividades de Pesquisa e Pós-Graduação</a></p>
					<p className="subTitleMural subTitleMura2"><a href="http://www.uesc.br/publicacoes/consepe/02.2021/08.2021.pdf">Nº 08/2021 - Sobre Alterações no Sisu 2021.1</a></p>
				</div>
				<div className="papersNotes" id="note3">
					<h2 className="titleMural" id="titleMural3">Chamada para Artigos</h2>
					<p className="subTitleMural subTitleMura3"><a href="http://www.uesc.br/programa/amana/arquivos/chamada-artigos-revista-dike.pdf">Revista Jurídica Diké</a></p>
				</div>
			</section>
		);
	}
}

export default Mural;