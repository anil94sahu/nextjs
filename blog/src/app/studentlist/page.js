import Link from 'next/link'
import React from 'react'

const StudentList = () => {
  return (
    <div >
        <h4 className='heading'>StudentList</h4>
        <ul>
            <li><Link href='/studentlist/anil'>Anil</Link></li>
            <li><Link href='/studentlist/satyam'>Satyam</Link></li>
            <li><Link href='/studentlist/praveen'>Praveen</Link></li>
            <li><Link href='/studentlist/naman'>Naman</Link></li>
        </ul>
    </div>
  )
}

export default StudentList