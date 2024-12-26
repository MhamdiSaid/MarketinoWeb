import "./orders.css";
import {useEffect,useState} from "react";

// return a table of theuser orders:

export default function Orders(){
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
    return (
        <>
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
        
        </>
    )
}