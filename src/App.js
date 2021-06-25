import React, { Component } from "react";
import Header from "./components/header/header";
import Banner from "./components/banner/banner";
import Destaques from "./components/destaques/destaques";
import Mapa from "./components/mapa/mapa";
import Edital from "./components/edital/edital";
import Mural from "./components/mural/mural";
import UescTv from "./components/uesctv/uesctv"
import Editora from "./components/editora/editora"

import "./assets/App.css";
import './assets/reset.css';

class App extends Component {
	render() {
		return (
			<section>
				<Banner/>
				<section className="dest_and_map">
					<Destaques/>
					<Mapa/>					
				</section>
				<section className="centralizeContainer box_uesctv">
					<UescTv/>					
				</section>
				<section className="mural_and_edital">
					<Edital/>
					<Mural/>					
				</section>
				<section className="centralizeContainer editoraUesc">
					<Editora/>					
				</section>
			</section>
		);
	}
}

export default App;

//<main/>
//<parceiros/>
//<footer/>