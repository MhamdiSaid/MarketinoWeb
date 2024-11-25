
import "./productCard.css";
import RatingBar from "../ratingBar/ratingBar";
export default function ProductCard({width}){

    return(
        <div className="product-card" >
        <div className="product-img">
            <img src="/test.jpeg" alt="hello"></img>
        </div>
        <div className="infos">
            <div className="product-desc">
            <p>A Beautifull Watch</p>
            </div>
            <div className="rating-section">
                <RatingBar  ratingprop={4.5} width={6}/>
                <p>(2999)</p>
            </div>
            
            <div  className="price-div">
                <p className="original-price">$100000</p>
                <p className="promotion-price">$1000</p>

            </div>
         
            </div>
        </div>
        
        
    )
}