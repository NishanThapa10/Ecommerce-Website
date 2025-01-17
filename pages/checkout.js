import Link from "next/link"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { save_shipping_info } from "./middleware/cartAction"


const checkout = () => {
  let [shipping_address, setShippingAddress] = useState({
    street:'',
    city:'',
    zipcode:'',
    country:'',
    phone:'',
    name:''
  })
  let [total, setTotal] = useState(0)
 

  const handleChange = e => {
      setShippingAddress({ ...shipping_address, [e.target.name]: e.target.value })
    //   console.log(shipping_address)
  }
  const dispatch = useDispatch()

  const handleCheckout  = () =>{
    dispatch(save_shipping_info(shipping_address))
  }

  useEffect(()=>{
    getShippingAddress()
    .then(data=>setShippingAddress(data))

    getTotal().then(data=>setTotal(data))
  },[])

  async function getShippingAddress(){
    return localStorage.getItem('shipping_info') ? await JSON.parse(localStorage.getItem('shipping_info')) : {
        street:'',
        city:'',
        zipcode:'',
        country:'',
        phone:'',
        name:''
    }
  }
  async function getTotal(){
   return window && sessionStorage.getItem('total')
  }
  let {street, city, zipcode, country,phone,name}= shipping_address
//   let total = sessionStorage.getItem('total')

  return (<>
      <section className="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
          <form action="#" className="mx-auto max-w-screen-xl px-4 2xl:px-0">
              <ol className="items-center flex w-full max-w-2xl text-center text-sm font-medium text-gray-500 dark:text-gray-400 sm:text-base">
                  <li className="after:border-1 flex items-center text-primary-700 after:mx-6 after:hidden after:h-1 after:w-full after:border-b after:border-gray-200 dark:text-primary-500 dark:after:border-gray-700 sm:after:inline-block sm:after:content-[''] md:w-full xl:after:mx-10">
                      <span className="flex items-center after:mx-2 after:text-gray-200 after:content-['/'] dark:after:text-gray-500 sm:after:hidden">
                          <svg className="me-2 h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                          </svg>
                          Cart
                      </span>
                  </li>

                  <li className="after:border-1 flex items-center text-primary-700 after:mx-6 after:hidden after:h-1 after:w-full after:border-b after:border-gray-200 dark:text-primary-500 dark:after:border-gray-700 sm:after:inline-block sm:after:content-[''] md:w-full xl:after:mx-10">
                      <span className="flex items-center after:mx-2 after:text-gray-200 after:content-['/'] dark:after:text-gray-500 sm:after:hidden">
                          <svg className="me-2 h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                          </svg>
                          Checkout
                      </span>
                  </li>

                  <li className="flex shrink-0 items-center">
                      <svg className="me-2 h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                      </svg>
                      Order summary
                  </li>
              </ol>

              <div className="mt-6 sm:mt-8 lg:flex lg:items-start lg:gap-12 xl:gap-16">
                  <div className="min-w-0 flex-1 space-y-8">
                      <div className="space-y-4">
                          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Delivery Details</h2>

                          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                              <div>
                                  <label for="your_name" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"> Your name </label>
                                  <input type="text" id="your_name" className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500" placeholder="Bonnie Green" required
                                      name="name" onChange={handleChange} value={name}
                                  />
                              </div>

                              <div>
                                  <label for="your_email" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"> Street </label>
                                  <input type="text" id="your_email" className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500" placeholder="name@flowbite.com" required
                                      name="street" onChange={handleChange} value={street}
                                  />
                              </div>

                              <div>
                                  <div className="mb-2 flex items-center gap-2">
                                      <label for="select-country-input-3" className="block text-sm font-medium text-gray-900 dark:text-white"> City </label>
                                  </div>
                                  <input type="text" id="your_email" className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500" placeholder="name@flowbite.com" required
                                      name="city" onChange={handleChange} value={city}
                                  />

                              </div>

                              <div>
                                  <div className="mb-2 flex items-center gap-2">
                                      <label for="select-city-input-3" className="block text-sm font-medium text-gray-900 dark:text-white"> zipcode </label>
                                  </div>
                                  <input type="text" id="your_email" className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500" placeholder="name@flowbite.com" required
                                      name="zipcode" onChange={handleChange} value={zipcode}
                                  />
                              </div>

                              <div>
                                  <label for="phone-input-3" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"> Phone Number </label>
                                  <input type="number" id="your_email" className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500" placeholder="name@flowbite.com" required
                                      name="phone" onChange={handleChange} value={phone}
                                  />
                              </div>

                              <div>
                                  <label for="email" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"> Country </label>
                                  <input type="text" id="your_email" className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500" placeholder="name@flowbite.com" required
                                      name="country" onChange={handleChange} value={country}
                                  />
                              </div>


                              <div className="sm:col-span-2">
                                  <button type="submit" className="flex w-full items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700">
                                      <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14m-7 7V5" />
                                      </svg>
                                      Add new address
                                  </button>
                              </div>
                          </div>
                      </div>

                      {/* <div className="space-y-4">
                          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Payment</h3>

                          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                              <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 ps-4 dark:border-gray-700 dark:bg-gray-800">
                                  <div className="flex items-start">
                                      <div className="flex h-5 items-center">
                                          <input id="credit-card" aria-describedby="credit-card-text" type="radio" name="payment-method" value="" className="h-4 w-4 border-gray-300 bg-white text-primary-600 focus:ring-2 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" checked />
                                      </div>

                                      <div className="ms-4 text-sm">
                                          <label for="credit-card" className="font-medium leading-none text-gray-900 dark:text-white"> Credit Card </label>
                                          <p id="credit-card-text" className="mt-1 text-xs font-normal text-gray-500 dark:text-gray-400">Pay with your credit card</p>
                                      </div>
                                  </div>

                                  <div className="mt-4 flex items-center gap-2">
                                      <button type="button" className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">Delete</button>

                                      <div className="h-3 w-px shrink-0 bg-gray-200 dark:bg-gray-700"></div>

                                      <button type="button" className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">Edit</button>
                                  </div>
                              </div>

                              <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 ps-4 dark:border-gray-700 dark:bg-gray-800">
                                  <div className="flex items-start">
                                      <div className="flex h-5 items-center">
                                          <input id="pay-on-delivery" aria-describedby="pay-on-delivery-text" type="radio" name="payment-method" value="" className="h-4 w-4 border-gray-300 bg-white text-primary-600 focus:ring-2 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />
                                      </div>

                                      <div className="ms-4 text-sm">
                                          <label for="pay-on-delivery" className="font-medium leading-none text-gray-900 dark:text-white"> Payment on delivery </label>
                                          <p id="pay-on-delivery-text" className="mt-1 text-xs font-normal text-gray-500 dark:text-gray-400">+$15 payment processing fee</p>
                                      </div>
                                  </div>

                                  <div className="mt-4 flex items-center gap-2">
                                      <button type="button" className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">Delete</button>

                                      <div className="h-3 w-px shrink-0 bg-gray-200 dark:bg-gray-700"></div>

                                      <button type="button" className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">Edit</button>
                                  </div>
                              </div>

                              <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 ps-4 dark:border-gray-700 dark:bg-gray-800">
                                  <div className="flex items-start">
                                      <div className="flex h-5 items-center">
                                          <input id="paypal-2" aria-describedby="paypal-text" type="radio" name="payment-method" value="" className="h-4 w-4 border-gray-300 bg-white text-primary-600 focus:ring-2 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />
                                      </div>

                                      <div className="ms-4 text-sm">
                                          <label for="paypal-2" className="font-medium leading-none text-gray-900 dark:text-white"> Paypal account </label>
                                          <p id="paypal-text" className="mt-1 text-xs font-normal text-gray-500 dark:text-gray-400">Connect to your account</p>
                                      </div>
                                  </div>

                                  <div className="mt-4 flex items-center gap-2">
                                      <button type="button" className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">Delete</button>

                                      <div className="h-3 w-px shrink-0 bg-gray-200 dark:bg-gray-700"></div>

                                      <button type="button" className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">Edit</button>
                                  </div>
                              </div>
                          </div>
                      </div>

                      <div className="space-y-4">
                          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Delivery Methods</h3>

                          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                              <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 ps-4 dark:border-gray-700 dark:bg-gray-800">
                                  <div className="flex items-start">
                                      <div className="flex h-5 items-center">
                                          <input id="dhl" aria-describedby="dhl-text" type="radio" name="delivery-method" value="" className="h-4 w-4 border-gray-300 bg-white text-primary-600 focus:ring-2 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" checked />
                                      </div>

                                      <div className="ms-4 text-sm">
                                          <label for="dhl" className="font-medium leading-none text-gray-900 dark:text-white"> $15 - DHL Fast Delivery </label>
                                          <p id="dhl-text" className="mt-1 text-xs font-normal text-gray-500 dark:text-gray-400">Get it by Tommorow</p>
                                      </div>
                                  </div>
                              </div>

                              <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 ps-4 dark:border-gray-700 dark:bg-gray-800">
                                  <div className="flex items-start">
                                      <div className="flex h-5 items-center">
                                          <input id="fedex" aria-describedby="fedex-text" type="radio" name="delivery-method" value="" className="h-4 w-4 border-gray-300 bg-white text-primary-600 focus:ring-2 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />
                                      </div>

                                      <div className="ms-4 text-sm">
                                          <label for="fedex" className="font-medium leading-none text-gray-900 dark:text-white"> Free Delivery - FedEx </label>
                                          <p id="fedex-text" className="mt-1 text-xs font-normal text-gray-500 dark:text-gray-400">Get it by Friday, 13 Dec 2023</p>
                                      </div>
                                  </div>
                              </div>

                              <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 ps-4 dark:border-gray-700 dark:bg-gray-800">
                                  <div className="flex items-start">
                                      <div className="flex h-5 items-center">
                                          <input id="express" aria-describedby="express-text" type="radio" name="delivery-method" value="" className="h-4 w-4 border-gray-300 bg-white text-primary-600 focus:ring-2 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />
                                      </div>

                                      <div className="ms-4 text-sm">
                                          <label for="express" className="font-medium leading-none text-gray-900 dark:text-white"> $49 - Express Delivery </label>
                                          <p id="express-text" className="mt-1 text-xs font-normal text-gray-500 dark:text-gray-400">Get it today</p>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div> */}

                      {/* <div>
                          <label for="voucher" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"> Enter a gift card, voucher or promotional code </label>
                          <div className="flex max-w-md items-center gap-4">
                              <input type="text" id="voucher" className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500" placeholder="" required />
                              <button type="button" className="flex items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Apply</button>
                          </div>
                      </div> */}
                  </div>

                  <div className="mt-6 w-full space-y-6 sm:mt-8 lg:mt-0 lg:max-w-xs xl:max-w-md">
                      <div className="flow-root">
                          <div className="-my-3 divide-y divide-gray-200 dark:divide-gray-800">
                              <dl className="flex items-center justify-between gap-4 py-3">
                                  <dt className="text-base font-normal text-gray-500 dark:text-gray-400">Subtotal</dt>
                                  <dd className="text-base font-medium text-gray-900 dark:text-white">{total}</dd>
                              </dl>
                              {/* 
                              <dl className="flex items-center justify-between gap-4 py-3">
                                  <dt className="text-base font-normal text-gray-500 dark:text-gray-400">Savings</dt>
                                  <dd className="text-base font-medium text-green-500">0</dd>
                              </dl>

                              <dl className="flex items-center justify-between gap-4 py-3">
                                  <dt className="text-base font-normal text-gray-500 dark:text-gray-400">Store Pickup</dt>
                                  <dd className="text-base font-medium text-gray-900 dark:text-white">$99</dd>
                              </dl>

                              <dl className="flex items-center justify-between gap-4 py-3">
                                  <dt className="text-base font-normal text-gray-500 dark:text-gray-400">Tax</dt>
                                  <dd className="text-base font-medium text-gray-900 dark:text-white">$199</dd>
                              </dl> */}

                              <dl className="flex items-center justify-between gap-4 py-3">
                                  <dt className="text-base font-bold text-gray-900 dark:text-white">Total</dt>
                                  <dd className="text-base font-bold text-gray-900 dark:text-white">{total}</dd>
                              </dl>
                          </div>
                      </div>

                      <div className="space-y-3">
                          <button type="submit" className="flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4  focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" onClick={handleCheckout}>Proceed to Payment</button>

                          <p className="text-sm font-normal text-gray-500 dark:text-gray-400">One or more items in your cart require an account. <Link href="#" title="" className="font-medium text-primary-700 underline hover:no-underline dark:text-primary-500">Sign in or create an account now.</Link>.</p>
                      </div>
                  </div>
              </div>
          </form>
      </section>
  </>);
}


export default checkout