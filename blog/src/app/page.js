"use client"
import Link from 'next/link'
import styles from './page.module.css';
import {useRouter} from 'next/navigation';

export default function Home() {
  const apple=(item)=>{
    alert(item)
  }
  const router = useRouter();  
  const navigate=(name)=>{
    router.push(name);
  }
  return (
    <main className={styles.main}>
      <User name = "anil"></User>
      <h1>Home page</h1>
      <button onClick={()=>apple('fruit')}>click me</button>
      <Link href="/login" >Go to Login page</Link>
      <Link  href="/about">Go to About page</Link>
      <button onClick={()=>navigate('/login')}> Go to login page</button>
      <button onClick={()=>navigate('/login')}> Go to login page</button>
    </main>
  )
}

const User = (props) =>{
  return(
    <div>
      <h2>User name is {props.name}</h2>
    </div>
  )
}