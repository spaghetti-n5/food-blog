import React from "react"
import { graphql, Link } from "gatsby";

import SEO from "../components/seo";
import Layout from "../components/layout"
import Image from "../components/image"

export default function Home({ data }) {
  console.log(data)
  return (
    <Layout>
      <SEO title="Home" />
      <div>
        <h1>Tutte le ricette</h1>
        <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
          <Image />
        </div>
        <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
        {data.allMarkdownRemark.edges.map(({ node }) => {
          const postSlug = node.frontmatter.title.toLowerCase().replace(/\s/g, '-');
          return (
            <Link to={postSlug} style={{textDecoration: 'none'}}>
              <div key={node.id}>
                <h3>
                  {node.frontmatter.title}{" "}
                  <span
                  >
                    — {node.frontmatter.date}
                  </span>
                </h3>
                <p>{node.excerpt}</p>
              </div>
            </Link>
          )})}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          excerpt
        }
      }
    }
  }
`
