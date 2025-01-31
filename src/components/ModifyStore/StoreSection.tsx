
import { useEffect,useState } from "react"
import "./storesection.css";
const validImageTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];

export default function StoreSection(){
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
                    console.log(dataform,name);
                     fetch("http://localhost:3001/stores/me/ilias",{
                         headers:{
                             "Authorization":"Bearer cea02094ade92909e0920d91d59e16ffa1ed675d581275fe56250d4830c9ed5910fab49d1cccc99329e53ae1559595fff7c23370e9580c7f59587853"
             
                         },
                         method:"PUT",
                         body:dataform
                     }).then(res=>{
                         if(res.status===200)SetSubmitStatus("successful");
                         else if(res.status===409)SetSubmitStatus("conflict");
                         else SetSubmitStatus("error");
                         return res.json();
                     }).then(json=>console.log(json));
                     
                     
                 }
          
           function preview(e,pictureTitle){
          
           
                const file = e.target.files[0];
                if (file) {
                    const reader = new FileReader();
                    reader.onload = (e) => {
                        console.log("dd")
                        let preview=document.querySelector(`#${pictureTitle}-preview`);
                        preview.src = e.target.result;
                       // preview.classList.remove('border-dashed');
                    };
                    reader.readAsDataURL(file);
                }
            
        
           }
           console.log(submitStatus);
    return(
        <>


<div className="bg-gray-100">
    <div className="container mx-auto p-4">
       
        <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Cover Photos</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                

            <div className="relative group h-48 preview-root ">
    <img id="cover1-preview" src="placeholder-cover.jpg" alt="Cover 1" 
        className="w-full h-full object-cover rounded-lg" />
    <div className="previeww absolute inset-0 bg-black/50 flex items-center justify-center 
                    group-hover:opacity-100 transition-opacity 
                   duration-300 rounded-lg z-10">
        <input type="file" className="hidden" id="cover1" onChange={(e)=>{
                 preview(e,"cover1");
                if(e.target.files===null){

                    console.error("no file selected on cover 1");
                    return;
                }
                setInputs({...inputs,cover:inputs.cover.map((file,index)=>index===0?[e.target.files[0],validImageTypes.includes(e.target.files[0].type)]:file)});
           



            }}/>
        <label htmlFor="cover1" className="bg-white px-4 py-2 rounded cursor-pointer">
            Update
        </label>
    </div>
</div>


<div className="relative group h-48 preview-root ">
    <img id="cover2-preview" src="placeholder-cover.jpg" alt="Cover 2" 
        className="w-full h-full object-cover rounded-lg" />
    <div className="previeww absolute inset-0 bg-black/50 flex items-center justify-center 
                    group-hover:opacity-100 transition-opacity 
                   duration-300 rounded-lg z-10">
        <input type="file" className="hidden" id="cover2" onChange={(e)=>{
            
            preview(e,"cover2");
            if(e.target.files===null){
                console.error("no file selected on cover 1");
                return;
            }
            setInputs({...inputs,cover:inputs.cover.map((file,index)=>index===1?[e.target.files[0],validImageTypes.includes(e.target.files[0].type)]:file)});
       
            }}/>
        <label htmlFor="cover2" className="bg-white px-4 py-2 rounded cursor-pointer">
            Update
        </label>
    </div>
</div>

<div className="relative group h-48 preview-root ">
    <img id="cover3-preview" src="placeholder-cover.jpg" alt="Cover 3" 
        className="w-full h-full object-cover rounded-lg" />
    <div className="previeww absolute inset-0 bg-black/50 flex items-center justify-center 
                    group-hover:opacity-100 transition-opacity 
                   duration-300 rounded-lg z-10">
        <input type="file" className="hidden" id="cover3" onChange={(e)=>{
           preview(e,"cover3");
           if(e.target.files===null){
                console.error("no file selected on cover 1");
                return;
            }
            setInputs({...inputs,cover:inputs.cover.map((file,index)=>index===2?[e.target.files[0],validImageTypes.includes(e.target.files[0].type)]:file)});
       
            }
            }/>
        <label htmlFor="cover3" className="bg-white px-4 py-2 rounded cursor-pointer">
            Update
        </label>
    </div>
</div>



                
                
            </div>
        </div>

       {/* Store Icon Section */}

<div className="mb-8">
     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
    <h2 className="text-2xl font-bold mb-4">Store Icon</h2>
    
    <div className="w-32 h-32 relative group preview-root-logo">
        <img 
            id="logo-preview"
            src="placeholder-icon.jpg" 
            alt="Logo Icon" 
            className="w-full  h-full rounded-full object-cover"
        />
        <div className="previeww absolute z-20 inset-0 bg-black/50 flex items-center justify-center  group-hover:opacity-100 transition-opacity duration-300 rounded-full">
            <input 
                type="file" 
                className="hidden" 
                id="logo" 
                accept="image/*"  onChange={(e)=>{
                   
                    preview(e,"logo");
                    if(e.target.files===null){
                        console.error("no file selected on cover 1");
                        return;
                    }
                    setInputs({...inputs,logo:[e.target.files[0],validImageTypes.includes(e.target.files[0].type)]});
               

                    
                }}
            />
            <label htmlFor="logo" className="bg-white px-4 py-2 rounded cursor-pointer text-sm">
                Update
            </label>
        </div>
    </div>
    
    </div>
    <div>
    <h2 className="text-2xl font-bold mb-4">Store Favicon</h2>
    
    <div className="w-32 h-32 relative group preview-root-logo">
        <img 
            id="favicon-preview"
            src="placeholder-icon.jpg" 
            alt="Store Favicon" 
            className="w-full  h-full rounded-full object-cover"
        />
        <div className="previeww absolute z-20 inset-0 bg-black/50 flex items-center justify-center  group-hover:opacity-100 transition-opacity duration-300 rounded-full">
            <input 
                type="file" 
                className="hidden" 
                id="favicon" 
                accept="image/*"  onChange={(e)=>{
                    preview(e,"favicon");
                    if(e.target.files===null){
                        console.error("no file selected on cover 1");
                        return;
                    }
                    setInputs({...inputs,favicon:[e.target.files[0],validImageTypes.includes(e.target.files[0].type)]});
               
                  
                }}
            />
            <label htmlFor="favicon" className="bg-white px-4 py-2 rounded cursor-pointer text-sm">
                Update
            </label>
        </div>
    </div>
    </div>

</div>
</div>
        
        <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Store InhtmlFormation</h2>
            <div className="bg-white p-6 rounded-lg shadow">
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-2">Store Name</label>
                    <input type="text"  className="w-full p-2 border rounded "
                             value={inputs.name[0]} onChange={(e)=>{
                        if(submitStatus=="conflict")SetSubmitStatus("unsubmitted");
                        let value=e.target.value;
                        setInputs({...inputs,name:[value,value.match(/^[a-zA-Z][a-zA-Z-_0-9]*$/)!==null]});
                    }}


                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-2">Slogan</label>
                    <input type="text"  className="w-full p-2 border rounded"
                    value={inputs.slogan[0]} onChange={(e)=>{
                        // setInputs({...inputs,slogan:e.target.value});
                         let value=e.target.value;
                         setInputs({...inputs,slogan:[value,value.match(/^(.)+$/)!==null]});
                     }}
                    />
                </div>
            </div>
        </div>

       
        <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Contact InhtmlFormation</h2>
            <div className="bg-white p-6 rounded-lg shadow grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label className="block text-sm font-medium mb-2">Phone</label>
                    <input type="tel" className="w-full p-2 border rounded"/>
                </div>
                <div>
                    <label className="block text-sm font-medium mb-2">Facebook</label>
                    <div className="flex items-center gap-2">
                        <span className="w-5 h-5"></span>
                        <input type="url"  className="flex-1 p-2 border rounded"
                        value={inputs.facebook[0]} onChange={(e)=>{
                            let value=e.target.value;
    
                            setInputs({...inputs,facebook:[value,value.match(/.*/)!==null]});
                        }}
                        />
                    </div>
                </div>
                <div>
                    <label className="block text-sm font-medium mb-2">Whatsapp</label>
                    <div className="flex items-center gap-2">
                        <span className="w-5 h-5"></span>
                        <input type="url" value="https://facebook.com/store" className="flex-1 p-2 border rounded"
                          value={inputs.whatsapp[0]} onChange={(e)=>{
                            let value=e.target.value;
    
                            setInputs({...inputs,whatsapp:[value,value.match(/^([0-9]{8,}|)$/)!==null]});
                        }}
                        />
                    </div>
                </div>
                <div>
                    <label className="block text-sm font-medium mb-2">Instagram</label>
                    <div className="flex items-center gap-2">
                        <span className="w-5 h-5"></span>
                        <input type="url"  className="flex-1 p-2 border rounded"
                         value={inputs.instagram[0]} onChange={(e)=>{
                            let value=e.target.value;
                            setInputs({...inputs,instagram:[value,value.match(/^([a-zA-Z0-9._]{1,30}|)$/)!==null]});
                        }}
                        />
                    </div>
                </div>
                <div>
                    <label className="block text-sm font-medium mb-2">Twitter</label>
                    <div className="flex items-center gap-2">
                        <span className="w-5 h-5"></span>
                        <input type="url"  className="flex-1 p-2 border rounded"
                        value={inputs.twitter[0]} onChange={(e)=>{
                            let value=e.target.value;
    
                            setInputs({...inputs,twitter:[value,value.match(/^([a-zA-Z0-9._]{0,30}|)$/)!==null]});
                        }}
                        />
                    </div>
                </div>
             
            </div>
        </div>

        <button  className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg"
        onClick={(e)=>{
            e.preventDefault();
            handleSubmit(e);
        }}
        >
                    Save Store Config Changes
                </button>
        <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Categories & Products</h2>
            <div className="space-y-6">
               
                <div className="bg-white p-6 rounded-lg shadow">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-lg font-semibold">Electronics</h3>
                        <button className="text-red-500">Delete Category</button>
                    </div>
                    <div className="space-y-4">
                        <div className="flex items-center justify-between border-b pb-2">
                            <div>
                                <h4 className="font-medium">Smartphone X</h4>
                                <p className="text-sm text-gray-600">$599.99</p>
                            </div>
                            <div className="flex gap-2">
                                <button className="text-blue-500">Edit</button>
                                <button className="text-red-500">Remove</button>
                            </div>
                        </div>
                        <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded">
                            Add Product
                        </button>
                    </div>
                </div>
                
                <button className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg">
                    Add New Category
                </button>
            </div>
        </div>

        
    </div>
   
</div>
        </>
    )
}