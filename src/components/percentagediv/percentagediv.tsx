import "./percentagediv.css";
export default function PercentageDiv({width,percentage}){
    return(
        <div style={{"--width":`${width}rem`}} className="percentage-div">
        <div style={{"--percent":`${percentage*width}rem`}}className="colored-percentage">

        </div>
        </div>
    );
}