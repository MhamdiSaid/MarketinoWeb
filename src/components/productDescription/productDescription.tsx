import { useEffect, useState } from "react";
import "./productDescription.css";
import { useImmer } from "use-immer";

/** 
 *  ProductDescrirption component is responsible about display the product informations
 * - product pictures
 * - the product name
 * - the product description
 * - the price
 * - product variants (the caracteristics of the product that the client can make choice between them)
 * - the fixed caracteristics
 * - the total price
*/
// the product object type :

type caracteristicsType={type:string,value:string};

// the variant object type
type variantType={
input_type:string ,
section: string,
valuespattern:string,
variant_id:number 
}
// the variants state variable type:
interface  variantState extends variantType  {value:string[]|string};
// the product object type

type productType={
    caracteristics:caracteristicsType[],
    contact_type:string,
    description:string,
    discount: number,
    price: number,
    productid: number,
    productname: string,
    reviews:object[],
    scarcity: string,
    shipping_cost: number,
    stock_quantity: number,
    stock_status: string,
    storename: string,
    sub_path:string,
    variants:variantState[]
};

// atoast string :

let toast=`<div class="toast" role="alert" aria-live="assertive" aria-atomic="true" style="display:block;position:relative;bottom:0rem;background-color: #08ff0a;">
<div class="toast-header">
    <img src="..." class="rounded me-2" alt="...">
    <strong class="me-auto">Marketino</strong>
    <small>just now</small>
    <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
</div>
<div class="toast-body" style="font-weight: bolder;">
    Hello, world! This is a toast message.
</div>
</div>`;
// the component definition: 

