import "./addrate.css";
import RatingBar from "../ratingBar/ratingBar";
import { useEffect, useState ,useRef} from "react";

// the my review object type:
type myreviewType={
  firstname: string,
lastname: string,
rating:number, 
review: string,
userid:number 
};
// myreviewType values pattern for user input verification:
const reviewformat={
  rating:/^([0-4](\.[0-9]+)?|5)$/,
  review:/(.|\n)*/,
};
//verify user inuput 
function verify(userinput:{[index:string]:any},inputformat:{[index:string]:any}){
  console.log(userinput)
  for(let input in inputformat){
    console.log(userinput[input])
    
    if(!userinput[input].toString().match(inputformat[input])){
      return false;
    }
  }
  return true;
}

// toast handler
function showToast(text:string,isError:boolean){
          let toastElement:any=document.createElement("div");
            toastElement.innerHTML=toast;
            let toastBody=toastElement.querySelector(".toast-body");
            if(!toastBody){
              console.log("no toast Body! to handle incorrect data format");
              return;
            }
            toastElement=toastElement.children[0];
            
            toastBody.innerHTML=text;;
            let removeButton=toastElement.querySelector("button");
            let liveToast=toastElement.querySelector("#liveToast");
            if(isError){
            liveToast.style.background="#ff8686";
            }
            removeButton.addEventListener("click",(e)=>{
              if(!e || !e.target)return;
              e.target.closest(".toast-container").remove();
              
            });
            let toasts=document.querySelector(".toasts");
            if(!toasts)return;
           // console.log(toasts);
            
           toasts.append(toastElement);


           
            return;
}
// Toast jsx:
const toast=`
<div class="toast-container  p-3" style="position:relative">
  <div id="liveToast" style="display:block" class="toast" role="alert" aria-live="assertive" aria-atomic="true">
    <div class="toast-header">
      <img src="..." class="rounded me-2" alt="...">
      <strong class="me-auto">Marketino</strong>
      <small>just now</small>
      <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
    </div>
    <div class="toast-body">
        Review updated sucessfully!
    </div>
  </div>
</div>
`;
export default function AddRate({review,setProduct}:{review:myreviewType}){
  let isupdate=useRef(false);
      // we will let the te user review as a state, to allow user to update
      // its own review
        let [myreview,setMyReview]=useState<myreviewType | undefined>(undefined);
       // in the first render assign the reviw prop to the myreview statevaribale:

        if(myreview===undefined){
          myreview=review;
          
        }
       
        //the review data to store
        let data=new URLSearchParams(myreview).toString();
        console.log(data);
      
    // add Review to the database handler
        function addReviewHandler(){
          if(!myreview)return;

          if(!verify(myreview,reviewformat)){
            showToast("<b>data format is incorrect<b>",true);
            return false;
            /*let toastElement=document.createElement("div");
            toastElement.innerHTML=toast;
            let toastBody=toastElement.querySelector(".toast-body");
            if(!toastBody){
              console.log("no toast Body! to handle incorrect data format");
              return;
            }
            toastBody.innerHTML="<b>data format is incorrect<b>";
            document.body.append();
            return;*/

          }
        fetch("http://localhost:3001/stores/helloword/products/abdedrahimczaddssddcccssax/review",
            {
              method:"POST",
              headers:{
                'Content-Type': 'application/x-www-form-urlencoded',

                "Authorization":"Bearer cea02094ade92909e0920d91d59e16ffa1ed675d581275fe56250d4830c9ed5910fab49d1cccc99329e53ae1559595fff7c23370e9580c7f59587853"
              },
              body:data
            }
          ).then(res=>{
            res.json();
            if(res.status===200){
              showToast("<b>Created Sucessfully<b>",false);
              isupdate.current=true;
              return true;

            }
            else{
              showToast("<b>Something Wrong<b>",true);
              return false;

            }
          
          }).then(json=>{
            console.log(json);
          });
    };

    // Update Review in the database
        function UpdateReviewHandler(){
         
          if(!myreview)return;

          if(!verify(myreview,reviewformat)){
            
            
              showToast("<b>data format is incorrect<b>",true);
              return false;
            /*
            let toastElement:any=document.createElement("div");
            toastElement.innerHTML=toast;
            let toastBody=toastElement.querySelector(".toast-body");
            if(!toastBody){
              console.log("no toast Body! to handle incorrect data format");
              return;
            }
            toastElement=toastElement.children[0];
            
            toastBody.innerHTML="data format is incorrect";
            let removeButton=toastElement.querySelector("button");
            let liveToast=toastElement.querySelector("#liveToast");
            liveToast.style.background="#ff8686";
            removeButton.addEventListener("click",(e)=>{
              if(!e || !e.target)return;
              e.target.closest(".toast-container").remove();
              
            });
            let toasts=document.querySelector(".toasts");
            if(!toasts)return;
            console.log(toasts);
            
           toasts.append(toastElement);


           
            return;*/

          }

        fetch("http://localhost:3001/stores/helloword/products/abdedrahimczaddssddcccssax/review",
            {
              method:"PUT",
              headers:{
                'Content-Type': 'application/x-www-form-urlencoded',

                "Authorization":"Bearer cea02094ade92909e0920d91d59e16ffa1ed675d581275fe56250d4830c9ed5910fab49d1cccc99329e53ae1559595fff7c23370e9580c7f59587853"
              },
              body:data
            }
          ).then(res=>{
            if(res.status==200){
              showToast("<b>Updated Sucessfully<b>",false);
              isupdate.current=true;
              return true;


            
          }else{
             
                showToast("<b>Something Wrong!<b>",true);
                return false;
               
          }}).then(json=>{
            console.log(json);
            
          });
    };
    // the return jsx:
   
    return(
        <div className="add-rate">
            <RatingBar key={myreview.rating} uniquenumber={0} width={15} ratingprop= {myreview.rating} margin={0.9}/>
            <div className="add-rating">
              <input type="text" value={myreview==null?0: myreview.rating} onChange={(e)=>{
               if(e.target.value===""){
                setMyReview({...myreview,rating:e.target.value});

                e.target.style.border="0.1rem solid black";
              

               }
              else if(e.target.value.match(/^(((0)*[0-4](\.[0-9]+)?)|5)$/)){
                  e.target.style.border="0.1rem solid black";

                    setMyReview({...myreview,rating:parseFloat(e.target.value)});
                  }
                else{
                  e.target.style.border="0.15rem solid red";
                  let futureMyReview:myreviewType={...myreview,rating:e.target.value};
                 
                  setMyReview(futureMyReview);
                  
                }
                  
              }}  />
              <p> <b>Of 5</b></p>
            </div>
            
            <textarea onChange={(e)=>{
              setMyReview({...myreview,review:e.target.value});
            }}>
            {myreview==undefined || myreview.review}
            </textarea>
            <div className="rate"
            onChange={(e)=>{
              setMyReview({...myreview,review:e.target.value})
            }}
            onClick={(e)=>{
              if(myreview===undefined){
                 addReviewHandler();
                 if(isupdate){
                  setProduct((proxy)=>{
                    proxy.reviews.push(myreview)
                  })
                }
              }
              else{
                UpdateReviewHandler();
                if(isupdate){
                  setProduct(proxy=>{
                    let index=proxy.reviews.findIndex((currentValue,index,)=>{
                      if(currentValue.userid===3){
                        return true;
                      }
                      else return false;
                    });
                    proxy.reviews[index]=myreview;
                  });
                }
              }
              
               
            }}>
                <p>{myreview===undefined?"Add":"Update"} Review</p>
            </div>

        </div>
    )
}