import { useEffect, useState } from "react";
import "./productDescription.css";

export default function ProductDescription({product}){

/*
    useEffect(()=>{
        fetch(url,{
            method:"GET",
            headers:{
              "Authorization":"Bearer cea02094ade92909e0920d91d59e16ffa1ed675d581275fe56250d4830c9ed5910fab49d1cccc99329e53ae1559595fff7c23370e9580c7f59587853"
            }
       
          }).then((res)=>{
            return res.json();
        }).then((json)=>{
            setInfos(json[0]);
            console.log(json);
        });
    },[]);*/
    let images_path=`http://localhost:3001/images/stores/${"helloword"}/products/${product.productid}/`
    return(


        <div className="product-description">
            <div className="pictures">



            <div id="carouselExampleIndicators" className="carousel slide">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
            </div>
            
            <div className="carousel-inner">
            <div className="carousel-item active">
            <img src={images_path+"1.svg"} className="d-block w-100" alt="..."/>
            </div>
            <div className="carousel-item">
            <img src={images_path+"2.svg"} className="d-block w-100" alt="..."/>
            </div>
            <div className="carousel-item">
            <img src={images_path+"3.svg"} className="d-block w-100" alt="..."/>
            </div>
            <div className="carousel-item">
            <img src={images_path+"3.svg"} className="d-block w-100" alt="..."/>
            </div>
            <div className="carousel-item">
            <img src={images_path+"4.svg"} className="d-block w-100" alt="..."/>
            </div>
            </div>


            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
            </div>



            </div>


                    <div className="dividor">

                    </div>
                <div className="products-details">
                   
                    <p className="product-name">{product.productname}</p>
                    <p className="description">{product.description}</p>
                    <div className="prices">
                    <p className="price-per-elmt">${product.price}</p>
                    <p className="products-details-discount">${product.discount}</p>
                    </div>
                    <div className="variants-caracteristics">
                    <div className="variants">
                    {product.variants.map((variant)=>{
                       // variant.valuespattern="said|mhamdi|iliaas|hamid";
                        //variant.input_type="radio";
                        console.log("kk")
                        if(variant.input_type==="text"){
                            return(
                                <>
                                <p className="variants-section">{variant.section}</p>

                                <div className="mb-3 input-text">
                                <input type="text" name={variant.section}  className="form-control" id="formGroupExampleInput" placeholder="you answer here"/>
                                </div>
                                </>
                            )

                        }else if(variant.input_type==="checkbox"){
                            
                            let checkfields=variant.valuespattern.split("|");
                            return(
                            <>
                                <p className="variants-section">{variant.section}</p>
                                
                                
                                {checkfields.map((obj:string)=>{
                                    return(
                                        <>
                                        <div className="form-check">
                                        <input className="form-check-input" name={variant.section} value={obj} type="checkbox"  id="flexCheckDefault"/>
                                        <label className="form-check-label" htmlFor="flexCheckDefault">
                                            {obj}
                                        </label>
                                        </div>
                                        </>
                                    );
                                })}
                                
                               
                               
                            </>
                            );

                        }else if(variant.input_type==="radio"){
                            console.log("llllllllllllll");
                            let radioFields=variant.valuespattern.split("|");
                            console.log(radioFields)
                            
                            return (<>
                                <p className="variants-section">{variant.section}</p>
                                {
                                    radioFields.map((obj:string)=>{
                                        return(
                                           <>
                                            <div className="form-check">
                                            <input className="form-check-input" name={variant.section}  value={obj} type="radio"   id="flexRadioDefault1"/>
                                            <label className="form-check-label">
                                                {obj}
                                            </label>
                                            </div>
                                           </> 
                                        );
                                    })
                                }
                                
                            </>
                            );
                            
                        }else if(variant.input_type==="file"){
                            <>
                                <p className="variants-section">{variant.section}</p>
                                <div className="input-group mb-3">
                                <input type="file" name={variant.section}  className=" file-upload" id="inputGroupFile01"/>
                                </div>
                            </>
                            
                        }else if(variant.input_type==="textarea"){
                            return null;
                            
                        }else if(variant.input_type==="select"){
                            let regexArray=variant.valuespattern.split("|");
                            
                            return(

                               
                                <>
                                    <p className="variants-section">{variant.section}</p>
                                    <select className="form-select" name={variant.section}  aria-label="Default select example">
                                    {regexArray.map((opt:string)=>{
                                        return(
                                            <>
                                            <option value={opt}>{opt}</option>
                                            </>
                                        )
                                    })}
                                    
                                    </select>
                                </>
                            )
                            
                        }
                    })}
                   


                  


                    



                    


                    
                    </div>
                    <div className="caracteristics">
                        <h6>Caracteristics</h6>
                       {product.caracteristics.map((caracteristic:{type:string,value:string})=>{
                        return <p><span>{caracteristic.type} :</span> {caracteristic.value}</p>
                       })}
                        


                    </div>


                    </div>
                    <div className="productdetails footer">
                        <p className="total-count">$93838</p>
                        <div className="buttons">
                            <div className="shop-now">
                                <p>Shop Now</p>
                            </div>
                            <div className="add-to-cart">
                                <p>Add TO Cart</p>
                            </div>
                        </div>

                    </div>
                    
                </div>

        </div>
    );
}
