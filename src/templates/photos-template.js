import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/Layout';
import * as styles from '../css/single-blog.module.css';
import { GatsbyImage } from 'gatsby-plugin-image';
import Seo from '../components/SEO'

const Photos = ({data}) => {
    const { name, description, images } = data.photo;
    let mainImage = images[1].gatsbyImageData;
    return (
        <Layout>
            <section className={styles.blog}>
                <h1 className={styles.center}>{name}</h1>
                <div className={styles.center}>
                    <GatsbyImage image={mainImage} alt='single image'/>
                    <h4>{description}</h4>
                    <Link to='/photos' className='btn-primary'>
                        all photos
                    </Link>
                </div>
            </section>
        </Layout>
    );
}

export const query = graphql`
    query getPhoto($slug: String!){
        photo: contentfulPhotos(slug: {eq: $slug}){
            name
            description
            images{
                gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
            }
        }
        }
`;

export default Photos;

export const Head = ({data}) => <Seo title={data.photo.name} description={`Royalty free images of ${data.photo.name}`} />
