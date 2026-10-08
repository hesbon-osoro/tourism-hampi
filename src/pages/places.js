import React from 'react';
import Layout from '../components/Layout';
import StyledHero from '../components/StyledHero';
import { graphql } from 'gatsby';
import Places from '../components/Places/Places';
import Seo from '../components/SEO'

export const query = graphql`
    query {
        defaultBcg: file(relativePath: {eq: "defaultBcg.jpeg"}){
            childImageSharp{
                gatsbyImageData(quality: 90, layout: FULL_WIDTH, placeholder: BLURRED, formats: [AUTO, WEBP])
            }
        }
    }
`;

export default function places({data}) {
    return (
        <Layout>
            <StyledHero img={data.defaultBcg.childImageSharp.gatsbyImageData} />
            <Places />
        </Layout>
    )
}

export const Head = () => <Seo title="Places" description="Places to visit in Hampi, the city of ruins, is a UNESCO World Heritage Site." />
