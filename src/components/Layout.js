import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import icon from '../images/VirupakshaTemple20.jpg';
import Helmet from 'react-helmet';
import './layout.css';

const Layout = ({children}) => {
    return (
        <>
            <Helmet>
                <link rel='icon' href={icon} />
                <title>Hampi Tourist Site</title>
            </Helmet>
            <Navbar />
            {children}
            <Footer /> 
        </>
    );
}

export default Layout;
