import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { HiLogout, HiOutlineLogin, HiOutlineShoppingCart, HiOutlineUserAdd } from "react-icons/hi";
import { logout } from '../api/userAPI';
import { useRouter } from 'next/navigation';



const Header = () => {

  let [user,setUser] = useState({})
 
  useEffect(() => {
    getUser()
    .then(data=>setUser(data))

    async function getUser(){
      user = await JSON.parse(localStorage.getItem('jwt'))?.user
      return user
    }
  },[])
  let router = useRouter()

  const handleLogout = () =>{
    logout()
    .then(data=>{
      if(data.msg)(
        router.push('/')
      )
    })
    .catch(err=>console.log(err))
  }

  return (
      <div className='grid md:grid-cols-4 md:w-[80%] m-auto'>
        <div className='col-span-1'>
          <Link href={'/'}><h1 className='text-3xl'>Evolve Store</h1></Link>
        </div>
        <div className='col-span-2 flex py-2 px-4'>
          <input type='search' className='w-full rounded-s-md text-black px-3 outline-none'/>
          <button type='warning' className='text-white rounded-s-none'>Search</button>
        </div>
        <div className='col-span-1 flex justify-evenly py-3 items-center text-3xl'>
          <Link href={'/Login'}><HiOutlineLogin /></Link>
          <Link href={'/Register'} ><HiOutlineUserAdd/></Link>
          <Link href={'/cart'}><HiOutlineShoppingCart/></Link>
          <Link href={'/'} onClick={handleLogout}><HiLogout/></Link>
      </div>
      <div className='md:flex items-center md:w-full mx-auto'>
        <ul className='list-none md:flex justify-between py-2 gap-10'> 
          <li><Link href={'/'}>Home</Link></li>
          <li><Link href={'/products'}>Products</Link></li>
          <li><Link href={'/services'}>Services</Link></li>
          <li><Link href={'/Faqs'}>FAQS</Link></li>
          <li><Link href={'/Contact'}>Contact</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Header
