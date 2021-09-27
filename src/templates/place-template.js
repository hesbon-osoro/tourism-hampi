import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import StyledHero from '../components/StyledHero';
import * as styles from '../css/template.module.css';
import Img from 'gatsby-image';
import {FaMoneyBillWave, FaClock, FaTypo3 } from 'react-icons/fa';
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import SEO from '../components/SEO'

const Template = ({ data }) => {
    const { name, timeRequired, timings, entryFees, description: { description }, images } = data.place;
    // console.log(images)
    const [mainImage, ...placeImages] = images;
    
    return (
        <Layout>
            <SEO title={name}/>
            <StyledHero img={mainImage.fluid} />
            <section className={styles.template} >
                <div className={styles.center} >
                    <div className={styles.images}>
                        {
                            placeImages && placeImages.map((item, index)=>(
                                <Img key={index} fluid={item.fluid} alt='single' className={styles.image} />
                            ))
                        }
                    </div>
                    <h2>{name}</h2>
                    <div className={styles.info}>
                        <p>
                            <FaMoneyBillWave className={styles.icon} />
                            Entry Fees: {entryFees}
                        </p>
                        <p>
                            <FaClock className={styles.icon} />
                            Time Required: {timeRequired} hour{timeRequired === 1 ? '' : 's'}
                        </p>
                        {
                            timings ?
                            <p>
                                <FaTypo3 className={styles.icon} />
                                Timings: {timings}
                            </p> : ''
                        }
                    </div>
                    <p className={styles.desc}>{description}</p>
                    <AniLink fade to='/places' className='btn-primary' >
                        back to places
                    </AniLink>
                </div>
            </section>
        </Layout>
    );
}

export const query = graphql`
    query($slug: String!){
        place: contentfulHampiTourismSiteHbContent(slug: {eq: $slug}) {
            name
            slug
            timeRequired
            timings
            entryFees
            description {
                description
            }
            images {
                fluid {
                    ...GatsbyContentfulFluid
                }
            }
        }
    }
`
export default Template;
