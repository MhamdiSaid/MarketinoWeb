import  "./reviews.css";

type review_type={firstname:string,lastname:string,rating:string,review:string,userid:string};
export default function Reviews({product}){
    let reviews=product.reviews;
    console.log("llll")
    console.log(reviews);
    return(
        <div className="reviews">
        <div className="reviews-header">
            <p>Customer Reviews</p>
           
            
        </div>
        <div className="customer-reviews-root">
        <div className="customer-reviews">
               {reviews.map((rev)=>{
                console.log("+++++++");
                console.log(rev);
                console.log("+++++++");
                return(<> <Review review={rev} /> </>);
               })}
                
           
     
        </div>
        </div>
        </div>
    )
    
}
function Review({review}){
    
    return(
        <div className="review">
            <div className="reviewer-avatar">
                <img src="./avatar.svg"/>
                </div>
                <p className="reviewer-name">{review.lastname} {review.firstname}</p>

                <p className="review-text">
                {review.review}
                </p>
        </div>
    );
}