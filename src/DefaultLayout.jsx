import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar"

/* import delle pagine di riferimento */
import Home from './pages/Home'
import ChiSiamo from './pages/ChiSiamo'
import Products from './pages/Products'

const  DefaultLayout = () => {
    
    
    return (
        <>
            <header>
                <Navbar/>
            </header>

            <main>
                <Outlet/>
            </main>
        </>
    )
}

export default DefaultLayout