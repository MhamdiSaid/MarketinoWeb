import { useEffect,useState } from "react";


export default  function StoreDashboard(){

        const [stores,setStores]=useState();


        useEffect(()=>{

            fetch("http://localhost:3001/stores/me").then(((res)=>{
                return res.json();
            })).then(json=>setStores(JSON.parse(json)));
        });
    let handleDeleteStore=(e)=>{

        const item = e.target.closest('tr, .divide-y');
        item.style.transform = 'translateX(100%)';
        item.style.opacity = '0';
        setTimeout(() => item.remove(), 300);

    }

    return(
        <>
                    <div className="bg-gradient-to-br from-indigo-50 to-blue-100 min-h-screen">
                <div className="container mx-auto px-4 py-8">
                   
                    <div className="flex flex-col md:flex-row justify-between items-center mb-8 space-y-4 md:space-y-0">
                        <h1 className="text-3xl md:text-4xl font-bold text-indigo-900 animate-fade-in-down">Your Stores</h1>
                        <button id="addStore" className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-3 md:px-6 md:py-3 rounded-lg 
                                transition-all transform hover:scale-105 shadow-lg flex items-center space-x-2 w-full md:w-auto">
                            <i className="fas fa-plus"></i>
                            <span className="hidden md:inline">Add New Store</span>
                        </button>
                    </div>

                    
                    <div className="mb-6 animate-fade-in">
                        <input type="text" placeholder="Search stores..." 
                            className="w-full px-4 py-2 rounded-lg border border-indigo-200 focus:outline-none 
                                    focus:ring-2 focus:ring-indigo-500 transition-all"/>
                    </div>

                
                    <div className="bg-white rounded-2xl shadow-xl overflow-hidden animate-slide-up">
                        
                        <table className="w-full hidden md:table">
                            <thead className="bg-indigo-50">
                                <tr>
                                    <th className="px-6 py-4 text-left text-indigo-900 font-semibold cursor-pointer hover:bg-indigo-100 transition-colors">
                                        Store Name <i className="fas fa-sort ml-2 text-indigo-400"></i>
                                    </th>
                                    <th className="px-6 py-4 text-left text-indigo-900 font-semibold">Slogan</th>
                                    <th className="px-6 py-4 text-right text-indigo-900 font-semibold">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-indigo-100">
                                {stores.map((store,index)=>{
                                    return (
                                        <tr className="hover:bg-indigo-50 transition-colors group">
                                            <td className="px-6 py-4 font-medium text-indigo-900">Fashion Haven</td>
                                            <td className="px-6 py-4 text-indigo-600">Style Your Perfect Look</td>
                                            <td className="px-6 py-4 text-right space-x-3">
                                                <button className="text-blue-500 hover:text-blue-700 transition-colors">
                                                    <i className="fas fa-eye"></i>
                                                </button>
                                                <button className="text-green-500 hover:text-green-700 transition-colors">
                                                    <i className="fas fa-pen"></i>
                                                </button>
                                                <button className="text-red-500 hover:text-red-700 transition-colors">
                                                    <i className="fas fa-trash" onClick={handleDeleteStore}></i>
                                                </button>
                                            </td>
                                        </tr>
                            )})}
                              
                            </tbody>
                        </table>

                        
                        <div className="md:hidden divide-y divide-indigo-100">
                           
                            <div className="p-4 hover:bg-indigo-50 transition-colors group">
                                <div className="flex justify-between items-start mb-2">
                                    <div>
                                        <h3 className="font-medium text-indigo-900">Fashion Haven</h3>
                                        <p className="text-sm text-indigo-600">Style Your Perfect Look</p>
                                    </div>
                                    <div className="flex space-x-3">
                                        <button className="text-blue-500 hover:text-blue-700">
                                            <i className="fas fa-eye"></i>
                                        </button>
                                        <button className="text-green-500 hover:text-green-700">
                                            <i className="fas fa-pen"></i>
                                        </button>
                                        <button className="text-red-500 hover:text-red-700">
                                            <i className="fas fa-trash" onClick={handleDeleteStore}></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                          
                        </div>
                    </div>
                </div>

               
                <div className="md:hidden fixed bottom-6 right-6">
                    <button className="bg-indigo-600 text-white p-4 rounded-full shadow-lg 
                            hover:bg-indigo-700 transition-transform transform hover:scale-110">
                        <i className="fas fa-plus text-xl"></i>
                    </button>
                </div>

            

            
            </div>
        </>
    )
}