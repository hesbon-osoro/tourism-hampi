import React from 'react';
import Layout from '../components/Layout';
import StyledHero from '../components/StyledHero';
import { graphql } from 'gatsby';
import PhotoList from '../components/Photos/PhotoList';

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
            <StyledHero img={data.blogBcg.childImageSharp.fluid} />
            <PhotoList />
        </Layout>
    )
}
