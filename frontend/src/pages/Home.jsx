import { useState } from "react";
import {logos, productos} from '../assets/imagenes.js';
import { Carrousel } from "../components/Carrousel";
import pdf from "../assets/pdf.png"
import catalogo from "../assets/CatalogoRichitor.pdf"

export function Home(){
    return(
        <div className="home">
            <Carrousel/>
            <div className="sub1">
                <h3>TRABAJAMOS CON LAS MEJORES MARCAS DEL MERCADO..!</h3>
            </div>

            <div className="marcas">
                {Object.keys(logos).map((key) => (
                    <img key={key} src={logos[key]} alt="" />
                ))}
            </div>
            <div className="sub2">
                <h3>Conoce nuestra selección de las bebidas más populares y déjate llevar por el gusto de nuestros clientes</h3>
            </div>

            <div className="prod-home">
                {Object.keys(productos).map((key) => (
                    <div className="pb">
                        <img key={key} src={productos[key]} alt="" />
                    </div>
                ))}
            </div>

            <div className="catalogo">
                <div className="sub3">
                    <h3>DESCUBRE NUESTRO CATÁLOGO DE PRODUCTOS AQUI!!</h3>
                </div>

                <div className="pdf">
                    <div className="cat-pdf">
                        <a href={catalogo}>
                            <img src={pdf} alt="" />
                            <span>CATALOGO - 2024</span>
                        </a>
                    </div>
                    <iframe src={catalogo} title="Catálogo PDF"/>
                </div>
            </div>

            
        </div>
    )
}