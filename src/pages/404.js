import React from 'react';
import Layout from '../components/Layout';
import * as styles from '../css/error.module.css';
// import { Link } from 'gatsby';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import Banner from '../components/Banner';

export default function error(){
    return(
        <Layout>
            <header className={styles.error}>
                <Banner title="oops it's a dead end">
                    {/* <Link to='/' className='btn-white'>
                        back to home page
                    </Link> */}
                    <AniLink paintDrip hex='#AEECEE' to='/' className='btn-white'>
                        back to home page
                    </AniLink>
                </Banner>
            </header>
        </Layout>
    )
}