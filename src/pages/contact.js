import React from 'react';
import Layout from '../components/Layout';
import Contact from '../components/Contact/Contact'
import StyledHero from '../components/StyledHero';
import { graphql } from 'gatsby';
import Seo from '../components/SEO'

export const query = graphql`
    query {
        connectBcg: file(relativePath: {eq: "connectBcg.jpeg"}){
            childImageSharp{
                gatsbyImageData(quality: 90, layout: FULL_WIDTH, placeholder: BLURRED, formats: [AUTO, WEBP])
            }
        }
    }
`;

export default function contact({data}) {
    return (
        <Layout>
            <StyledHero img={data.connectBcg.childImageSharp.gatsbyImageData} />
            <Contact />
        </Layout>
    )
}

export const Head = () => <Seo title='Contact'/>

