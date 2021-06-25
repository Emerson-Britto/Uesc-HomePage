/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import CircleBlur from './circleBlur';
import "./uesctv.css";

class UescTv extends Component {
    render() {
        return (
            <section className="boxUniverciencia">
                <CircleBlur top={23} left={15} size={60} color={"lightGreen"} opacity={7}/>
                <CircleBlur top={343} left={155} size={60} color={"lightGreen"} opacity={11}/>
                <CircleBlur top={243} left={305} size={80} color={"lightGreen"} opacity={5}/>
                <CircleBlur top={143} left={425} size={30} color={"lightGreen"} opacity={6}/>
                <section className="boxProjectTitle">
                    <h2 id="titleUniverciencia">UniverCiência</h2>
                    <h3 id="subTitleUniverciencia">Saiba mais sobre o Programa</h3>
                    <a><button id="btn_plusInforUniCiencia">Saiba mais</button></a>
                </section>
                <iframe id="videoFrame" width="560" height="315" src="https://www.youtube-nocookie.com/embed/bs2p5lxYgYw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </section>
        );
    }
}

export default UescTv;