import { useState } from "react";

export default function ProductManager(){

    const [Category,setCategory]=useState([]);
    const [onProcess,setOnProcess]=useState(false);

        console.log("heeelooo")
        // Modal Management
        let currentCategory = null;

        function showAddCategoryModal() {
            console.log("======+++++++");
            console.log(document.getElementById('modalBackdrop'));
            document.getElementById('modalBackdrop').classList.remove('hidden');
            document.getElementById('addCategoryModal').classList.remove('hidden');
        }

        function showAddProductModal(e) {
            console.log("[[[[[[[[[++++");
            currentCategory = e.target.closest('.bg-white');
            console.log(document.getElementById('modalBackdrop'))
            console.log("lllll")
            document.getElementById('modalBackdrop').classList.remove('hidden');
            document.getElementById('addProductModal').classList.remove('hidden');
        }

        function showDeleteConfirm(e,index) {
            confirmDelete.index=index;
            currentCategory = e.target.closest('.bg-white');
            document.getElementById('modalBackdrop').classList.remove('hidden');
            document.getElementById('deleteConfirmModal').classList.remove('hidden');
        }

        function hideModals() {
            document.getElementById('modalBackdrop').classList.add('hidden');
            document.querySelectorAll('[id$="Modal"]').forEach(modal => {
                modal.classList.add('hidden');
                // Clear input fields when hiding
                modal.querySelectorAll('input').forEach(input => input.value = '');
            });
        }

        // Category Management
        function addCategory() {
        const name = document.getElementById('categoryName').value;
        if(onProcess)return;
        let formdata=new FormData();
        formdata.append("category",name);
        fetch("http://localhost:3001/stores/aaaaaazzz/categories/create",{
            headers:{
                "Authorization":"Bearer cea02094ade92909e0920d91d59e16ffa1ed675d581275fe56250d4830c9ed5910fab49d1cccc99329e53ae1559595fff7c23370e9580c7f59587853"

            },
            method:"POST",
            body:formdata
        }).then(res=>{
            if(res.status===200){
                console.log("Success");
                setCategory([...Category,{name:name,products:[]}]);
                if (name) {
                // document.getElementById('categoriesContainer').insertAdjacentHTML('beforeend', categoryHtml);
                    hideModals();
                }
            }else{
                console.log("something goes wrong ");
            }
            
        });
        
    }

        function confirmDelete(e) {
            if(onProcess)return;
            console.log("+++++++++++++")

        
            console.log("+++++++++++++")
            fetch(`http://localhost:3001/stores/aaaaaazzz/categories/${Category[confirmDelete.index].name}`,{
                headers:{
                    "Authorization":"Bearer cea02094ade92909e0920d91d59e16ffa1ed675d581275fe56250d4830c9ed5910fab49d1cccc99329e53ae1559595fff7c23370e9580c7f59587853"

                },
                method:"DELETE"
            }).then(res=>{
                if(res.status===200){
                    console.log("succcccess");
                   // currentCategory.remove();
                  
                    setCategory([...Category.filter((elmt,index_elmt)=>index_elmt!==confirmDelete.index)]);
                }
                else{
                    console.log("failed");
                }
                hideModals();
            });
           
        }

        // Product Management
        function addProduct() {
            const name = document.getElementById('productName').value;
            const price = document.getElementById('productPrice').value;
            if (name && price) {
                const productHtml = `
                    <div className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors">
                        <div className="flex-1">
                            <h4 className="font-medium text-gray-800">${name}</h4>
                            <p className="text-sm text-gray-600">$${price}</p>
                        </div>
                        <div className="flex gap-3">
                            <button className="text-blue-500 hover:text-blue-600" onClick={(e)=>showEditProductModal(this)}>Edit</button>
                            <button className="text-red-500 hover:text-red-600" onClick={(e)=>deleteProduct(this)}}>Remove</button>
                        </div>
                    </div>
                `;
                currentCategory.querySelector('.max-h-64').insertAdjacentHTML('beforeend', productHtml);
                hideModals();
            }
        }

        function deleteProduct(button) {
            button.closest('.flex.items-center').remove();
        }

        // Close modal when clicking outside
        let CloseModal= function(event) {
            // Only close if clicking directly on backdrop (not its children)
            if (event.target === this) {
                hideModals();
            }
        }
       // document.getElementById('modalBackdrop').addEventListener('click', hideModals);
   
   function showEditCategoryModal(){
    showAddCategoryModal();
   }










        return(
         <>
<div className="bg-gray-100">
    <div className="container mx-auto p-4 lg:p-8">
      
        <div className="mb-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Categories & Products</h2>
            
            
            <div className="space-y-6" id="categoriesContainer">
               
               {
                Category.map((category,index)=>{
                    return(
                        <>
                                <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                                    <div className="flex justify-between items-center mb-4">
                                        <h3 className="text-lg font-semibold text-gray-700">{category.name}</h3>
                                        <div className="flex gap-3">
                                            <button className="text-blue-500 hover:text-blue-600 flex items-center gap-1" onClick={(e)=>showEditCategoryModal(this)}>
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"/>
                                                </svg>
                                            </button>
                                            <button className="text-red-500 hover:text-red-600 flex items-center gap-1" onClick={(e)=>showDeleteConfirm(e,index)}>
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                    
                                
                                    <div className="max-h-64 overflow-y-auto pr-2 space-y-3">
                                    
                                        <div className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors">
                                            <div className="flex-1">
                                                <h4 className="font-medium text-gray-800">Smartphone X</h4>
                                                <p className="text-sm text-gray-600">$599.99</p>
                                            </div>
                                            <div className="flex gap-3">
                                                <button className="text-blue-500 hover:text-blue-600" onClick={e=>showEditProductModal(this)}>Edit</button>
                                                <button className="text-red-500 hover:text-red-600" onClick={e=>deleteProduct(this)}>Remove</button>
                                            </div>
                                        </div>
                                    
                                    </div>
                                    
                            
                                    <button className="mt-4 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition-colors flex items-center gap-2"
                                            onClick={e=>{
                                                console.log("hhhh")
                                            showAddProductModal(e)


                                            }}>
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
                                        </svg>
                                        Add Product
                                    </button>
                                </div>
                                </>
                                )})}
                            </div>
                            
                        
                            <button className="w-full bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-xl shadow-lg transition-colors mt-6 flex items-center justify-center gap-2"
                                    onClick={showAddCategoryModal}>
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
                                </svg>
                                Add New Category
                            </button>
                        </div>

                    
                        <div className="fixed bottom-6 right-6">
                            <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-xl shadow-lg transition-all transform hover:scale-105">
                                Save Changes
                            </button>
                        </div>


                        <div id="modalBackdrop" className="hidden fixed inset-0 bg-black bg-opacity-50 z-50" 
                        onClick={(e)=>{
                            CloseModal(e);
                        }}>
                        
                            <div id="addCategoryModal" className="hidden fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-xl w-96">
                                <h3 className="text-xl font-bold mb-4">Add New Category</h3>
                                <input type="text" id="categoryName" placeholder="Category Name" className="w-full p-2 border rounded-lg mb-4"/>
                                <div className="flex justify-end gap-3">
                                    <button className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg" onClick={hideModals}>Cancel</button>
                                    <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600" onClick={addCategory}>Add</button>
                                </div>
                            </div>

                            
                            <div id="addProductModal" className="hidden fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-xl w-96">
                                <h3 className="text-xl font-bold mb-4">Add New Product</h3>
                                <input type="text" id="productName" placeholder="Product Name" className="w-full p-2 border rounded-lg mb-4"/>
                                <input type="number" id="productPrice" placeholder="Price" className="w-full p-2 border rounded-lg mb-4"/>
                                <div className="flex justify-end gap-3">
                                    <button className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg" onClick={hideModals}>Cancel</button>
                                    <button className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600" onClick={addProduct}>Add</button>
                                </div>
                            </div>

                            
                            <div id="deleteConfirmModal" className="hidden fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-xl w-96">
                                <h3 className="text-xl font-bold mb-4 text-red-600">Delete Category?</h3>
                                <p className="text-gray-600 mb-6">Are you sure you want to delete this category? All products in this category will be removed.</p>
                                <div className="flex justify-end gap-3">
                                    <button className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg" onClick={hideModals}>Cancel</button>
                                    <button className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600" onClick={confirmDelete}>Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    
                </div>

            
            </>
        )

}