import './ShoppingCart.css';
export default function ShoppingCart({baseColor,textColor,priceColor}:{baseColor:string,textColor:string,priceColor:string}){

    let variables={"--baseColor":baseColor,"--textColor":textColor,"--priceColor":priceColor};

    return (
        <div style={variables as any}>

            <div className="image">

                <img src="./test.jpeg"/>

            </div>
            <div className="infos">
                

            </div>

        </div>
    );
}