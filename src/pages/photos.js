import React from 'react';
import Layout from '../components/Layout';
import StyledHero from '../components/StyledHero';
import { graphql } from 'gatsby';
import PhotoList from '../components/Photos/PhotoList';
import Seo from '../components/SEO'

export const query = graphql`
    query {
        blogBcg: file(relativePath: {eq: "hampiPhoto.jpg"}){
            childImageSharp{
                gatsbyImageData(quality: 90, layout: FULL_WIDTH, placeholder: BLURRED, formats: [AUTO, WEBP])
            }
        }
    }
`;

export default function photos({data}){
    return(
        <Layout>
            <StyledHero img={data.blogBcg.childImageSharp.gatsbyImageData} />
            <PhotoList />
        </Layout>
    )
}

export const Head = () => <Seo title="Photos" description="Royalty free image of Hampi, the city of ruins, is a UNESCO World Heritage Site." />
