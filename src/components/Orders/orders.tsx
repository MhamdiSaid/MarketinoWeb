import "./orders.css";
import {useEffect,useState} from "react";

// return a table of theuser orders:

export default function Orders({setShowOrders}:{setShowOrders:(arg:boolean)=>void}){
    console.log(setShowOrders)
    console.log("_________zzzzzzzzzzzz________")
    let [orders,setOrders]=useState(null);
        useEffect(()=>{
            let url="http://localhost:3001/order";

            fetch(url,{
                headers:{
                    "Authorization":"Bearer cea02094ade92909e0920d91d59e16ffa1ed675d581275fe56250d4830c9ed5910fab49d1cccc99329e53ae1559595fff7c23370e9580c7f59587853"
                  }
            }).then(res=>res.json()).then(json=>{
                console.log(json);
                setOrders(json);
            });
        },[]);
        if(orders==null)return;

        // remove modal handler:
        let removeModal=(e)=>{
            let modal=document.querySelector(".modal");
            if(modal){
                console.log(setShowOrders)
                console.log("_________________")
                setShowOrders(false);

                    modal.remove();
                    

            }else{
                console.log("modal doent exist");
            }
        }

    return (
       <>
                
            <div className="modal fade order-div" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-scrollable">
                <div className="modal-content">
                <div className="modal-header">
                    <h1 className="modal-title fs-5" id="staticBackdropLabel">Modal title</h1>
                    <button type="button" 
                    onClick={(e)=>{
                        removeModal(e);
                    }
                    }
                    className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                <table  >
                    <thead>
                        <tr>
                            <th>Product Name</th>
                            <th>Store</th>
                            <th>order date</th>
                            <th>quantity</th>
                            <th>status</th>
                            <th>Edit the order</th>
                            </tr>
                    </thead>
                    <tbody>
                    {
                    // return a row for each order 
                    orders.map((order,index)=>{
                        let date=new Date(order.order_date);
                        return(
                            <>
                            <tr>
                                <td>{order.productname}</td>
                                <td>{order.storename}</td>
                                <td>{date.getDay()},{date.getMonth()},{date.getFullYear()} {date.getHours()}:{date.getMinutes()}</td>
                                <td>{order.quantity}</td>
                                <td>{order.shipping_status}</td>
                                <td>Cancel the Order</td>
                            </tr>
                            </>
                        )
                    })}
                        
                    </tbody>


                    </table>
                </div>
                <div className="modal-footer">
                    <button type="button" 
                    onClick={(e)=>{
                        removeModal(e);
                    }
                    }
                    className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    
                </div>
                </div>
            </div>
            </div>
       
       </>
    )
}

/*

 <>
        <div className="order-root">
        <div className="order-div  modal-dialog modal-dialog-scrollable">
            <div className="exit-div">
            </div>
        <div className="table-div  modal-dialog modal-dialog-scrollable">
        <table  >
        <thead>
            <tr>
                <th>Product Name</th>
                <th>Store</th>
                <th>order date</th>
                <th>quantity</th>
                <th>status</th>
                <th>Edit the order</th>
                </tr>
        </thead>
        <tbody>
           {
           // return a row for each order 
           orders.map((order,index)=>{
            let date=new Date(order.order_date);
            return(
                <>
                 <tr>
                    <td>{order.productname}</td>
                    <td>{order.storename}</td>
                    <td>{date.getDay()},{date.getMonth()},{date.getFullYear()} {date.getHours()}:{date.getMinutes()}</td>
                    <td>{order.quantity}</td>
                    <td>{order.shipping_status}</td>
                    <td>Edit the order</td>
                 </tr>
                </>
            )
           })}
            
        </tbody>


        </table>
        </div>
        </div>
        </div>
        </>

*/