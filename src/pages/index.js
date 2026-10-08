import React from 'react';
import Layout from '../components/Layout';
import StyledHero from '../components/StyledHero';
import Banner from '../components/Banner';
import About from '../components/About/About';
import Tips from '../components/Home/Tips';
import { graphql, Link } from 'gatsby';
import FeaturedPlaces from '../components/Home/FeaturedPlaces';
import Seo from '../components/SEO';

export const query = graphql`
    query {
        defaultBcg: file(relativePath: {eq: "defaultBcg.jpeg"}){
            childImageSharp{
                gatsbyImageData(quality: 90, layout: FULL_WIDTH, placeholder: BLURRED, formats: [AUTO, WEBP])
            }
        }
    }
`;

const home = ({data})=>(
    <Layout>
        <StyledHero home='true' img={data.defaultBcg.childImageSharp.gatsbyImageData}>
            <Banner title='Amazing Hampi' info='Come and Explore Hampi, the city of ruins, which is a UNESCO World Heritage Site.'>
                <Link to='/places' className='btn-white'>explore places</Link>
            </Banner>
        </StyledHero>
        <About />
        <Tips />
        <FeaturedPlaces />
    </Layout>
)
export default home;

export const Head = () => <Seo title='Home' />