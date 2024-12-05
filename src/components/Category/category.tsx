import ProductCard from "../productCard/productCard";
import "./category.css";
import { useEffect } from "react";
import { useState } from "react";
export default function Category({categories}:any){
    console.log(categories);
    return(
        <div className="category-root">
        {categories.map((cat:any)=>{
            return <CategorySection category={cat.category_name}/>
        })}
        </div>
    )
}

function CategorySection({category}:any){
    const [products,setProducts]=useState([]);
    let url=`http://localhost:3001/stores/helloword/categories/mycategory?n=all`
        useEffect(()=>{
            fetch(url,{
                method:"GET",
                headers:{
                    "Authorization":"Bearer cea02094ade92909e0920d91d59e16ffa1ed675d581275fe56250d4830c9ed5910fab49d1cccc99329e53ae1559595fff7c23370e9580c7f59587853"
                  }            
            }).then((res)=>{
              return res.json();
            }).then((products:any)=>{
                console.log("hellow")
                setProducts(products)
            }
            );
        },[]);
    console.log(products);
    return(
        <div className="category-sub-root">
            <h4>{category}</h4>
        <div className="category-cart">
            { products.map((product:any)=>{
                return <ProductCard width={6} product={product}/>
            })}
            
            </div>
            </div>
    );
}