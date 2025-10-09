import { useState, useEffect } from "react"

import axios from "axios"

import { useContext } from "react"
import { BudgetContext } from "../Context/BudgetContext"

/* Import component */
import CardProdotto from "../components/Card"

const  Products = () => {

    const {budgetMode , setBudgetMode} = useContext(BudgetContext)

    const [prodotto, setProdotto] = useState([]) /* Si setta l'useState */


    const budgetFiltered = budgetMode ? prodotto.filter(prodotto => prodotto.price <= 30) : prodotto;


    useEffect(() => {

        axios.get("https://fakestoreapi.com/products") /* Al caricamento della pagina si ottiene il valore del 'api */
        .then((res) => setProdotto(res.data)
        )

    }, [] )
    
    
    return (
    <>
    <div className="row row2 align-content-stretch justify-content-center containerMy p-4">
        <h2>I prodotti disponibili:</h2>
        {budgetFiltered.map((prodotto) => (
            <CardProdotto
            key={prodotto.id} 
            id={prodotto.id}
            title={prodotto.title}
            src={prodotto.image}
            price={prodotto.price}
            />
        ))}
    </div>
    </>
    )
}

export default Products