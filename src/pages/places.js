import React from 'react';
import Layout from '../components/Layout';
import StyledHero from '../components/StyledHero';
import { graphql } from 'gatsby';
import Places from '../components/Places/Places';
import SEO from '../components/SEO'

export const query = graphql`
    query {
        defaultBcg: file(relativePath: {eq: "defaultBcg.jpeg"}){
            childImageSharp{
                fluid(quality: 90, maxWidth: 4160){
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
    }
`;

export default function places({data}) {
    return (
        <Layout>
            <SEO title="Places" description="Places to visit in Hampi, the city of ruins, is a UNESCO World Heritage Site."/>
            <StyledHero img={data.defaultBcg.childImageSharp.fluid} />
            <Places />
        </Layout>
    )
}
