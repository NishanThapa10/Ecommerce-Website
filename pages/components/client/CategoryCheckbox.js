import { getAllCategories } from '@/pages/api/categoryAPI'
import React, { useEffect, useState } from 'react'


const CategoryCheckbox = ({handleFilter}) => {


  let [categories, setCategories] = useState([])

  let [selected, setSelected] = useState([])

  useEffect(()=>{
    getAllCategories()
    .then(data=>{
      setCategories(data)
    })
  },[])

  const handleChange = (e) =>{
    let sel_new  = [...selected]
    let exists = sel_new.findIndex(cat=>cat===e.target.value)
    if(exists!= -1){
      sel_new.splice(exists,1)
    }
    else{
      sel_new.push(e.target.value)
    }
    setSelected(sel_new)
    // console.log(sel_new)
    handleFilter("category",sel_new)
  }


  return (
    <>
    <h1 className='text-2xl'>Categories</h1>
    {
      categories.length > 0 &&
      categories.map(category=>{

   return <div className="flex items-center" key={category._id}>
    <input id={category._id} type="checkbox" value={category._id} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" onChange={handleChange}/>
    <label for={category._id} className="ms-2 text-sm font-medium text-white dark:text-gray-300">{category.category_name}</label>
</div>
})
    }
</>
  )
}

export default CategoryCheckbox