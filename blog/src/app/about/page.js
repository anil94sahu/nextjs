import Link from 'next/link'
import React from 'react'

const About = () => {
  return (
    <div>
     <h1>About</h1>
     <Link href="/about/aboutcollege">go to about college</Link>
     <br />
     <Link href="/about/aboutstudent">go to about student</Link>
    </div>
  )
}

export default About