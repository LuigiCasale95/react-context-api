/* Import parte di componenti di navigazione per  ROUTING*/
import { Link, NavLink } from "react-router-dom"

const  Navbar = () => {
    
    
    return (
    <>
    <div className="navBarMod p-1 border-secondary rounded-pill mt-2">
        <ul className="d-flex justify-content-center gap-4 p-1">
            <li><NavLink to="/" className="nav-link p-2 border-secondary rounded-pill">Home</NavLink></li>
            <li><NavLink to="/Products" className="nav-link p-2 border-secondary rounded-pill" >Prodotti</NavLink></li>
            <li><NavLink to="/ChiSiamo" className="nav-link p-2 border-secondary rounded-pill" >Chi Siamo</NavLink></li>
        </ul>
    </div>
    </>
    )
}

export default Navbar