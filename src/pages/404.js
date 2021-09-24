import React from 'react';
import Layout from '../components/Layout';
import styles from '../css/error.module.css';
import { Link } from 'gatsby';
import Banner from '../components/Banner';

export default function error(){
    return(
        <Layout>
            <header className={styles.error}>
                <Banner title="oops it's a dead end">
                    <Link to='/' className='btn-white'>
                        back to home page
                    </Link>
                </Banner>
            </header>
        </Layout>
    )
}