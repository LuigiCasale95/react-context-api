/* Import Link */
import { Link } from "react-router-dom"

const  CardProdotto = (props) => {
    
    const {src, title, price , id} = props

    return (
        
        <div className="card cardMod d-flex shadow p-3 mb-5 bg-white rounded" >
            
                <img className="imgM img-fluid" src={src} class="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title"> {title} </h5>
                    
                    <span> <i class="fa-solid fa-euro-sign"></i> {price} </span>
                </div>
                
            <Link to={`/Products/${id}`} >VISUALIZZA IN DETTAGLIO</Link>
        </div>

    )
}

export default CardProdotto