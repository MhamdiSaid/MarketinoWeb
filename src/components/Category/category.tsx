import ProductCard from "../productCard/productCard";
import "./category.css";
export default function category(){
    return(
        <div className="category-root">
        <div className="category-sub-root">
            <h4>Electronics</h4>
        <div className="category-cart">
            
            <ProductCard width={6}/>
            <ProductCard width={6}/>
            <ProductCard width={6}/>
            <ProductCard width={6}/>
            <ProductCard width={6}/>
            <ProductCard width={6}/>
            </div>
            </div>
        </div>
    )
}