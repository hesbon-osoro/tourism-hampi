import React from 'react';
import Layout from '../components/Layout';
import StyledHero from '../components/StyledHero';
import { graphql } from 'gatsby';
import PhotoList from '../components/Photos/PhotoList';
import SEO from '../components/SEO'

export const query = graphql`
    query{
        blogBcg: file(relativePath: {eq: "hampiPhoto.jpg"}){
            childImageSharp{
                fluid(quality: 90, maxWidth: 4160){
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
    }
`;

export default function photos({data}){
    return(
        <Layout>
            <SEO title="Photos" description="Royalty free image of Hampi, the city of ruins, is a UNESCO World Heritage Site."/>
            <StyledHero img={data.blogBcg.childImageSharp.fluid} />
            <PhotoList />
        </Layout>
    )
}
