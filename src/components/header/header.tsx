import Icon from "../icon/icon.tsx";
import Logo from "../Logo/logo.tsx";
import SearchBar  from "../searchbar/searchbar.tsx";
import "./header.css"
import ReactDOM from "react-dom/client";
import Orders from "../Orders/orders.tsx";
export default function Header(){


    function showOrders(e:object,isOrder:boolean){
        document.body.style.overflow = "hidden";
        let root_div=document.querySelector(".fixedpos");
        if(root_div!==null){

            let root =ReactDOM.createRoot(root_div);
            root.render(<Orders/>);
        }else{
            console.log("error root ==null");
        }


    }


    return(
        <div className="header">
                <div className="logo-storeName">
                <Logo width={3} height={3} src="test.jpeg"/>
                <h3 >Marketino</h3>
                </div>
                <SearchBar  widthValue={15} />
                <div className="orders-card">
                    
                    <p onClick={
                        (e)=>{
                            showOrders(e,false);
                        }
                    }>Orders</p>
                    <div className="dividor"></div>
                    <Icon width={2} avatar="card"></Icon>
                    <p className="card-name">Card</p>
                    <div className="card-count">
                    <p >5</p>
                    </div>
                    
                </div>
                <div className="user-icon">
                <div className="social">
                    <Icon width={2} avatar="instagram"></Icon>
                    <Icon width={2} avatar="x"></Icon>
                    <Icon width={2} avatar="facebook"></Icon>
                    <Icon width={2} avatar="send"></Icon>

                </div>
                    <Icon width={2.8} avatar="avatar"/>
                </div>

        </div>
    );

}