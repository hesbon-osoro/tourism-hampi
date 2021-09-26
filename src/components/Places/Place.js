import React from 'react';
import Image from 'gatsby-image';
import * as styles from '../../css/place.module.css';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

const Place = ({place}) => {
    const { name, slug, images } = place;
    let mainImage = images[0].fluid;
    return (
        <article className={styles.place}>
            <div className={styles.imgContainer}>
                <Image fluid={mainImage} className={styles.img} alt='single place'/>
                <AniLink fade className={styles.link} to={`/places/${slug}`}>
                    details
                </AniLink>
            </div>
            <div className={styles.footer}>
                <h3>{name}</h3>
            </div>
        </article>
    );
}

export default Place;
