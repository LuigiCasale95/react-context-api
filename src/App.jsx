import './App.css'
import { useState, useEffect, createContext , useContext } from 'react'

import { BrowserRouter, Routes , Route } from 'react-router-dom'

/* Import componenti */
import Navbar from './components/Navbar'
/* Layout */
import DefaultLayout from './DefaultLayout' /* Pagina di default a cui è importato OUTLET così da poter utilizzare il navbar su tutte le pagine switchando solo il main */

/* import delle pagine di riferimento */
import Home from './pages/Home'
import ChiSiamo from './pages/ChiSiamo'
import Products from './pages/Products'
import PageProduct from './pages/PageProducts'
import ErrorPage from './pages/ErrorPage'

function App() {

  /* Use state per il ritorno del valore booleano */
  const [budgetMode, setBudgetMode] = useState(false)

  /* Funzione per il cambio valore */
    const toggleBudgetMode = () => {
    setBudgetMode((prev) => !prev);
  };

  return (
    <>
    <BrowserRouter> {/* le rotte delle pagine */}
      <Routes>

        <Route element={<DefaultLayout/>}>    {/* pagina di dedault contenente un outlet con il main intercambiabile */}     
          <Route path="/" element={<Home/>} />
          <Route path="/ChiSiamo" element={<ChiSiamo toggleBudgetMode={toggleBudgetMode}/>} /> {/* 3 pagine che sono all'interno di default che si intercambiano al click all'interno del main */}

          <Route path="/Products"> {/* una rotta che contiene altre 2 rotte */}
              <Route path="" element= {<Products/>}/>{/* pagina base dei prodotti */}
              <Route path=':id' element= {<PageProduct/>}/> {/* grazie al id  si andrà ad aprina una pagina dove lo si utilizzerà per richiamare quel determinato elemento di un eventuale api tramite UseParams*/}
          </Route>
          <Route path="*" element={<ErrorPage/>} />   {/* Page in caso di errore */}  
        </Route>

      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App

