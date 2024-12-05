import  "./about.css";

export default function About(){
    let array=[["Aboccut me","About me","Abouccct me","About me"],["About me","Accbout me","About me","About me"],["About me","About me","About me","About me"],["About me","About me","About me","About me"]];
    return(
        <div className="footer-about">
        <div className="about">
            <div className="container">
                {array.map((sub_array)=>{
                    return(
                        <div className="row justify-justify-content-between">
                            {sub_array.map((obj)=>{
                                return(
                                    <div className="col">
                                        {obj}
                                    </div>
                   
                                );
                            })}
                </div>
                    );
                })}
            </div>
        </div>
         <div className="separator-line"> </div>
         <div className="developer-infos">
        <div className="made-by-love">
            <p>Made by 😍 with mhamdi said</p>
        </div>
        <div>
            <p>©2024 Copyright in reserved for mhamdi said</p>
        </div>
       
         </div>
         </div>
         
    )
}