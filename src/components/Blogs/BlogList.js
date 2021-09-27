import React from 'react';
import BlogCard from './BlogCard';
import Title from '../Title';
import { useStaticQuery, graphql } from 'gatsby';
import * as styles from '../../css/blog.module.css';

const getPosts = graphql`
    query{
        posts: allContentfulPost(sort: {fields: published, order: DESC}) {
            edges {
                node {
                title
                slug
                published(formatString: "MMMM Do, YYYY")
                author
                id: contentful_id
                image {
                    fluid {
                        ...GatsbyContentfulFluid
                    }
                }
            }
        }
    }
}
`;

const BlogList = () => {
    const { posts } = useStaticQuery(getPosts);
    return (
        <section className={styles.blog}>
            <Title title='hampi' subtitle='blogs'/>
            <div className={styles.center}>
                {
                    posts.edges.map(({node})=>(
                        <BlogCard key={node.id} blog={node} />
                    ))
                }
            </div>
        </section>
    );
}

export default BlogList;
