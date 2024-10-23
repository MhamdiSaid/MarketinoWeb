
import "./productCard.css";
import RatingBar from "../ratingBar/ratingBar";
export default function ProductCard({width}:{width:number}){

    return(
        <div className="product-card" >
        <div className="product-img">
            <img src="/test.jpeg" alt="hello"></img>
        </div>
        <div className="infos">
            <p>hello word brother productt infinidty dhoom</p>
            <div className="rating-section">
                <RatingBar  ratingprop={4.5} width={10}/>
                <p>(2999)</p>
            </div>
            <div  className="price-div-parent">
            <div  className="price-div">
                <p className="original-price">$100000</p>
                <p className="promotion-price">$1000</p>

            </div>
            </div>
            </div>
        </div>
        
        
    )
}