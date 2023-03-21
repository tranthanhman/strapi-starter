import Link from 'next/link'
import React from 'react'

const Header = () => {
    return (
        <header>
            <nav className='py-12 flex items-center text-lg w-4/5 mx-auto'>
                <Link href="/" className='mr-auto rounded-lg focus:outline flex-shrink-0 font-bold text-2xl'>
                    Dev
                </Link>

                <ul className='hidden md:flex items-center ml-4 space-x-4'>
                    <li>
                        <Link href="/">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href="/">
                            Snippet
                        </Link>
                    </li>
                    <li>
                        <Link href="/">
                            Links
                        </Link>
                    </li>
                    <li>
                        <Link href="/">
                            Search
                        </Link>
                    </li>
                    <li>
                        <Link href="/">
                            Github
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header