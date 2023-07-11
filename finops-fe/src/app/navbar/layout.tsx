import Link from 'next/link'
import React,{ PropsWithChildren } from 'react'
import './style.css'

const layout = ({ children }: PropsWithChildren) => {
  return (
    <div>
        <ul>
            <li>
                <Link href='/home'>Home</Link>
                
            </li>
            <li>
                <Link href='/awscloudcost'>Cloudcost</Link>
                
            </li>
            <li>
                <Link href='/aws'>Aws</Link>
                
            </li>
            <li>
                <Link href='/'>Azure</Link>
                
            </li>
            <li>
                <Link href='/invoices'>Invoices</Link>
                
            </li>
            <li>
                <Link href='/security'>Security</Link>
            </li>
            <li>
                <Link href='/customers'>Accounts</Link>
            </li>
        </ul>
        <div className="container">{children}</div>
    </div>
  )
}

export default layout