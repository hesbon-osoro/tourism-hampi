const path = require('path')
exports.createPages = async ({ graphql, actions}) => {
    const { createPage } = actions
    const { data } = await graphql(`
        query{
            places: allContentfulHampiTourismSiteHbContent{
                edges{
                    node{
                        slug
                    }
                }
            }
            posts: allContentfulPost {
                edges {
                    node {
                        slug
                    }
                }
            }
            photos: allContentfulPhotos{
                edges{
                    node{
                        slug 
                    }
                }
            }
        }
        
    `)
    data.places.edges.forEach(({ node })=>{
        createPage({
            path: `places/${node.slug}`,
            component: path.resolve('./src/templates/place-template.js'),
            context: {
                slug: node.slug,
            }
        })
    })
    data.posts.edges.forEach(({node})=> {
        createPage({
            path: `blog/${node.slug}`,
            component: path.resolve('./src/templates/blog-template.js'),
            context: {
                slug: node.slug,
            }
        })
    })
    data.photos.edges.forEach(({node})=>{
        createPage({
            path: `photos/${node.slug}`,
            component: path.resolve('./src/templates/photos-template.js'),
            context: {
                slug: node.slug,
            }
        })
    })
}