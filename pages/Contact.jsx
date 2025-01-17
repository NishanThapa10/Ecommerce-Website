import Link from 'next/link'
import React from 'react'

const Contact = () => {
  return (
<div className='w-[80%] mx-auto bg-slate-200'>
   <form>
      <div class="mb-6">
         <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-center">Your email</label>
         <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[50%] mx-auto p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required />
      </div>
      <div class="mb-6">
         <label for="subject" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-center">Subject</label>
         <input type="text" id="subject" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[50%] mx-auto p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Let us know how we can help you" required />
      </div>
      <div class="mb-6">
         <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-center">Your message</label>
         <textarea id="message" rows="4" class="block p-2.5 w-[50%] mx-auto text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your message..."></textarea>
      </div>
      <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 w-[50%] mx-auto focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 block">Send message</button>
   </form>
   <p class="mb-2 text-sm text-gray-500 dark:text-gray-400 text-center">
      <Link href="#" class="hover:underline">info@company.com</Link>
   </p>
   <p class="text-sm text-gray-500 dark:text-gray-400 text-center">
      <Link href="#" class="hover:underline">212-456-7890</Link>
   </p>
</div>

  )
}

export default Contact