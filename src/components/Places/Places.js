import React from 'react';
import PlaceList from './PlaceList';
import { useStaticQuery, graphql  } from 'gatsby';

const getPlaces = graphql`
    query{
        places: allContentfulHampiTourismSiteHbContent{
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
const Places = () => {
    const { places } = useStaticQuery(getPlaces)
    return (
        <>
            <PlaceList places={places}/>
        </>
    );
}

export default Places;
