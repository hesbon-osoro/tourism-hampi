import React from 'react';
import * as styles from '../../css/blog-card.module.css';
import { GatsbyImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';

const BlogCard = ({blog}) => {
    const { slug, title, image, published } = blog;
    return (
        <article className={styles.blog}>
            <div className={styles.imgContainer}>
                <GatsbyImage image={image.gatsbyImageData} className={styles.img} alt='single post' />
                <Link className={styles.link} to={`/blog/${slug}`}>
                    read more
                </Link>
                <h6 className={styles.date}>{published}</h6>
            </div>
            <div className={styles.footer}>
                <h4>{title}</h4>
            </div>
        </article>
    );
}

export default BlogCard;
