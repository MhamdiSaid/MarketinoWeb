import "./productCaracteristics.css";

export default function ProductCaracteristics(){
    return(
        <div className="product-caracteristics row">
        <Caracteristic caracteristic="Color" value="red"/>
        <Caracteristic caracteristic="Caracteristic2" value="red"/>
        <Caracteristic caracteristic="Caracteristic3" value="red"/>
        <Caracteristic caracteristic="Caracteristic4" value="red"/>
        </div>
    );
}
function Caracteristic({caracteristic,value}:{caracteristic:string,value:string}){
    return(
    
        <div className="caracteristic col">
            <p>{caracteristic} : {value}</p>
        </div>
        
    );

}