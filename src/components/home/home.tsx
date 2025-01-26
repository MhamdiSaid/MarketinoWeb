import "./home.css";

export default function Home(){
    return(
        <>
            <form className="row g-3 needs-validation">
            <div className="col-md-4">
                    <label htmlFor="validationServerUsername" className="form-label">Store Name</label>
                    <div className="input-group has-validation">
                    <span className="input-group-text" id="inputGroupPrepend3">@</span>
                    <input type="text" className="form-control " id="validationServerUsername" aria-describedby="inputGroupPrepend3 validationServerUsernameFeedback" required/>
                    <div id="validationServerUsernameFeedback" className="invalid-feedback">
                        Please choose a username.
                    </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <label htmlFor="validationServer01" className="form-label">Slogan</label>
                    <input type="text" className="form-control is-valid" id="validationServer01"  required/>
                    <div className="valid-feedback">
                    Looks good!
                    </div>
                </div>
                <div className="col-md-4">
                    <label htmlFor="validationServer02" className="form-label">Cover 1</label>
                    <input type="file" className="form-control is-valid form-control-sm" id="validationServer02"  required/>
                    
                    <div className="valid-feedback">
                    Looks good!
                    </div>
                </div>
                <div className="col-md-4">
                    <label htmlFor="validationServer02" className="form-label">Cover 2</label>
                    <input type="file" className="form-control is-valid form-control-sm" id="validationServer02"  required/>
                    
                    <div className="valid-feedback">
                    Looks good!
                    </div>
                </div>
                <div className="col-md-4">
                    <label htmlFor="validationServer02" className="form-label">Cover 3</label>
                    <input type="file" className="form-control is-valid form-control-sm" id="validationServer02"  required/>
                    
                    <div className="valid-feedback">
                    Looks good!
                    </div>
                </div>
                <div className="col-md-4">
                    <label htmlFor="validationServer02" className="form-label">Logo</label>
                    <input type="file" className="form-control is-valid form-control-sm" id="validationServer02"  required/>
                    
                    <div className="valid-feedback">
                    Looks good!
                    </div>
                </div>
                <div className="col-md-12"><h4>Contacts:</h4></div>
                <div className="col-md-3">
                    <label htmlFor="validationServer05" className="form-label">Instagram</label>
                    <input type="text" className="form-control is-invalid" id="validationServer05" aria-describedby="validationServer05Feedback" required/>
                    <div id="validationServer05Feedback" className="invalid-feedback">
                    Please provide a valid zip.
                    </div>
                </div>
                <div className="col-md-3">
                    <label htmlFor="validationServer05" className="form-label">Whatsapp</label>
                    <input type="text" className="form-control is-invalid" id="validationServer05" aria-describedby="validationServer05Feedback" required/>
                    <div id="validationServer05Feedback" className="invalid-feedback">
                    Please provide a valid zip.
                    </div>
                </div>
                <div className="col-md-3">
                    <label htmlFor="validationServer05" className="form-label">Facebook</label>
                    <input type="text" className="form-control is-invalid" id="validationServer05" aria-describedby="validationServer05Feedback" required/>
                    <div id="validationServer05Feedback" className="invalid-feedback">
                    Please provide a valid zip.
                    </div>
                </div>
                <div className="col-md-3">
                    <label htmlFor="validationServer05" className="form-label">X</label>
                    <input type="text" className="form-control is-invalid" id="validationServer05" aria-describedby="validationServer05Feedback" required/>
                    <div id="validationServer05Feedback" className="invalid-feedback">
                    Please provide a valid zip.
                    </div>
                </div>





        
                
                <div className="col-12">
                    <div className="form-check">
                    <input className="form-check-input is-invalid" type="checkbox" value="" id="invalidCheck3" aria-describedby="invalidCheck3Feedback" required/>
                    <label className="form-check-label" htmlFor="invalidCheck3">
                        Agree to terms and conditions including not selling any illegal products
                    </label>
                    <div id="invalidCheck3Feedback" className="invalid-feedback">
                        You must agree before submitting.
                    </div>
                    </div>
                </div>
                <div className="col-12">
                    <button className="btn btn-primary" type="submit">Submit form</button>
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