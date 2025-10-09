/* Import parte di componenti di navigazione per  ROUTING*/
import { Link, NavLink } from "react-router-dom"

import { useContext } from "react"

import { BudgetContext } from "../Context/BudgetContext"

const  Navbar = () => {

    const {budgetMode, setBudgetMode} = useContext(BudgetContext)
    
    
    return (
    <>
    <div className="navBarMod p-1 border-secondary rounded-pill mt-2">
        <ul className="d-flex justify-content-center gap-4 p-1">
            <li><NavLink to="/" className="nav-link p-2 border-secondary rounded-pill">Home</NavLink></li>
            <li><NavLink to="/Products" className="nav-link p-2 border-secondary rounded-pill" >Prodotti</NavLink></li>
            <li><NavLink to="/ChiSiamo" className="nav-link p-2 border-secondary rounded-pill" >Chi Siamo</NavLink></li>
            <li><button className="buttonBudget nav-link p-2 border-secondary rounded-pill" onClick={() => setBudgetMode(!budgetMode)}>
                {budgetMode ? "Disattiva modalità budget" : "Attiva modalità budget"}
                </button></li>
        </ul>
    </div>
    </>
    )
}

export default Navbar