"use client"

import { navLinks } from '@/constants'
import { SignedIn } from '@clerk/clerk-react'
import { SignedOut, UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'
import { Button } from '../ui/button'

const SideBar = () => {

    const pathname= usePathname();

  return (
    <aside className='sidebar'>
      <div className='flex size-full flex-col gap-4'>
        <Link href="/" className='sidebar-logo'>
           <Image src="/assets/images/logo-text.svg" alt='logo' width={180} height={28}/>
        </Link>
        
        <nav className='sidebar-nav'>
          <SignedIn>
            <ul className='sidebar-nav_elements'>
               {navLinks.slice(0,6).map((link)=>{
                  const isActive= link.route === pathname
                  return(
                     <li key={link.route} className={`sidebar-nav_element group ${isActive ? 'sidebar-nav_element-active text-white': 'side-bar'}`}>
                      <Link className="sidebar-link" href={link.route}>
                        <Image src={link.icon} alt="logo" width={24} height={24} className="sidebar-icon" />
                         {link.label}
                      </Link>
                     </li>
                    )
                })}
                 </ul>
                
                <ul className='sidebar-nav_elements'>
                    {navLinks.slice(6).map((link)=>{
                      const isActive= link.route === pathname
                      return(
                        <li key={link.route} className={`sidebar-nav_element group ${isActive ? 'sidebar-nav_element-active text-white': 'side-bar'}`}>
                          <Link className="sidebar-link" href={link.route}>
                            <Image src={link.icon} alt="logo" width={24} height={24} className="sidebar-icon" />
                            {link.label}
                          </Link>
                        </li>
                        )
                    })}
                  <li className='flex-center cursor-pointer gap-2 p-4'>
                    <UserButton afterSignOutUrl='/' showName/>
                  </li>
                </ul>
          </SignedIn>

          <SignedOut>
            <Button asChild className='button bg-cover'>
              <Link href="/sign-in">Login</Link>
            </Button>
          </SignedOut>
        </nav>

        </div>
    </aside>
   
  )
}

export default SideBar
