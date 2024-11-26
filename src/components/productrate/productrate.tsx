import "./productrate.css";
import PercentageDiv from "../percentagediv/percentagediv.tsx";
import RatingBar from "../ratingBar/ratingBar.tsx";
import AddRate from "../AddRate/addrate.tsx";
export default function ProductRate(){
    return(
       
        <div className="product-rate-root">
        <div className="product-rate">
            <div className="rating-bar-product-rate">
            <RatingBar ratingprop={2.5} width={6} margin={0}/>
            <p>2.5 of 5</p>
            </div>
            <p>66,5858 global ratings</p>
            <div className="product-rate-add-percentage">
            <div>
            <div className="percentage-bar">
                <p className="nbre-star-percentage-bar">5 star</p>
                <PercentageDiv width={18} percentage={1}/>
                <p>100%</p>

            </div>
            <div className="percentage-bar">
                <p className="nbre-star-percentage-bar">4 star</p>
                <PercentageDiv width={18} percentage={0.8}/>
                <p>80%</p>

            </div>
            <div className="percentage-bar">
                <p className="nbre-star-percentage-bar">3 star</p>
                <PercentageDiv width={18} percentage={0.5}/>
                <p>60%</p>

            </div>
            <div className="percentage-bar">
                <p className="nbre-star-percentage-bar">2 star</p>
                <PercentageDiv width={18} percentage={0.4}/>
                <p>40%</p>

            </div>
            <div className="percentage-bar">
                <p className="nbre-star-percentage-bar">1 star</p>
                <PercentageDiv width={18} percentage={0.2} />
                <p>20%</p>

            </div>
            </div>
           
            
            </div>
        </div>
       
        <AddRate/>
        
        </div>
    )
}