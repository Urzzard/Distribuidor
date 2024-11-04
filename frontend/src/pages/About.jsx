import banner from "../assets/promo.png"
import cambio from "../assets/nuevo.png"
import "./About.css"

export function About(){
    return(
        <div className="about">
            
            <div className="a-tittle">
                <h2>¿QUIENES SOMOS?</h2>
            </div>
            <div className="text">
                <img src={cambio} alt="" />
                <div className="img-text">
                    <p>
                        Distribuciones Richitor , empresa distribuidora de bebidas del portafolio de CBC PERÚ, somos distribuidores en Huánuco, Tingo María y Cerro de Pasco.
                    </p>
                    
                    <p>
                        Ya son 9 años qué venimos llevando las mejores bebidas gracias a nuestro clientes. Nueve años en los que aprendimos que no todo es rapidez, sino también calidad y eficiencia.
                    </p>

                    <p>
                        Y hoy queremos que seas parte de nuestro gran cambio; con el cual no solo queremos refrescar nuestra imagen, sino también la alegría que sienten nuestros clientes con nuestro buen servicio.
                    </p>
                </div>
                

                
            </div>

            <div className="a-video">
                <div className="text-video">
                    <p>
                    Con mucha emoción hoy queremos presentarles a parte de los miembros de nuestra familia de 𝗥𝗶𝗰𝗵𝗶𝘁𝗼𝗿 𝗗𝗶𝘀𝘁𝗿𝗶𝗯𝘂𝗰𝗶𝗼𝗻𝗲𝘀 - Sede Huánuco. Quienes merecen ser reconocidos por su esfuerzo, compromiso y dedicación diaria. 
                    </p>
                    <p>
                    Queremos que sepan que cada uno de ustedes, son un pilar fundamental para el éxito de nuestra empresa, ya que todos los días se ponen la camiseta para estar comprometidos con nuestros clientes, brindándoles siempre la amabilidad y el buen trato que compartimos toda la familia de 𝗥𝗶𝗰𝗵𝗶𝘁𝗼𝗿.
                    </p>
                </div>
                
                
            
                <iframe src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1061925972321766%2F&show_text=false&width=267&t=0" scrolling="no" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" ></iframe>
            </div>
            

            <div className="a-end">
                <h2>¡REFRESCANDO MOMENTOS!</h2>
            </div>
            <div className="banner">
                <img src={banner} alt="" />
            </div>

        </div>
    )
}