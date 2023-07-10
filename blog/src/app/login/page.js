"use client"
import Link from 'next/link'
import React from 'react';
import {useRouter} from 'next/navigation';


const Login = () => {
    const router = useRouter();
    const navigate=(name)=>{
        router.push(name)
    }
  return (
    <div>
        <h4 className='heading'>Login</h4>
        <h1><Link href="/">Go to home page</Link></h1>
        <button onClick={()=>router.push('/')}>Go to home page through button</button>
        <button onClick={()=>navigate('/login/loginteacher')}>Teacher</button>
        <button onClick={()=>navigate('/login/loginstudent')}>Student</button>
    </div>
  )
}

export default Login