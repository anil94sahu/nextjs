'use client'
import styles from './page.module.css'

export default function Home() {
  const apple=(item)=>{
    alert(item)
  }
  return (
    <main className={styles.main}>
      <User name = "anil"></User>
      <h1>Home page</h1>
      <button onClick={()=>apple('fruit')}>click me</button>
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