import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/Layout';
import * as styles from '../css/single-blog.module.css';
import StyledHero from '../components/StyledHero'
import Seo from '../components/SEO'

const  Blog = ({data}) => {
    const { title, published, author, description: {childMarkdownRemark}, image} = data.post;
    return (
        <Layout>
            <h1 className={styles.center}>{title}</h1>
            <StyledHero img={image.gatsbyImageData}/>
            <section className={styles.blog}>
                <div className={styles.center}>
                    <h1>{title}</h1>
                    <h4>Published at: {published}</h4>
                    <h4>Author: {author}</h4>
                    <div dangerouslySetInnerHTML={{__html:childMarkdownRemark.html}}/>
                    <Link to='/blog' className='btn-primary'>all blogs</Link>
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
                gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
            }
        }
    }
`;

export default Blog;

export const Head = ({data}) => <Seo title={data.post.title} />
