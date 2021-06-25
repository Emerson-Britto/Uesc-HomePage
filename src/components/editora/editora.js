import React, { Component } from "react"
import Book from './book'

import Book1 from "../../assets/img/book1.jpg";
import Book2 from "../../assets/img/book2.jpg";
import Book3 from "../../assets/img/book3.jpg";
import Book4 from "../../assets/img/book4.jpg";

import iconBook from '../../assets/icons/auto_stories_black_24dp.svg'

import "./editora.css";

class Editora extends Component {

    constructor(){
        super()
        this.listBook = [{ 
        img: `${Book1}`,
        title: 'As serpentes dos cacauais do sudeste da Bahia',
        link: "http://www.uesc.br/editora/livrosdigitais2016/as_serpentes_dos_cacauais_do_sudeste_da_bahia.pdf"},{
        img: `${Book2}`,
        title: 'Métodos e técnicas de pesquisas em bacias hidrográficas',
        link: "http://www.uesc.br/editora/livrosdigitais2018/metodos_tecnicas_bacias.pdf"},{
        img: `${Book3}`,
        title: 'Recuperação Ambiental da Mata Atlântica',
        link: "http://www.uesc.br/editora/livrosdigitais2016/recuperacao_ambiental_da_mata_atlantica_nova.pdf"},{
        img: `${Book4}`,
        title: 'Arquivo 37',
        link: "http://www.uesc.br/editora/livrosdigitais2015/arquivo_37.pdf"}
        ] 
    }

     render(){
        return (
            <section className="containerBooks">
                <section className="boxTitle">
                    <img id="iconBook" src={iconBook}/>
                    <h2 id="titleEditora">Editora Uesc</h2>
                     <a href="http://www.uesc.br/editora/index.php?item=conteudo_livros_digitais.php"><button id="btn_plusViewBooks">Ver mais</button></a>
                </section>
                
                <section className="listBooks">
                    {this.listBook.map((item, index) =>{
                        return (
                            <a href={item.link}><Book key={index} imgBook={item.img} title={item.title} /></a>
                        );
                    })}
           
                </section>
            </section>
        );        
    }

}

export default Editora;