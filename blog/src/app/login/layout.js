"use client"
import Link from "next/link";
import './login.css'
import { usePathname } from "next/navigation";


export default function Layout({
    children
}) {
    const pathName = usePathname();
    console.log(pathName);
    return (
        <div>
            <h4>Login Navbar</h4>
            {
                pathName !== '/login/loginteacher'?<ul className="login-menu">
                <li>
                    <Link href={'/login'}>Login</Link>
                </li>
                <li>
                    <Link href={'/login/loginstudent'}>Login Student</Link>
                </li>
                <li>
                    <Link href={'/login/loginteacher'}>Login Teacher</Link>
                </li>
            </ul>
                : <Link href={'/login'}>Go to login page</Link>
            }
            
            {children}
        </div>
    )
}