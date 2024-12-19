import { Fragment } from "react/jsx-runtime";
import "./ratingbar.css";
import { useEffect } from "react";
 function Star({percent,id,margin}:{percent:number,id:string,margin:number}){
   useEffect(()=>{

    let rect1=document.querySelector(`rect[key="${percent}"]`);
    let rect2=document.querySelector(`rect[key="${percent+10}"]`);
    let parent=rect2?.parentElement;
    rect1?.remove();
    rect2?.remove();
    parent?.append(rect1,rect2);

   })
    return(
        <div className="star-rate" style={{"--margin":`${margin}rem`} as any}>
        <svg  height="200px" width="200px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 47.94 47.94" xmlSpace="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> 
        <mask id={id}>

      <rect key={percent} x="0" y="0" width={`${percent*100}%`} height="100%" fill="white" />
      <rect key={percent+10} x={`${percent*100}%`} y="0" width={`${100-percent*100}%`} height="100%" fill="grey" />
    </mask>
        <path mask={`url(#${id})`} style={{fill:"#ED8A19"}} d="M26.285,2.486l5.407,10.956c0.376,0.762,1.103,1.29,1.944,1.412l12.091,1.757 c2.118,0.308,2.963,2.91,1.431,4.403l-8.749,8.528c-0.608,0.593-0.886,1.448-0.742,2.285l2.065,12.042 c0.362,2.109-1.852,3.717-3.746,2.722l-10.814-5.685c-0.752-0.395-1.651-0.395-2.403,0l-10.814,5.685 c-1.894,0.996-4.108-0.613-3.746-2.722l2.065-12.042c0.144-0.837-0.134-1.692-0.742-2.285l-8.749-8.528 c-1.532-1.494-0.687-4.096,1.431-4.403l12.091-1.757c0.841-0.122,1.568-0.65,1.944-1.412l5.407-10.956 C22.602,0.567,25.338,0.567,26.285,2.486z">
        
        </path> </g>
       
       </svg>
       </div>
    )
}

export default  function RatingBar({ratingprop,width,margin,uniquenumber}:{ratingprop:number,width:number,margin:number,uniquenumber:number}){
        let rating=ratingprop;
        console.log("_____________");
        console.log(typeof rating)
       
        console.log("__abcddd___________");

        let iconArray=[];
        for(let i=0;i<5;i++){
            
            if(rating >= 1){
              
                iconArray.push(<Star id={`${i+uniquenumber}`} key={rating} percent={1} margin={margin}/>)
            }
            else if(rating>0){
               if(rating===0.25){
                rating=0.40;
               }
            else if(rating===0.75){
                rating=0.6;
               }
                iconArray.push(<Star id={`${i+uniquenumber}`} key={rating} percent={rating} margin={margin}/>);
            }
            else{
             
                iconArray.push(<Star id={`${i+uniquenumber}`} key={rating} percent={0.0} margin={margin}/>);

            }
            rating--;
        }

        return (
            <Fragment >
            <div key={ratingprop}  className="rating-Bar" style={{"--widthRatingBar":width+"em"} as any}>
            {iconArray}
            </div>
            </Fragment>
        )


    

}