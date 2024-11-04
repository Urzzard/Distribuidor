import { useState } from "react";
import pepsi from "../assets/carrousel/pepsi-carrusel.png"
import sevenup from "../assets/carrousel/7up-carrusel3.png"
import gatorade from "../assets/carrousel/gatorade-carrusel2.png"
import sancarlos from "../assets/carrousel/sancarlos-carrusel.png"
import jhonnie from "../assets/carrousel/jhonnie-carrusel2.png"


export function Carrousel(){
    return(
        <div className="carousel-container">
            <div className="carousel">
                <img src={pepsi} alt="" />
                <img src={sevenup} alt="" />
                <img src={gatorade} alt="" />
                <img src={sancarlos} alt="" />
                <img src={jhonnie} alt="" />
            </div>
        </div>
    )
}