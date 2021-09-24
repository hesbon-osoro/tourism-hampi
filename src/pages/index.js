import React from 'react';
import Layout from '../components/Layout';
import SimpleHero from '../components/SimpleHero';
import Banner from '../components/Banner';
import About from '../components/About/About';
import Tips from '../components/Tips';
import { Link } from 'gatsby';

const home = ()=>(
    <Layout>
        <SimpleHero>
            <Banner title='Amazing Hampi' info='Come and Explore Hampi, the city of ruins, which is a UNESCO World Heritage Site.'>
                <Link to='/places' className='btn-white'>explore places</Link>
            </Banner>
        </SimpleHero>
        <About />
        <Tips />
    </Layout>
)
export default home;