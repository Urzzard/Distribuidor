import phone from '../assets/phone.png'
import link from '../assets/link.png'
import location from '../assets/location.png'
import fb from '../assets/fb.png'
import almacen from '../assets/almacen.png'

export function Footer(){
    return(
        <div className="footer">
            <div className="info">
                <h4>COMPAÑIA DE DISTRIBUCIONES RICHITOR & L S.C.R.L</h4>
                <h5>Cia de Distribuciones R&l</h5>
            </div>
            <div className="sociales">
                <div className='location'>
                    <img src={location} alt="" />
                    <span>Pj. Primavera Mza. a Lote. 4 (Ex Fundo Zevallos-Costado del Grifo Delt)</span>
                </div>
                <div className='number'>
                    <img src={phone} alt="" />
                    <span>+51 924 444 550</span>
                </div>
                <div className='fb'>
                    <img src={fb} alt="" />
                    <a href="https://www.facebook.com/CIADRichitor">Distribuciones Richitor</a>
                </div>
                
                <div className='link'>
                    <img src={link} alt="" />
                    <a href="https://linktr.ee/drichitor?fbclid=IwZXh0bgNhZW0CMTAAAR3vZH4gXlUgnneMSG0BgMpBj_Yy22-sY4gzy6GsgpgD_Zo98Mr6Kwd5CFg_aem_m02vX6VCem-8g0jQIO5bog">https://linktr.ee/drichitor</a>
                </div>
                
                <div className='almacen'>
                    <img src={almacen} alt="" />
                    <span>Huánuco - Tingo María - Cerro de Pasco</span>
                </div>

            </div>
            <div className="ubicacion">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1652.449902497017!2d-76.23135679356191!3d-9.916430587248074!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91a7c3518255bb41%3A0xd1b2be0664dc41df!2sRichitor%20Distribuciones!5e0!3m2!1ses-419!2spe!4v1730572007850!5m2!1ses-419!2spe" loading="lazy" ></iframe>
            </div>
        </div>
    )
    
}