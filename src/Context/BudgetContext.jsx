import { createContext, useState, useEffect , useContext } from "react"


const  BudgetContext = () => {


    


      // Funzione per cambiare il valore
  const toggleBudgetMode = () => {
    setBudgetMode((prev) => !prev);
  };

    
    
    return (
        <p>BudgetProdget</p>
    )
}

export default BudgetContext