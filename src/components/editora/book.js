import React, { Component } from "react";
import Book1 from "../../assets/img/book1.jpg";

import './book.css'

export default function Book({key, imgBook, title}){
    return(
        <div className="boxBook" key={key}>
            <img id="imgBook" src={imgBook}/>
            <h2 id="titleBook">{title}</h2>
        </div>
    );
}