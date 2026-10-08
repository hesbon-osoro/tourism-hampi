import React from 'react';
import Layout from '../components/Layout';
import StyledHero from '../components/StyledHero';
import { graphql } from 'gatsby';
import BlogList from '../components/Blogs/BlogList';
import Seo from '../components/SEO'

export const query = graphql`
    query {
        blogBcg: file(relativePath: {eq: "blogBcg.jpeg"}){
            childImageSharp{
                gatsbyImageData(quality: 90, layout: FULL_WIDTH, placeholder: BLURRED, formats: [AUTO, WEBP])
            }
        }
    }
`;

export default function blog({data}) {
    return (
        <Layout>
            <StyledHero img={data.blogBcg.childImageSharp.gatsbyImageData} />
            <BlogList />            
        </Layout>
    )
}

export const Head = () => <Seo title='Blog' description='Real experiences blogs oon Hampi, the city of ruins, is a UNESCO World Heritage Site.' />
