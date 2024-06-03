import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='md:w-[80%] mx-auto'>
        <footer className="p-4 bg-slate-600 text-white md:p-8 lg:p-10 dark:bg-gray-800">
  <div className="mx-auto max-w-screen-xl text-center">
      <Link href="/" className="flex justify-center items-center text-2xl font-semibold text-white dark:text-white">
          Evolve Store   
      </Link>
      <p className="my-6 text-white dark:text-gray-400">Store of over 400+  components..</p>
      <ul className="flex flex-wrap justify-center items-center mb-6 text-white dark:text-white">
          <li>
              <Link href="/products" className="mr-4 hover:underline md:mr-6 ">Products</Link>
          </li>
          <li>
              <Link href="/services" className="mr-4 hover:underline md:mr-6">Services</Link>
          </li>
          <li>
              <Link href="/Faqs" className="mr-4 hover:underline md:mr-6 ">FAQs</Link>
          </li>
          <li>
              <Link href="/Contact" className="mr-4 hover:underline md:mr-6">Contact</Link>
          </li>
          
      </ul>
      <span className="text-sm text-white sm:text-center dark:text-gray-400">© 2021-2022 <Link href="/" className="hover:underline">Evolve Store™</Link>. All Rights Reserved.</span>
  </div>
</footer>

    </div>
  )
}

export default Footer