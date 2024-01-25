import React, { PropsWithChildren } from 'react';
import Header from '../partials/Header';
import Footer from '../partials/Footer';
import Menu from '../partials/Menu';


const Layout:React.FC<PropsWithChildren> = ({children}) => {
    return (
        <>
            <Menu />
            <Header></Header>
            <main>
                {children}
            </main>
            <Footer></Footer>
        </>
    )
}

export default Layout