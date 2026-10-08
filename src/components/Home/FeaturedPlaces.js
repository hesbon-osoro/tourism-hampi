import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import Title from '../Title';
import * as styles from '../../css/items.module.css';
import Place from '../Places/Place';

const getFeaturedPlaces = graphql`
    query{
        featuredPlaces: allContentfulHampiTourismSiteHbContent(filter: {featured: {eq: true}}){
            edges{
                node{
                    contentful_id
                    name
                    slug
                    timeRequired
                    timings
                    entryFees
                    featured
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

const FeaturedPlaces = () => {
    const response = useStaticQuery(getFeaturedPlaces)
    const places = response.featuredPlaces.edges
    // console.log(places)
    return (
        <section className={styles.places}>
            <Title title='featured' subtitle='places' />
            <div className={styles.center}>
                {
                    places.map(({node})=> (
                        <Place key={node.contentful_id} place={node} />
                    ))
                }
            </div>
            <Link to='/places' className='btn-primary'>
                all places
            </Link>
        </section>
    );
}
export default FeaturedPlaces;