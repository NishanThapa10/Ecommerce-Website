import { sendError } from "next/dist/server/api-utils"
import category from "../admin/category"

let API = "http://localhost:5000/api" 

export const getAllCategories = () =>{
  return fetch(`${API}/getallcategories`)
  .then(res=>res.json())
  .catch(err=>console.log(err))
}

export const addCategory = (category_name,token) =>{
  return fetch(`${API}/addcategory`,{
    method:"POST",
    headers:{
      accept : "Application/json",
      "Content-Type":"application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({category_name})

  })
  .then(res=>res.json())
  .catch(err=>console.log(err))
}

export const getCategoryById = (id) =>{
  return fetch(`${API}/getcategory/${id}`)
  .then(res=>res.json())
  .then(data=>{
    return data.category_name
  })
  .catch(err=>console.log(err))
}


export const updateCategory = (category_name,id,token) =>{
  return fetch(`${API}/updatecategory/${id}`,{
    method:"PUT",
    headers:{
      accept : "Application/json",
      "Content-Type":"application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({category_name})
  })
  .then(res=>res.json())
  .catch(err=>console.log(err))
}

export const deleteCategory = (id) =>{
  return fetch(`${API}/deletecategory/${id}`,{
    method:"DELETE",
    headers:{
      accept : "Application/json",
      "Content-Type":"application/json",
    },
  })
  .then(res=>res.json())
  .catch(err=>console.log(err))
}

