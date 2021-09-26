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
}