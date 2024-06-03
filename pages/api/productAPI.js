let API = "http://localhost:5000/api" 


export const getAllProducts = () =>{
  return fetch(`${API}/products`)
  .then(res=>res.json())
  .catch(err=>console.log(err))
}

export const getFilteredProducts  = (filter) =>{
  return fetch(`${API}/getfilteredproducts`,{
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body: JSON.stringify(filter)
  })
  .then(res=>res.json())
  .catch(err=>console.log(err))
}

export const addProduct = (product,token) =>{
  return fetch(`${API}/addproduct`,{
    method:"POST",
    headers:{
      Authorization: `Bearer ${token}`
    },
    body: product
  })
  .then(res=>res.json())
  .catch(err=>console.log(err))
}


export const deleteProduct = (id) =>{
  return fetch(`${API}/deleteproduct/${id}`,{
    method: "DELETE",
    headers:{
      accept: "Application/json",
      "Content-Type": "application/json",
    },
  })
  .then(res=>res.json())
  .catch(err=>console.log(err))
}

export const getProduct = (id) => {
  return fetch(`${API}/getproduct/${id}`)
  .then(res=> res.json())
  .catch(err=> console.log(err))
}


export const updateProduct = (id,product,token) =>{
  return fetch(`${API}/updateproduct/${id}`,{
    method:"PUT",
    headers:{
      Authorization: `Bearer ${token}`
    },
    body: product
  })
  .then(res=>res.json())
  .catch(err=>console.log(err))
}

export const getRelatedProducts= (id) =>{
  return fetch(`${API}/relatedproducts/${id}`)
  .then(res=>res.json())
  .catch(err=>console.log(err))
}

