import React from 'react';
import Layout from '../components/Layout';
import Contact from '../components/Contact/Contact'
import StyledHero from '../components/StyledHero';
import { graphql } from 'gatsby';
import SEO from '../components/SEO'

export const query = graphql`
    query{
        connectBcg: file(relativePath: {eq: "connectBcg.jpeg"}){
            childImageSharp{
                fluid(quality: 90, maxWidth: 4160){
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
    }
`;

export default function contact({data}) {
    return (
        <Layout>
            <SEO title='Contact'/>
            <StyledHero img={data.connectBcg.childImageSharp.fluid} />
            <Contact />
        </Layout>
    )
}

