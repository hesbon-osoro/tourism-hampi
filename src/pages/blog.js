import React from 'react';
import Layout from '../components/Layout';
import StyledHero from '../components/StyledHero';
import { graphql } from 'gatsby';
import BlogList from '../components/Blogs/BlogList';
import SEO from '../components/SEO'

export const query = graphql`
    query{
        blogBcg: file(relativePath: {eq: "blogBcg.jpeg"}){
            childImageSharp{
                fluid(quality: 90, maxWidth: 4160){
                ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
    }
`;

export default function blog({data}) {
    return (
        <Layout>
            <SEO title='Blog' description='Real experiences blogs oon Hampi, the city of ruins, is a UNESCO World Heritage Site.' />
            <StyledHero img={data.blogBcg.childImageSharp.fluid} />
            <BlogList />            
        </Layout>
    )
}
