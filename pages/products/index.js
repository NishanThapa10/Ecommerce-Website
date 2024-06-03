import { useEffect, useState } from "react";
import { getAllProducts, getFilteredProducts } from "../api/productAPI";
import ProductCard from "../components/ProductCard";
import CategoryCheckbox from "../components/client/CategoryCheckbox";
import PriceRadio from "../components/client/PriceRadio";


// export async function getStaticProps(){
//     const products = await getAllProducts()
//     return {props:{products}}
// }


const products = () => {
    let [products, setProducts] = useState([])
    let [filters, setFilter] = useState({
        category: [],
        price: []
    })

    const handleFilter = (filterBy,filter) => {
        setFilter({...filters, [filterBy]:filter})
        console.log(filters)
    }

    useEffect(()=>{
        getFilteredProducts(filters)
        .then(data=>setProducts(data))
    },[filters])

    return ( <>

        <div className="grid grid-cols-4 ml-3 mt-5 mb-3">
        <div className="col-span-1">
            <CategoryCheckbox handleFilter={handleFilter}/>
            <PriceRadio handleFilter={handleFilter}/>
        </div>
        <div className="col-span-3 grid grid-cols-2 gap-2 md:grid-cols-3 md:gap-2 mr-5">
        {
        products?.length > 0 &&
        products.map((product)=>{
            return(
              <ProductCard product={product} key={product._id}/>
            )
        })
       }
        </div>
       
       </div>

    </> );
}
 
export default products;