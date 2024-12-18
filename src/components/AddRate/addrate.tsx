import "./addrate.css";
import RatingBar from "../ratingBar/ratingBar";
import { useEffect, useState ,useRef} from "react";
export default function AddRate({review}){
    
        let [myreview,setMyReview]=useState(undefined);
       
        if(myreview===undefined){
          myreview=review;
          
        }
        console.log(myreview);
       
    
        //the review data to store
        let data=new URLSearchParams({"review":"@@@@@@@@@@@@@@Good product amazing",rating:"4.6"}).toString();
      
    // add Review to the database
        function addReviewHandler(){

        fetch("http://localhost:3001/stores/helloword/products/abdedrahimczaddssddcccssax/review",
            {
              method:"POST",
              headers:{
                'Content-Type': 'application/x-www-form-urlencoded',

                "Authorization":"Bearer cea02094ade92909e0920d91d59e16ffa1ed675d581275fe56250d4830c9ed5910fab49d1cccc99329e53ae1559595fff7c23370e9580c7f59587853"
              },
              body:data
            }
          ).then(res=>res.json()).then(json=>{
            console.log(json);
          });
    };

    // Update Review in the database
        function UpdateReviewHandler(){

        fetch("http://localhost:3001/stores/helloword/products/abdedrahimczaddssddcccssax/review",
            {
              method:"PUT",
              headers:{
                'Content-Type': 'application/x-www-form-urlencoded',

                "Authorization":"Bearer cea02094ade92909e0920d91d59e16ffa1ed675d581275fe56250d4830c9ed5910fab49d1cccc99329e53ae1559595fff7c23370e9580c7f59587853"
              },
              body:data
            }
          ).then(res=>res.json()).then(json=>{
            console.log(json);
          });
    };
    // the return jsx:
    console.log(">>>>>>>>>>>>>>>>>>>>>>")
  console.log(typeof myreview.rating)
    return(
        <div className="add-rate">
            <RatingBar key={myreview.rating} width={15} ratingprop= {myreview.rating} margin={0.9}/>
            <div className="add-rating">
              <input type="text" value={myreview==null?0: myreview.rating} onChange={(e)=>{
                if(e.target.value.match(/^(([0-4](\.[0-9]+)?)|5)$/)){
                   e.target.style.border="0.08rem solid black";
                    setMyReview({...myreview,rating:parseFloat(e.target.value)});
                    console.log("||||||||||||||||||||")
                    console.log({...myreview,rating:parseFloat(e.target.value)});
                    console.log("||||||||||||||||||||")
                  }
                else{
                  e.target.style.border="0.11rem solid red";
                  let rev={...myreview,rating:e.target.value};
                  console.log(rev);
                  console.log("--------3333333333333333333333------");
                  setMyReview(rev);
                  
                }
                  
              }}  />
              <p> of 5</p>
            </div>
            
            <textarea>
            {myreview==undefined || myreview.review}
            </textarea>
            <div className="rate" onClick={(e)=>{
              if(myreview===undefined){
                 addReviewHandler();
              }
              else{
                UpdateReviewHandler();
              }
               
            }}>
                <p>{myreview===undefined?"Add":"Update"} Review</p>
            </div>

        </div>
    )
}