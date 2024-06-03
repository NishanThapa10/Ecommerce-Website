'use client'
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { verifyUser } from '../api/userAPI'

const verify = () => {
  let params = useParams()
  let token = params?.token

  let [success, setSuccess] = useState('')
  let [error, setError] = useState('')

  useEffect(()=>{
    if(token){
    verifyUser(token)
    .then(data=>{
      if(data.error){
        setError(data.error)
      }
      else{
        setSuccess(data.message)
      }
    })
  }
  },[params])

  const showError = ()=>{
    if(error){
      return <div className='py-5 text-center text-2xl bg-red-300'>{error}</div>
    }
  }

  const showSuccess = ()=>{
    if(success){
      return <div className='py-5 text-center text-2xl bg-green-300'>{success}</div>
    }
  }

  return (
    <div>
      {showError()}
      {showSuccess()}
    </div>
  )
}

export default verify