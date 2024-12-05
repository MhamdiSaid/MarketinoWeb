
import {useRef} from "react";
export default function App(){
    const ref=useRef(null);
    function handle(e){
        console.log("hello");
        ref.current.innerHTML="lll";
        console.log(ref.current);
    }

    return(
        <h1  ref={(node)=>{
            ref.current=node;
            handle(node);
        }}>hello</h1>
    )
}