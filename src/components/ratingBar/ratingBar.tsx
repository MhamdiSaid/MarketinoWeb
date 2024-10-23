import "./ratingbar.css";
 function Star({percent,id}:{percent:number,id:string}){
   
    return(
        <div>
        <svg  height="200px" width="200px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 47.94 47.94" xmlSpace="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> 
        <mask id={id}>
      <rect x="0" y="0" width={`${percent*100}%`} height="100%" fill="white" />
      <rect x={`${percent*100}%`} y="0" width={`${100-percent*100}%`} height="100%" fill="grey" />
    </mask>
        <path mask={`url(#${id})`} style={{fill:"#ED8A19"}} d="M26.285,2.486l5.407,10.956c0.376,0.762,1.103,1.29,1.944,1.412l12.091,1.757 c2.118,0.308,2.963,2.91,1.431,4.403l-8.749,8.528c-0.608,0.593-0.886,1.448-0.742,2.285l2.065,12.042 c0.362,2.109-1.852,3.717-3.746,2.722l-10.814-5.685c-0.752-0.395-1.651-0.395-2.403,0l-10.814,5.685 c-1.894,0.996-4.108-0.613-3.746-2.722l2.065-12.042c0.144-0.837-0.134-1.692-0.742-2.285l-8.749-8.528 c-1.532-1.494-0.687-4.096,1.431-4.403l12.091-1.757c0.841-0.122,1.568-0.65,1.944-1.412l5.407-10.956 C22.602,0.567,25.338,0.567,26.285,2.486z">
        
        </path> </g>
       
       </svg>
       </div>
    )
}

export default  function RatingBar({ratingprop,width}:{ratingprop:number,width:number}){
        let rating=ratingprop;
        

        let iconArray=[];
        for(let i=0;i<5;i++){
            
            if(rating >= 1){
              
                iconArray.push(<Star id={`${i}`} key={i} percent={1} />)
            }
            else if(rating>0){
               if(rating===0.25){
                rating=0.40;
               }
            else if(rating===0.75){
                rating=0.6;
               }
                iconArray.push(<Star id={`${i}`} key={100} percent={rating} />);
            }
            else{
             
                iconArray.push(<Star id={`${i}`} key={i} percent={0.0} />);

            }
            rating--;
        }

        return (
            <div className="rating-Bar" style={{"--widthRatingBar":width+"em"} as any}>
            {iconArray}
            </div>
        )


    

}