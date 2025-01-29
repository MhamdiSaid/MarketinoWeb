import "./home.css";
import {useState} from "react";
const validImageTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];

export default function Home(){
    const [inputs,setInputs]=useState({name:["",false],slogan:["",false],favicon:[null,false],cover:[[null,false],[null,false],[null,false]],logo:[null,false],instagram:["",true],facebook:["",true],whatsapp:["",true],twitter:["",true]})
    /**  This state describe the status of the operation:
     * unsubmitted: means the user is not filled yet the form
     * submitted: means the user is submitted the form
     * successful: means the operation is completed sucessfully
     * conflict : means the store name already exist
     * error: means the form data is incorrect
     * valid: the inputs are validated
     * invalid:...
     * 
      */
    const [submitStatus,SetSubmitStatus]= useState("unsubmitted");
    function handleSubmit(e){
       

        let dataform=new FormData();
        console.log("mmm")
        for(let property in inputs){
            if(property==="cover"){
                for(let i=0;i<3;i++){
                    if(inputs.cover[i][1]===false){
                        console.log("error")
                        return;
                    }
                }
                inputs.cover.map((file,index)=>dataform.append(`cover`,file[0]));

            }else{
                if(inputs[property][1]===false){
                    console.log("error");
                    return;}
                dataform.append(property,inputs[property][0]);
            }
        }
       
        fetch("http://localhost:3001/stores/create",{
            headers:{
                "Authorization":"Bearer cea02094ade92909e0920d91d59e16ffa1ed675d581275fe56250d4830c9ed5910fab49d1cccc99329e53ae1559595fff7c23370e9580c7f59587853"

            },
            method:"POST",
            body:dataform
        }).then(res=>{
            if(res.status===200)SetSubmitStatus("successful");
            else if(res.status===409)SetSubmitStatus("conflict");
            else SetSubmitStatus("error");
            return res.json();
        }).then(json=>console.log(json));
        
        
    }
    return(
        <>
            <form className="row g-3 needs-validation">
            <div className="col-md-4">
                    <label htmlFor="validationServerUsername" className="form-label">Store Name</label>
                    <div className="input-group has-validation">
                    <span className="input-group-text" id="inputGroupPrepend3">@</span>
                    <input type="text" className={"form-control "+((inputs.name[1] && submitStatus!=="conflict")?"is-valid":"is-invalid")} id="validationServerUsername" aria-describedby="inputGroupPrepend3 validationServerUsernameFeedback" required
                    value={inputs.name[0]} onChange={(e)=>{
                        if(submitStatus=="conflict")SetSubmitStatus("unsubmitted");
                        let value=e.target.value;
                        setInputs({...inputs,name:[value,value.match(/^[a-zA-Z][a-zA-Z-_0-9]*$/)!==null]});
                    }}
                    />
                    <div id="validationServerUsernameFeedback" className="invalid-feedback">
                        {submitStatus==="conflict"?"name already exist":"Please choose a correct store name."}
                    </div>
                    <div className="valid-feedback">
                    Looks good!
                    </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <label htmlFor="validationServer01" className="form-label">Slogan</label>
                    <input type="text" className={"form-control "+(inputs.slogan[1]?"is-valid":"is-invalid")} id="validationServer01"  required
                     value={inputs.slogan[0]} onChange={(e)=>{
                       // setInputs({...inputs,slogan:e.target.value});
                        let value=e.target.value;
                        setInputs({...inputs,slogan:[value,value.match(/^(.)+$/)!==null]});
                    }}
                    
                    />
                    <div className="valid-feedback">
                    Looks good!
                    </div>
                    <div id="validationServerUsernameFeedback" className="invalid-feedback">
                        Please choose a correct slogan.
                    </div>
                </div>
                <div className="col-md-4">
                    <label htmlFor="validationServer02" className="form-label">Cover 1</label>
                    <input type="file" className={"form-control  form-control-sm "+(inputs.cover[0][1]?"is-valid":"is-invalid")} id="validationServer02"  required
                      onChange={(e)=>{
                        if(e.target.files===null){

                            console.error("no file selected on cover 1");
                            return;
                        }
                        setInputs({...inputs,cover:inputs.cover.map((file,index)=>index===0?[e.target.files[0],validImageTypes.includes(e.target.files[0].type)]:file)});
                    }}
                    />
                    
                    <div className="valid-feedback">
                    Looks good!
                    </div>
                    <div id="validationServerUsernameFeedback" className="invalid-feedback">
                        Please choose a correct file type.
                    </div>
                </div>
                <div className="col-md-4">
                    <label htmlFor="validationServer02" className="form-label">Cover 2</label>
                    <input type="file" className={"form-control  form-control-sm "+(inputs.cover[1][1]?"is-valid":"is-invalid")} id="validationServer02"  required
                     onChange={(e)=>{
                        if(e.target.files===null){
                            console.error("no file selected on cover 1");
                            return;
                        }
                        setInputs({...inputs,cover:inputs.cover.map((file,index)=>index===1?[e.target.files[0],validImageTypes.includes(e.target.files[0].type)]:file)});
                    }}
                    />
                    
                    <div className="valid-feedback">
                    Looks good!
                    </div>
                    <div id="validationServerUsernameFeedback" className="invalid-feedback">
                        Please choose a correct file type.
                    </div>
                </div>
                <div className="col-md-4">
                    <label htmlFor="validationServer02" className="form-label">Cover 3</label>
                    <input type="file" className={"form-control form-control-sm "+(inputs.cover[2][1]?"is-valid":"is-invalid")} id="validationServer02"  required
                     onChange={(e)=>{
                        if(e.target.files===null){
                            console.error("no file selected on cover 1");
                            return;
                        }
                        setInputs({...inputs,cover:inputs.cover.map((file,index)=>index===2?[e.target.files[0],validImageTypes.includes(e.target.files[0].type)]:file)});
                    }}
                    />
                    
                    <div className="valid-feedback">
                    Looks good!
                    </div>
                    <div id="validationServerUsernameFeedback" className="invalid-feedback">
                        Please choose a correct file type.
                    </div>
                </div>
                <div className="col-md-4">
                    <label htmlFor="validationServer02" className="form-label">Logo</label>
                    <input type="file" className={"form-control  form-control-sm "+(inputs.logo[1]?"is-valid":"is-invalid")} id="validationServer02"  required
                     onChange={(e)=>{
                        if(e.target.files===null){
                            console.error("no file selected on cover 1");
                            return;
                        }
                        setInputs({...inputs,logo:[e.target.files[0],validImageTypes.includes(e.target.files[0].type)]});
                    }}
                    />
                    
                    <div className="valid-feedback">
                    Looks good!
                    </div>
                    <div id="validationServerUsernameFeedback" className="invalid-feedback">
                        Please choose a correct file type.
                    </div>
                </div>
                <div className="col-md-4">
                    <label htmlFor="validationServer02" className="form-label">Favicon</label>
                    <input type="file" className={"form-control  form-control-sm "+(inputs.favicon[1]?"is-valid":"is-invalid")} id="validationServer02"  required
                      onChange={(e)=>{
                        if(e.target.files===null){
                            console.error("no file selected on cover 1");
                            return;
                        }
                        setInputs({...inputs,favicon:[e.target.files[0],validImageTypes.includes(e.target.files[0].type)]});
                    }}
                    />
                    
                    <div className="valid-feedback">
                    Looks good!
                    </div>
                    <div id="validationServerUsernameFeedback" className="invalid-feedback">
                        Please choose a correct file type.
                    </div>
                </div>
                <div className="col-md-12"><h4>Contacts:</h4></div>
                <div className="col-md-3">
                    <label htmlFor="validationServer05" className="form-label">Instagramgram</label>
                    <input type="text" className={"form-control  "+(inputs.instagram[1]?"is-valid":"is-invalid")} id="validationServer05" aria-describedby="validationServer05Feedback" required
                     value={inputs.instagram[0]} onChange={(e)=>{
                        let value=e.target.value;
                        setInputs({...inputs,instagram:[value,value.match(/^([a-zA-Z0-9._]{1,30}|)$/)!==null]});
                    }}
                    />
                    <div className="valid-feedback">
                    Optional
                    </div>
                    <div id="validationServer05Feedback" className="invalid-feedback">
                    Please choose a correct insta account.
                    </div>
                    
                </div>
                <div className="col-md-3">
                    <label htmlFor="validationServer05" className="form-label">Whatsapp</label>
                    <input type="text" className={"form-control "+(inputs.whatsapp[1]?"is-valid":"is-invalid")} id="validationServer05" aria-describedby="validationServer05Feedback" required
                     value={inputs.whatsapp[0]} onChange={(e)=>{
                        let value=e.target.value;

                        setInputs({...inputs,whatsapp:[value,value.match(/^([0-9]{8,}|)$/)!==null]});
                    }}
                    />
                    <div className="valid-feedback">
                    Optional
                    </div>
                    <div id="validationServer05Feedback" className="invalid-feedback">
                    Please choose a correct whatsapp number.
                    </div>
                </div>
                <div className="col-md-3">
                    <label htmlFor="validationServer05" className="form-label">Facebook</label>
                    <input type="text" className={"form-control "+(inputs.facebook[1]?"is-valid":"is-invalid")} id="validationServer05" aria-describedby="validationServer05Feedback" required
                     value={inputs.facebook[0]} onChange={(e)=>{
                        let value=e.target.value;

                        setInputs({...inputs,facebook:[value,value.match(/.*/)!==null]});
                    }}
                    />
                    <div className="valid-feedback">
                    Optional
                    </div>
                    <div id="validationServer05Feedback" className="invalid-feedback">
                    Please choose a correct facebook input.
                    </div>
                </div>
                <div className="col-md-3">
                    <label htmlFor="validationServer05" className="form-label">X</label>
                    <input type="text" className={"form-control "+(inputs.twitter[1]?"is-valid":"is-invalid")} id="validationServer05" aria-describedby="validationServer05Feedback" required
                     value={inputs.twitter[0]} onChange={(e)=>{
                        let value=e.target.value;

                        setInputs({...inputs,twitter:[value,value.match(/^([a-zA-Z0-9._]{0,30}|)$/)!==null]});
                    }}
                    />
                    <div className="valid-feedback">
                    Optional
                    </div>
                    <div id="validationServer05Feedback" className="invalid-feedback">
                    Please choose a correct twitter account.
                    </div>
                </div>
                <div className="col-12">
                    <button className="btn btn-primary" type="submit"
                    onClick={(e)=>{
                        e.preventDefault();
                        handleSubmit(e);
                    }}
                    >Submit form</button>
                  
                    
                </div>
                </form>
        </>
    )
}
/**
 * create store/modify store
 * show all stores
 * 
 */