export default function ProductDescription({product}:{product:productType}){
       
        // this state variable will hold the variants that the client choosed to be used when sending
        // the order/add_to_cart request to the server
        let [variants,setVariants]=useImmer<variantState[]|null>(null);

        // if the variants varianle is not set yet then intialize it with the value
        //  "" OR [] (for checkboxes)
        if(!variants){

            // update the state:
            setVariants(product.variants.map((variant:variantState)=>{

                // if the input type is a checkbox then assign the value property an array (multi selections)
                if(variant.input_type==="checkbox"){
                    return  {...variant,value:[]};
                }
                return {...variant,value:""};
               
            }));
            // return do not continue rendering(executing the function);
            return;
            //BUG
        }
       

        // handling the order event:
        function handleShopNow(e:object,isOrder:boolean){
           
            // the order endpoint:
            let url=`http://localhost:3001/stores/helloword/products/abdedrahimczaddssddcccssax`;
            url+=isOrder?"/order":"/cart";
            
            //create a form data object to construct a POST request body:
            let formdata=new FormData();
            //return if the varible is null:
            if(!variants)return;

            //iterates over the variants,and for each specific variant append a key-value
            // pair to the variants propery of the  formdata (request body)::
            // key:the variant type 
            // value: the variant user value
            variants.forEach((value)=>{
                
                formdata.append(`variants[${value["section"]}]`,value["value"]);
            });
            
            // apend the quantity of the product to order to the request body:
            formdata.append("quantity","19");
            

            fetch(url,{
                headers:{
                    "Authorization":"Bearer cea02094ade92909e0920d91d59e16ffa1ed675d581275fe56250d4830c9ed5910fab49d1cccc99329e53ae1559595fff7c23370e9580c7f59587853"
                  },
                  method:"POST",
                  body:formdata
            })
            .then((res)=>{
              // display a toast to show to the client the result of the order:
                
                // select The body element:

                let body=document.querySelector(".toasts");
                if(body==null)return;
                // construct a dom tree from a toast  string:
                // we will use DOMParser API to parse the string into a DOM tree:
                const parser=new DOMParser();
                const doc=parser.parseFromString(toast,"text/html");
                let toastElement:Element & {style:{backgroundColor:string}}|null=doc.querySelector(".toast");

                // add ability of removing the toast:
                let closeButton=doc.querySelector("button");
                closeButton?.addEventListener("click",(e)=>{
                    toastElement?.remove();
                });

                //check the response status and show the suitable toast message
                if(res.status===200){
                    // the order placed sucessufuly:
                    // change the toast message to assign to the user that the order is placed
                    // sucessfully
                    if(toastElement==null)return;
                   let toastbody= toastElement.querySelector(".toast-body");
                   if(toastbody==null)return;
                   toastbody.innerHTML=isOrder?"the order placed sucessufuly ":"the order added to the cart";
                    
                    body.append(toastElement);

                }else{
                    // something wrong,data format maybe incorrect
                    if(toastElement==null)return;
                    let toastbody:Element & {style:{color:string}}|null=toastElement.querySelector(".toast-body");
                    if(toastbody==null)return;
                    toastbody.innerHTML="Something Wrong!check the entered inputs";
                    toastbody.style.color="white";
                    toastElement.style.backgroundColor="red";

                    body.append(toastElement);
                }
                return res.json();
            }).then((json)=>{
                // show the message for the curios clients
                console.log(json);
            });
    
        }

    
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

    // the endpoint for getting the product pictures:
    let images_path=`http://localhost:3001/images/stores/${"helloword"}/products/${product.productid}/`;

    // the jsx to return:
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
                    {variants.map((variant,index)=>{

                       // check the input type of each variant and behaves depend on that:

                        if(variant.input_type==="text"){

                            // if the input_type is text then return an input  element of type="text"
                            // where the title of the variant will be the section
                            // and the value will be the value prop of the variants state variable
                            // and an OnChange event listener to update the value of the specific variant
                            // when the user change the value
                            return(
                                <>
                                <p className="variants-section">{variant.section}</p>

                                <div className="mb-3 input-text">
                                <input type="text" name={variant.section}
                                value={variant.value}
                                onChange={(e)=>{
                                    
                                    setVariants((proxy)=>{
                                        if(proxy==null)return;
                                        proxy[index].value=e.target.value;
                                        
                                    });
                                }}
                                className="form-control" id="formGroupExampleInput" placeholder="you answer here"/>
                                </div>
                                </>
                            )

                        }else if(variant.input_type==="checkbox"){
                            
                            // split the regular expression into an array that will be used to construct
                            // a list of checkboxes inputs
                             // where the title of the variant will be the section
                            // and the value will be the value prop of the variants state variable
                            // and an OnChange event listener to update the value of the specific variant
                            // when the user change the value
                            let checkfields:string[]=variant.valuespattern.split("|");
                            return(
                            <>
                                <p className="variants-section">{variant.section}</p>
                                
                                
                                {checkfields.map((obj:string)=>{
                                    return(
                                        <>
                                        <div className="form-check">
                                        <input className="form-check-input" name={variant.section} 
                                        onChange={(e)=>{
                                            setVariants((proxy)=>{
                                                if(proxy==null)return;
                                                if(e.target.checked){
                                                proxy[index].value.push(e.target.value);
                                                }else{
                                                    let indexx=proxy[index].value.indexOf(e.target.value);
                                                    if(index!==-1)
                                                        proxy[index].value.splice(indexx,1);
                                                }
                                                
                                            });
                                        }}
                                        value={obj}
                                         type="checkbox"  id="flexCheckDefault"/>
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
                            
                            let radioFields=variant.valuespattern.split("|");
                            console.log(radioFields)
                            
                            return (<>
                                <p className="variants-section">{variant.section}</p>
                                {
                                    radioFields.map((obj:string)=>{
                                        return(
                                           <>
                                            <div className="form-check">
                                            <input className="form-check-input" name={variant.section}  value={obj}
                                            onChange={(e)=>{
                                                setVariants((proxy)=>{
                                                    proxy[index].value=e.target.value;
                                                    
                                                });
                                            }}
                                            type="radio"   id="flexRadioDefault1"/>
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

                            return (<>
                                <p className="variants-section">{variant.section}</p>
                                <div className="input-group mb-3">
                                <input type="file" name={variant.section}
                                onChange={(e)=>{


                                    // if there's no selected file then just log a simple message


                                    if(e.target.files.length==0){
                                            console.log("no file selected");
                                    }
                                    else{
                                        // backend handling missing coming soon
                                        // update the state variabe and set the value of the current variant 
                                        
                                        let file=e.target.files[0];

                                        setVariants((proxy)=>{
                                            proxy[index].value=file;
                                        });
                                    }
                                }}      
                                className=" file-upload" id="inputGroupFile01"/>
                                </div>
                            </>
                            );

                        }// text area is not yet supported...coming soon
                        else if(variant.input_type==="textarea"){
                            return null;
                            
                        }else if(variant.input_type==="select"){
                            let regexArray=variant.valuespattern.split("|");
                            if(variant.value===""){
                                setVariants((proxy)=>{
                                    proxy[index].value=regexArray[0];
                                });
                            }
                            return(

                               
                                <>
                                    <p className="variants-section">{variant.section}</p>
                                    <select className="form-select" name={variant.section}
                                    value={variant.value==""?regexArray[0]:variant.value}
                                    onChange={(e)=>{
                                        setVariants((proxy)=>{
                                            proxy[index].value=e.target.value;
                                        });
                                    }}
                                    aria-label="Default select example">
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
                       {product.caracteristics.map((caracteristic:caracteristicsType)=>{
                        return <p><span>{caracteristic.type} :</span> {caracteristic.value}</p>
                       })}
                        


                    </div>


                    </div>
                    <div className="productdetails footer">
                        <p className="total-count">$93838</p>
                        <div className="buttons">
                            <div className="shop-now" onClick={(e)=>{
                                handleShopNow(e,true);
                            }}>
                                <p>Shop Now</p>
                            </div>
                            <div className="add-to-cart" onClick={(e)=>{
                                handleShopNow(e,false);
                            }
                            }>
                                <p>Add TO Cart</p>
                            </div>
                        </div>

                    </div>
                    
                </div>

        </div>
    );
}
