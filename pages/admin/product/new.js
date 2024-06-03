import { getAllCategories } from '@/pages/api/categoryAPI'
import { addProduct } from '@/pages/api/productAPI'
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import Swal from 'sweetalert2'

const add = () => {
  
  let [token, setToken] = useState('')
  let[categories, setCategories] = useState([]) 
  let sel_ref = useRef()
  let file_ref = useRef()
  let [product, setProduct] = useState({
    title: "",
    price: "",
    description: "",
    count_in_stock: "",
    category: "",
    formdata: new FormData
  })

  let {formdata, title, price,description,count_in_stock} = product 
  

 

  useEffect(()=>{
    getToken().then(data=>setToken(data))

    getAllCategories()
    .then(data=>{
        setCategories(data)
    })

    async function getToken(){
        return await JSON.parse(localStorage.getItem('jwt'))?.token
    }
  },[]) 

  const handleChange = (e) =>{
    if(e.target.name === "image"){
        formdata.set("image",e.target.files[0])
    }
    else{
        setProduct({...product,[e.target.name]:e.target.value})
        formdata.set(e.target.name,e.target.value)
    }
  }




const handleSubmit = (e) =>{
  e.preventDefault()
  addProduct(formdata,token)
  .then(data=>{
    if(data && data.error){
      Swal.fire("Error",data.error,'error')
    }
    else{
      Swal.fire("Success","Product added successfully",'success')
      setProduct({title:'',price:'',description:'',count_in_stock:''})
      sel_ref.current.value = ''
      file_ref.current.value = ''
    }
  })
}



  return (
    <>
   
    <div id="defaultModal" tabindex="-1" aria-hidden="true" className=" overflow-y-auto overflow-x-hidden mx-auto z-50 justify-center items-center w-full md:inset-0 h-modal md:h-full p-7 bg-slate-50">
        <div className="relative p-4 w-full max-w-2xl h-full md:h-auto">
            <button type="general"><Link href='/admin/product/'>Back</Link></button>
           
            <div className="relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5 mt-3">
                
                <div className="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        Add New Product
                    </h3>
                   
                </div>
              
                <form >
                    <div className="flex gap-4 mb-4 flex-col">
                        <div>
                            <label for="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Name</label>
                            <input type="text" name="title" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type product name" required="" value={title} onChange={handleChange} />
                        </div>
                        <div>
                            <label for="price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Price</label>
                            <input type="number" name="price" id="number" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type product price" required="" value={price} onChange={handleChange}/>
                        </div>
                        <div>
                            <label for="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Description</label>
                            <textarea name="description" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type product description" required="" value={description} onChange={handleChange} />
                        </div>
                        <div>
                            <label for="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Count</label>
                            <input type="number" name="count_in_stock" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type product Count in Stock" required="" value={count_in_stock} onChange={handleChange}/>
                        </div>
                        <div>
                            <label for="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Image</label>
                            <input type="file" name="image" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type product Count in Stock" required="" ref={file_ref} onChange={handleChange}/>
                        </div>
                        <div>
                            <label for="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category</label>
                            <select name='category' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" ref={sel_ref} onChange={handleChange}>
                            <option value="" defaultValue>Select Category</option>
                            {
                                categories.map(category=>{
                                    return <option value={category._id} key={category._id}>{category.category_name}</option>
                                })
                            }
                        </select>

                        </div>   
                    </div>
                    <button type="submit" onClick={handleSubmit} className="text-white inline-flex items-center bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800  ">
                        <svg className="mr-1 -ml-1 w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
                        Add new Product
                    </button>
                </form>
            </div>
        </div>
    </div>
        </> 
  )
}

export default add  