import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { getProduct } from '../api/productAPI'
import Link from 'next/link'
import { Rating } from '@mui/material'
import RelatedProducts from '../components/RelatedProducts'
import { useDispatch } from 'react-redux'
import { add_to_cart } from '../middleware/cartAction'

const product = () => {
  let [product, setProduct] = useState({})
  
  let id = useParams()?.id

  useEffect(()=>{
    if(id){
        getProduct(id)
        .then(data=>setProduct(data))
    }
  },[id])

  const dispatch = useDispatch()



//   `http://localhost:5000/${product?.image}`
  return (
   <>
   <section className="bg-white dark:bg-gray-900">
    <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7 mt-2">
        <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-black">{product?.title}</h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">{product?.description}</p>
            <h1>
            <Rating name="half-rating-read" value={product.rating} precision={0.5} readOnly />
            </h1>
            <Link href="#" className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900" 
            onClick={()=>dispatch(add_to_cart(product,1))}>
                Add to Cart
                <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </Link>
            <Link href="#" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                Buy Now
            </Link> 
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img src={`http://localhost:5000/${product?.image}`} alt="mockup"/>
        </div>                
    </div>
    <h1 className='text-2xl mx-auto text-black text-center mt-2 text-decoration-line: underline mb-1'>Related Products</h1>
    {id && <RelatedProducts id={id}/>}
</section>
   </>
  )
}

export default product