"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import {signOut,signIn,useSession,getProviders}from 'next-auth/react'
function Nav(){

    const isUserLogedIn = true;
    const [provider , setProvider] =useState(null)
  return (
    <nav className='flex-between w-full mb-16 pt-3'>
<Link href='/' className='flex gap-2 flex-center'>
<Image src="/assets/images/logo.svg"
alt="Promptopia Logo"
width={30} height={30}
className="object-contain"/>
<p className='logo-text'>Promptopia</p>
</Link>


<div>
    {isUserLogedIn ? (
        <div className='flex gap-3 md:gap-5'>
            <Link className="bg-black p-2 text-white rounded-full" href={"/addTopic"}>
        Add Topic
      </Link>
        <Link href='/create-prompt' className='black_btn'>
          Create Post
        </Link>
        <button type='button' onClick={signOut} className='outline_btn'>
          Sign Out
        </button>
        <Link href='/profile'>
              <Image
                src="/assets/images/logo.svg"
                width={37}
                height={37}
                className='rounded-full'
                alt='profile'
              />
            </Link>

        
      </div> 
    ) : (
        <div className='flex gap-3 md:gap-5'>
        <Link href='/create-prompt' className='black_btn'>
        SignIn With google
        </Link>
        <button type='button' onClick={signOut} className='outline_btn'>
          SignIn
        </button>
        </div>
    )}
</div>

      
      
    </nav>
  ) 
}

export default Nav