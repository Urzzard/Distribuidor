import logo from '../assets/logo.png'
import user from '../assets/user.png'

export function Navbar(){

    return(
        <div className="navbar">
            <div className='logo-nav'>
                <a href="/">
                    <img src={logo} alt="" />
                </a>
                
            </div>
            <ul>
                <li><a href="/">INICIO</a></li>
                <li><a href="/productos">PRODUCTOS</a></li>
                <li><a href="/nosotros">NOSOTROS</a></li>
            </ul>
            <div className='user-nav'>
                <a href="/login">
                    <img src={user} alt="user--v1"/>
                </a>
                
            </div>
        </div>
    )

}