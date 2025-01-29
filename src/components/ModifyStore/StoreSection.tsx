import { useEffect } from "react"


export default function StoreSection(){

          
           

    return(
        <>


<div className="bg-gray-100">
    <div className="container mx-auto p-4">
       
        <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Cover Photos</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                

            <div className="relative group h-48">
    <img id="cover1-preview" src="placeholder-cover.jpg" alt="Cover 1" 
        className="w-full h-full object-cover rounded-lg" />
    <div className="absolute inset-0 bg-black/50 flex items-center justify-center 
                   opacity-0 group-hover:opacity-100 transition-opacity 
                   duration-300 rounded-lg z-10">
        <input type="file" className="hidden" id="cover1" onChange={(e)=>{
           
                const file = e.target.files[0];
                if (file) {
                    const reader = new FileReader();
                    reader.onload = (e) => {
                        console.log("dd")
                        let preview=document.querySelector("#cover1-preview");
                        preview.src = e.target.result;
                       // preview.classList.remove('border-dashed');
                    };
                    reader.readAsDataURL(file);
                }
            
        }}/>
        <label htmlFor="cover1" className="bg-white px-4 py-2 rounded cursor-pointer">
            Update
        </label>
    </div>
</div>



                
                
            </div>
        </div>

       {/* Store Icon Section */}
<div className="mb-8">
    <h2 className="text-2xl font-bold mb-4">Store Icon</h2>
    <div className="w-32 h-32 relative group overflow-hidden">
        <img 
            id="logo-preview"
            src="placeholder-icon.jpg" 
            alt="Store Icon" 
            className="w-full  h-full rounded-full object-cover"
        />
        <div className="absolute z-20 inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full">
            <input 
                type="file" 
                className="hidden" 
                id="logo" 
                accept="image/*"  onChange={(e)=>{
                    
                        const file = e.target.files[0];
                        if (file) {
                            const reader = new FileReader();
                            reader.onload = (e) => {
                                console.log("dd")
                                let preview=document.querySelector("#logo-preview");
                                preview.src = e.target.result;
                               // preview.classList.remove('border-dashed');
                            };
                            reader.readAsDataURL(file);
                        }
                    
                }}
            />
            <label htmlFor="logo" className="bg-white px-4 py-2 rounded cursor-pointer text-sm">
                Update
            </label>
        </div>
    </div>
</div>

        
        <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Store InhtmlFormation</h2>
            <div className="bg-white p-6 rounded-lg shadow">
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-2">Store Name</label>
                    <input type="text" value="My Awesome Store" className="w-full p-2 border rounded"/>
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-2">Slogan</label>
                    <input type="text" value="Best products in town!" className="w-full p-2 border rounded"/>
                </div>
            </div>
        </div>

       
        <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Contact InhtmlFormation</h2>
            <div className="bg-white p-6 rounded-lg shadow grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label className="block text-sm font-medium mb-2">Phone</label>
                    <input type="tel" value="+1234567890" className="w-full p-2 border rounded"/>
                </div>
                <div>
                    <label className="block text-sm font-medium mb-2">Facebook</label>
                    <div className="flex items-center gap-2">
                        <span className="w-5 h-5"><heroicon-outline-facebook /></span>
                        <input type="url" value="https://facebook.com/store" className="flex-1 p-2 border rounded"/>
                    </div>
                </div>
                <div>
                    <label className="block text-sm font-medium mb-2">Whatsapp</label>
                    <div className="flex items-center gap-2">
                        <span className="w-5 h-5"><heroicon-outline-facebook /></span>
                        <input type="url" value="https://facebook.com/store" className="flex-1 p-2 border rounded"/>
                    </div>
                </div>
                <div>
                    <label className="block text-sm font-medium mb-2">Instagram</label>
                    <div className="flex items-center gap-2">
                        <span className="w-5 h-5"><heroicon-outline-facebook /></span>
                        <input type="url" value="https://facebook.com/store" className="flex-1 p-2 border rounded"/>
                    </div>
                </div>
                <div>
                    <label className="block text-sm font-medium mb-2">Twitter</label>
                    <div className="flex items-center gap-2">
                        <span className="w-5 h-5"><heroicon-outline-facebook /></span>
                        <input type="url" value="https://facebook.com/store" className="flex-1 p-2 border rounded"/>
                    </div>
                </div>
             
            </div>
        </div>

        <button className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg">
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