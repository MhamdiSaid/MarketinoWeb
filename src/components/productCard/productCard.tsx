
import "./productCard.css";
import RatingBar from "../ratingBar/ratingBar";
import { useEffect } from "react";
export default function ProductCard({width,product}){
       // let {g,setRating}=useEffect([]);
            console.log(product);
       let total_revs=10;
     /*  let ttlrating=product.reviews.reduce((acc,currentobj)=>{
        
        return acc+parseFloat(currentobj.rating);
        },0);&*/
        let ttlrating=12;
        let average_rating=ttlrating/total_revs;
        product.productid=30;
        let images_path=`http://localhost:3001/images/stores/${"helloword"}/products/${product.productid}/`

    return(
        <div className="product-card" >
        <div className="product-img">
            <img src={images_path+"1.svg"} alt="hello"></img>
        </div>
        <div className="infos">
            <div className="product-desc">
            <p>{product.name}</p>
            </div>
            <div className="rating-section">
                <RatingBar  ratingprop={average_rating} width={6} margin={0}/>
                <p>({total_revs})</p>
            </div>
            
            <div  className="price-div">
                <p className="original-price">${product.price}</p>
                <p className="promotion-price">${product.price*product.discount}</p>

            </div>
         
            </div>
        </div>
        
        
    )
}