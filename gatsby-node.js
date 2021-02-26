exports.createPages = async ({ actions, graphql, reporter }) => {
    const { createPage } = actions
  
    const blogPostTemplate = require.resolve(`./src/components/blogPost.js`)
    const blogListTemplate = require.resolve(`./src/components/blogList.js`)
    const filterPageTemplate = require.resolve(`./src/components/filterPage.js`)

    const result = await graphql(`
      {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          limit: 1000
        ) {
          edges {
            node {
              frontmatter {
                title
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
  
    // Create blog post list pages
    const posts = result.data.allMarkdownRemark.edges
    const postsPerPage = 3;
    const numPages = Math.ceil(posts.length / postsPerPage)
    Array.from({ length: numPages }).forEach((_, i) => {
      createPage({
        path: i === 0 ? `/` : `/${i + 1}`,
        component: blogListTemplate,
        context: {
          limit: postsPerPage,
          skip: i * postsPerPage,
          numPages,
          currentPage: i+1,
          try: i,
        },
      })
    })

    // Create blog posts pages.
    result.data.allMarkdownRemark.edges.forEach(({ node }, index) => {
      const postSlug = node.frontmatter.title.toLowerCase().replace(/\s/g, '-');
      const next = index === result.data.allMarkdownRemark.edges.length - 1 ? null : result.data.allMarkdownRemark.edges[index + 1].node
      const previous = index === 0 ? null : result.data.allMarkdownRemark.edges[index - 1].node
      createPage({
        path: postSlug,
        component: blogPostTemplate,
        context: {
          title: node.frontmatter.title,
          previous,
          next,
        },
      })
    })

    // create filter page ricette-vegetariane
    result.data.allMarkdownRemark.edges.forEach(() => {
      createPage({
        path: '/ricette-vegetariane',
        component: filterPageTemplate,
        context: {
          categories: 'ricette-vegetariane',
        },
      })
    })
  }