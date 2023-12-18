import React, { FC } from 'react'
import Header from './Header';
import Footer from './Footer';

interface IGalery {
    children?: React.ReactNode;
}

const Layout: FC<IGalery> = ({children}) => {
  return (
    <div>
        <Header />
        <div className='content'>
            {children}
        </div>
        <Footer />
    </div>
  )
}

export default Layout