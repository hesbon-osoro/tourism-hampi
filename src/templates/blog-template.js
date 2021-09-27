import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import * as styles from '../css/single-blog.module.css';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import StyledHero from '../components/StyledHero'

const  Blog = ({data}) => {
    const { title, published, author, description: {childMarkdownRemark}, image} = data.post;
    return (
        <Layout>
            <h1 className={styles.center}>{title}</h1>
            <StyledHero img={image.fluid}/>
            <section className={styles.blog}>
                <div className={styles.center}>
                    <h1>{title}</h1>
                    <h4>Published at: {published}</h4>
                    <h4>Author: {author}</h4>
                    <div dangerouslySetInnerHTML={{__html:childMarkdownRemark.html}}/>
                    <AniLink fade to='/blog' className='btn-primary'>all blogs</AniLink>
                </div>
            </section>
        </Layout>
    );
}

export const query = graphql`
    query getPost($slug: String!){
        post: contentfulPost(slug: {eq: $slug}){
            title
            published(formatString: "MMMM Do, YYYY")
            author
            description{
                childMarkdownRemark{
                    html
                }
            }
            image{
                fluid{
                    ...GatsbyContentfulFluid
                }
            }
        }
    }
`;

export default Blog;
