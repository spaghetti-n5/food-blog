import React from "react"
import { graphql, Link } from "gatsby";

import SEO from "../components/seo";
import Layout from "../components/layout"
import Image from "../components/image"
import Img from "gatsby-image"

import styles from "./index-css-modules.module.css"

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
        <div className={styles.thumbPostContainer}>
          {data.allMarkdownRemark.edges.map(({ node }) => {
            const postSlug = node.frontmatter.title.toLowerCase().replace(/\s/g, '-');
            return (
                <div key={node.id} className={styles.thumbPostWrap}>
                    <Link to={postSlug}>
                      <Img fluid={node.frontmatter.coverImage.childImageSharp.fluid} style={{ height: "184.617px" }} />
                        <p className={styles.thumbPostDate}>{node.frontmatter.date}</p>
                        <h2 className={styles.thumbPostTitle}>{node.frontmatter.title}</h2>
                        <p>{node.excerpt}</p>
                        <p className={styles.thumbCategories}>{node.frontmatter.categories.join(', ')}</p>
                  </Link>
                </div>
          )})}
        </div>
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
            date(formatString: "DD MMMM YYYY")
            categories
            coverImage {
              childImageSharp {
                fluid(maxWidth: 380) {
                  ...GatsbyImageSharpFluid
                  ...GatsbyImageSharpFluidLimitPresentationSize
                }
              }
            }
          }
          excerpt
        }
      }
    }
  }
`
