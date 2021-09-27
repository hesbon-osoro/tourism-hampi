import React from 'react';
import Layout from '../components/Layout';
import StyledHero from '../components/StyledHero';
import Banner from '../components/Banner';
import About from '../components/About/About';
import Tips from '../components/Home/Tips';
// import { Link } from 'gatsby';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import { graphql } from 'gatsby';
import FeaturedPlaces from '../components/Home/FeaturedPlaces';
import SEO from '../components/SEO';

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

const home = ({data})=>(
    <Layout>
        <SEO title='Home' />
        <StyledHero home='true' img={data.defaultBcg.childImageSharp.fluid}>
            <Banner title='Amazing Hampi' info='Come and Explore Hampi, the city of ruins, which is a UNESCO World Heritage Site.'>
                {/* <Link to='/places' className='btn-white'>explore places</Link> */}
                <AniLink paintDrip hex='#AEECEE' to='/places' className='btn-white'>explore places</AniLink>
            </Banner>
        </StyledHero>
        <About />
        <Tips />
        <FeaturedPlaces />
    </Layout>
)
export default home;