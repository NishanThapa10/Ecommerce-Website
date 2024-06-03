import "@/styles/globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import Sidebar from "./components/admin/Sidebar";
import StoreProvider from "./StoreProvider";
import { useParams } from "next/navigation";

export default function App({ Component, pageProps }) {

  let [isAdmin , setisAdmin] = useState(false)

  useEffect(()=>{
    getUser()
    .then(user=>{
      if(user.role === 'admin'){
        setisAdmin(true)
      }
      else{
        setisAdmin(false)
      }
    })
    async function getUser(){
      return localStorage.getItem('jwt')?
      await JSON.parse(localStorage.getItem('jwt')).user:false
    }
  },[useParams()])





  return  <>
  <StoreProvider>
  {
    isAdmin ? 
    <div className="flex">
      <div className="w-1/4"><Sidebar/></div>
      <div className="w-3/4">
      <Component {...pageProps} />
      </div>
    </div>
    :
    <>
    <Header/>
    <Component {...pageProps} />
    <Footer/>
    </>
  }
  </StoreProvider>
</>
}
