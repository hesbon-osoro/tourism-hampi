import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import icon from '../images/defaultBcg.jpeg';
import Helmet from 'react-helmet';
import './layout.css';

const Layout = ({children}) => {
    return (
        <>
            <Helmet>
                <link rel='icon' href={icon} />
            </Helmet>
            <Navbar />
            {children}
            <Footer /> 
        </>
    );
}

export default Layout;
