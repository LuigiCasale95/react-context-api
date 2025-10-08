import { createContext, useState, useEffect , useContext, Children } from "react"

const BudgetContext = createContext();

/* componente di creazione provaider */
const BudgetProvider = () => {

    return ( <BudgetContext.Provider
        value={{
            count,
            setCount,

        }}
        >

            {Children}
        </BudgetContext.Provider>
    )
}


















/* const  BudgetContext = () => {
    Use state per il ritorno del valore booleano
    const [budgetMode, setBudgetMode] = useState(false)

    Funzione per il cambio valore
    const toggleBudgetMode = () => {
    setBudgetMode((prev) => !prev);
    };

    
    
    return (
        <p>BudgetProdget</p>
    )
}

export default BudgetContext */