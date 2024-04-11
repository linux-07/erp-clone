import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <nav className='min-w-screen nav'>
      <div className="nav-bar sm:px-36 px-5 flex justify-between">
        <Image 
          src={"/spbbs-logo.png"}
          alt="logo"
          width={100}
          height={100}
        />
        <Link
          href="https://www.edupluscampus.com/"
        >
          <Image 
            src={"/edulogo.png"}
            alt="logo"
            width={100}
            height={100}
          />
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
