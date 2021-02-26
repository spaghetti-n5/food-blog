import React from "react";
import SEO from "./seo";
import Layout from "./layout";
import Img from "gatsby-image";

import { graphql, Link } from "gatsby";
import styles from "./blogList-css-modules.module.css";

export default function FilterPage({ data }) {
  console.log(data)
  return (
    <Layout>
      <SEO title="Filtered page" />
        <h1 className={styles.postTitle}>Ricette vegetariane</h1>
        <div className={styles.thumbPostContainer}>
          {data.allMarkdownRemark.edges.map(({ node }) => {
            const postSlug = node.frontmatter.title.toLowerCase().replace(/\s/g, '-');
            return (
                <div key={node.id} className={styles.thumbPostWrap}>
                    <Link to={`/${postSlug}`}>
                      <Img fluid={node.frontmatter.coverImage.childImageSharp.fluid} style={{ height: "184.617px" }} />
                        <p className={styles.thumbPostDate}>{node.frontmatter.date}</p>
                        <h2 className={styles.thumbPostTitle}>{node.frontmatter.title}</h2>
                        <p>{node.excerpt}</p>
                        <p className={styles.thumbCategories}>{node.frontmatter.categories.join(', ')}</p>
                  </Link>
                </div>
          )})}
        </div>
    </Layout>
  )
}

export const filterPageQuery = graphql`
query ($categories: String!) {
  allMarkdownRemark(filter: {frontmatter: {categories: {eq: $categories}}}) {
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