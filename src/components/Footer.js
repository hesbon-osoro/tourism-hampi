import React from 'react';
import * as styles from '../css/footer.module.css';
import links from '../constants/links';
import socialIcons from '../constants/social-icons';
// import { Link } from 'gatsby'
import AniLink from 'gatsby-plugin-transition-link/AniLink';
const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.links}>
                {
                    links.map((item, index)=>{
                        return (
                            // <Link key={index} to={item.path}>
                            //     {item.text}
                            // </Link>
                            <AniLink paintDrip hex='#AEECEE' key={index} to={item.path}>
                                {item.text}
                            </AniLink>
                        )
                    })
                }
            </div>
            <div className={styles.icons}>
                {
                    socialIcons.map((item, index)=>{
                        return(
                            <a key={index} href={item.url} target='_blank' rel='noopener noreferrer'>
                                {item.icon}
                            </a>
                        )
                    })
                }
            </div>
            <div className={styles.copyright}>
                copyright &copy; Amazing Hampi {new Date().getFullYear()} all rights reserved.
            </div>
        </footer>
    );
}

export default Footer;
