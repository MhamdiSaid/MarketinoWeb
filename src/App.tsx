
import "./App.css";
import {useEffect,useRef,useState} from "react";
import Header from "./components/header/header";
import SellerDashBoardHeader from "./components/sellerdashboardheader/sellerdashboardheader";
import ProductDescription from "./components/productDescription/productDescription";
import ProductRate from "./components/productrate/productrate";
import Reviews from "./components/reviews/reviews";
function App() {
    const [product,setProduct]=useState(null);
  
    useEffect(()=>{
      
      console.log("hey");

      fetch("http://localhost:3001/stores/helloword/products/abdedrahimczaddssddcccssax",
        {
          headers:{
            "Authorization":"Bearer cea02094ade92909e0920d91d59e16ffa1ed675d581275fe56250d4830c9ed5910fab49d1cccc99329e53ae1559595fff7c23370e9580c7f59587853"
          }
        }
      ).then(res=>{
        return res.json();
      }).then(json=>{
        console.log(json);
        setProduct(json);
        
      })
    },[]);

  return (
  
<>
<Header/>
      <SellerDashBoardHeader />
      {product && <ProductDescription product={product}/>}
      
      {product && <ProductRate reviews={product.reviews}/>}

      {product && <Reviews product={product}/>}

     </>
  
  )
}


export default App;
/*

   <Header/>
   <SellerDashBoardHeader />
   <ProductDescription/>
    <ProductRate />
    <Review/>
















     <Header/>
      <SellerDashBoardHeader />
      <ProductDescription url="http://localhost:3001/stores/helloword/products/abdedrahimczaddssddcccssax"/>
      <ProductRate />
      <Review/>
    */
/*
 <>
      <Header/>
      <SellerDashBoardHeader/>
      <Carousel/>
      <Category categories={cat}/>
      <Slogan/>
      <About/>
    

    </>
    */


      /*
  const categories=useRef(null);
  const [cat,setcat]=useState([]);
  let callback:any=()=>{
    let url="http://localhost:3001/stores/helloword/categories?n=all";
    
    fetch(url,{
      method:"GET",
      headers:{
        "Authorization":"Bearer cea02094ade92909e0920d91d59e16ffa1ed675d581275fe56250d4830c9ed5910fab49d1cccc99329e53ae1559595fff7c23370e9580c7f59587853"
      }
 
    }).then((res)=>{
      return res.json();
    }).then((json=>{
      console.log("hello");
      setcat(json);
      console.log(json)
    }));
   
  
    return ()=>{};
    
 } 

  useEffect(callback,[]);
  */