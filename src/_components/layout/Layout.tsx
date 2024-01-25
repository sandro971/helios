import React, { PropsWithChildren } from 'react';
import Header from '../partials/Header';
import Footer from '../partials/Footer';


const Layout:React.FC<PropsWithChildren> = ({children}) => {
    return (
        <>
            <Header></Header>
            {children}
            <Footer></Footer>
        </>
    )
}

export default Layout