import { deleteProduct, getAllProducts } from '@/pages/api/productAPI';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

const product = () => {
    let API = "http://localhost:5000" 
  const [products, setProducts] = useState([])

  let router = useRouter()
  
    useEffect(()=>{
      getAllProducts()
      .then(data=>{
        if(data.error){
          console.log(data.error)
        }
        else{
          setProducts(data)
        }
      })
    },[])

    const handleDelete = id => e =>{
        e.preventDefault()
        Swal.fire({
            title:"Confirm?",
            text: "Are you sure you want to delete this product?",
            icon:"question",
            showCancelButton: true,
            cancelButtonColor: '#dd1111',
            confirmButtonText: "OK, Delete"
          }).then(result=>{
            if(result.isConfirmed){
                deleteProduct(id)
                .then(data=>{
                    if(data.error){
                        Swal.fire('Error',data.error,'error')
                    }
                    else{
                        Swal.fire('Success',data.message,'success')
                        .then(result=>{
                            router.refresh()
                        })
                    }
                })
            }
            else{
                Swal.fire('Cancelled','Nothing is deleted','info')
            }
        })
    }

    return (
        <div className='mx-auto mr-20'>
            <div className='p-5 text-center'>
                <h1>Products</h1>
                <Link href='/admin/product/new'><button type='add'>Add new Product</button></Link>
            </div>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg mx-auto">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                S.No
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Product Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Product Description
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Product Price
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Product Category
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Product Image
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        products.map((product,i)=>{
                            console.log(product)
                        return <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                            <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {i+1}
                            </td>
                            <td className="px-6 py-4">
                                {product.title}
                            </td>
                            <td className="px-6 py-4">
                                {product.description}
                            </td>
                            <td className="px-6 py-4">
                                {product.price}
                            </td>
                            <td className="px-6 py-4">
                                {product.category?.category_name}
                            </td>
                            <td className="px-6 py-4">
                               <img alt={product.title} src={`${API}/${product.image}`} style={{height:'100px',width:'100px',objectFit:'contain'}}/>
                               {console.log(`${API}${product.image}`)}
                            </td>
                            <td className="px-6 py-4">
                            <Link href={`/admin/product/edit/${product._id}`} className="font-medium text-blue-600 dark:text-blue-500 hover:underline"><button type='warning'>Edit</button></Link>
                                <button type='delete' onClick={handleDelete(product._id)}>Delete</button>
                            </td>
                        </tr>
                      })
                    }
                    </tbody>    
                </table>
            </div>
        </div>
    );
}

export default product;
