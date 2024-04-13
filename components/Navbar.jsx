import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <div className='w-full h-10 bg-pink-500 flex items-center justify-center gap-8 py-3'>
            <Link href="/">Home</Link>
            <Link href="/trending">Trending Movies</Link>
            <Link href="/top-movies">Top Movies</Link>
            <Link href="/top-movies">Search</Link>

        </div>
    )
}

export default Navbar