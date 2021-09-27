import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Title from '../Title';
import * as styles from '../../css/items.module.css';
import PhotoCard from './PhotoCard';

const getPhotos = graphql`
    query{
        photos: allContentfulPhotos{
            edges{
                node{
                    id: contentful_id 
                    name
                    slug
                    description
                    images{
                        fluid{
                            ...GatsbyContentfulFluid
                        }
                    }
                }
            }
        }
    }
`;

const PhotoList = () => {
    const { photos } = useStaticQuery(getPhotos);
    // console.log(photos)
    return (
        <section className={styles.places}>
            <Title title='hampi' subtitle='photos' />
            <div className={styles.center}>
                {
                    photos.edges.map(({node})=>(
                        <PhotoCard key={node.id} photo={node}/>
                    ))
                }
            </div>
        </section>
    );
}

export default PhotoList;
