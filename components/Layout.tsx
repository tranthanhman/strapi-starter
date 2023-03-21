import React from 'react'
import Header from './Header'

const Layout = ({children}) => {
  return (
    <div className='overflow-x-hidden container mx-auto'>
        <Header  />
        <main>
            {children}
        </main>
    </div>
  )
}

export default Layout