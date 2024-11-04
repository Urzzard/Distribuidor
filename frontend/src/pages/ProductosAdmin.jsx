import inventario from "../assets/inventario2.png"
import lotes from "../assets/inventario1.png"
import movimientos from "../assets/inventario3.png"

export function ProductosAdmin(){
    return(
        <div className="p-admin">
            <div className="p-opciones">
                <div className="po1">
                    <a href="/inventario">
                        <img src={inventario} alt="" />
                        <h4>INVENTARIO</h4>
                    </a>

                </div>
                <div className="po2">
                    <a href="/lotes">
                        <img src={lotes} alt="" />
                        <h4>LOTES DE PRODUCTOS</h4>
                    </a>
                    
                </div>
                <div className="po3">
                    <a href="/movimientos">
                        <img src={movimientos} alt="" />
                        <h4>MOVIMIENTOS DE PRODUCTOS</h4>
                    </a>
                    
                </div>
            </div>
        </div>
    )
}