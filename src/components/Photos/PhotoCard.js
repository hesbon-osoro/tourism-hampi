import React from 'react';
import Image from 'gatsby-image';
import * as styles from '../../css/place.module.css';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

const PhotoCard = ({photo}) => {
    const { name, slug, images } = photo;
    let mainImage = images[0].fluid;
    return (
        <article className={styles.place}>
            <div className={styles.imgContainer}>
                <Image fluid={mainImage} className={styles.img} alt='single photo' />
                <AniLink fade className={styles.link} to={`/photos/${slug}`}>open</AniLink>
            </div>
            <div className={styles.footer}>
                <h3>{name}</h3>
            </div>
        </article>
    );
}

export default PhotoCard;