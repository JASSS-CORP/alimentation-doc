exports.createPages = async ({ actions, graphql, reporter }) => {
    const { createPage } = actions
    const SprintTemplate = require.resolve(`./src/components/templates/SprintTemplate.tsx`)
    const result = await graphql(`
    {
        allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
          edges {
            node {
              frontmatter {
                date
                day
              }
            }
          }
        }
        
      }
    `)
    // Handle errors
    if (result.errors) {
      reporter.panicOnBuild(`Error while running GraphQL query.`)
      return
    }
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: SprintTemplate,
        context: {},
      })
    })
  }