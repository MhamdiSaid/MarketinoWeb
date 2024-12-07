import "./productrate.css";
import PercentageDiv from "../percentagediv/percentagediv.tsx";
import RatingBar from "../ratingBar/ratingBar.tsx";
import AddRate from "../AddRate/addrate.tsx";
let predicate=function(rating_target,rating){
    if(rating_target <= rating && rating<(rating_target+1)){
        return true;
    };
}
export default function ProductRate({reviews}){
    console.log("---l---");
    console.log(reviews)
    console.log("---l---");
    let total_revs=reviews.length;
    let five=reviews.filter((obj)=>{
          let  rating=parseFloat(obj.rating);
          if(rating===5)return true;
          else return false;
    });
  
    let four=reviews.filter((obj)=>{
        let  rating=parseFloat(obj.rating);
        return predicate(4,rating)
    })
    let three=reviews.filter((obj)=>{
        let  rating=parseFloat(obj.rating);
        return predicate(3,rating);
    })
    let two=reviews.filter((obj)=>{
        let  rating=parseFloat(obj.rating);
        return predicate(2,rating);
    });
    let one=reviews.filter((obj)=>{
        let  rating=parseFloat(obj.rating);
        return predicate(2,rating);
    });
    console.log("\\\\\\\\")
    console.log(five);
    console.log(total_revs)
    let ttlrating=reviews.reduce((acc,currentobj)=>{
        
        return acc+parseFloat(currentobj.rating);
    },0);
    let average_rating=ttlrating/total_revs;

    return(
       
        <div className="product-rate-root">
        <div className="product-rate">
            <div className="rating-bar-product-rate">
            <RatingBar ratingprop={average_rating} width={6} margin={0}/>
            <p>{average_rating} of 5</p>
            </div>
            <p>{total_revs} global ratings</p>
            <div className="product-rate-add-percentage">
            <div>
            <div className="percentage-bar">
                <p className="nbre-star-percentage-bar">5 star</p>
                <PercentageDiv width={18} percentage={(five.length)/total_revs}/>
                <p>{(five.length)*100/total_revs}%</p>

            </div>
            <div className="percentage-bar">
                <p className="nbre-star-percentage-bar">4 star</p>
                <PercentageDiv width={18} percentage={(four.length)/total_revs}/>
                <p>{(four.length)*100/total_revs}%</p>

            </div>
            <div className="percentage-bar">
                <p className="nbre-star-percentage-bar">3 star</p>
                <PercentageDiv width={18} percentage={(three.length)/total_revs}/>
                <p>{(three.length)*100/total_revs}%</p>

            </div>
            <div className="percentage-bar">
                <p className="nbre-star-percentage-bar">2 star</p>
                <PercentageDiv width={18} percentage={(two.length)/total_revs}/>
                <p>{(two.length)*100/total_revs}%</p>

            </div>
            <div className="percentage-bar">
                <p className="nbre-star-percentage-bar">1 star</p>
                <PercentageDiv width={18} percentage={(one.length)/total_revs} />
                <p>{one.length*100/total_revs}%</p>

            </div>
            </div>
           
            
            </div>
        </div>
       
        <AddRate/>
        
        </div>
    )
}