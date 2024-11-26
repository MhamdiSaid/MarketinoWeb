import  "./reviews.css";


export default function Reviews(){
    return(
        <div className="reviews">
        <div className="reviews-header">
            <p>Customer Reviews</p>
           
            
        </div>
        <div className="customer-reviews-root">
        <div className="customer-reviews">
                <Review/>
                <Review/>
                <Review/>
                <Review/>
                <Review/>
                <Review/>
                <Review/>
                <Review/>
           
     
        </div>
        </div>
        </div>
    )
    
}
function Review(){
    return(
        <div className="review">
            <div className="reviewer-avatar">
                <img src="./avatar.svg"/>
                </div>
                <p className="reviewer-name">Mhamdi said</p>
                <p className="review-text">
                shokran ssshor cc
                </p>

       

        </div>
    )
}