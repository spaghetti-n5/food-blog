import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import Layout from "./layout"

import styles from "./blogPost-css-modules.module.css";

export default function BlogPost({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  const featuredImgFluid = frontmatter.coverImage.childImageSharp.fluid
  return (
    <Layout>
      <div className={styles.postContainer}>
        <h2 className={styles.postDate}>{frontmatter.date}</h2>
        <h1 className={styles.postTitle}>{frontmatter.title}</h1>
        <Img fluid={featuredImgFluid} />
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($title: String!) {
    markdownRemark(frontmatter: { title: { eq: $title } }) {
      html
      frontmatter {
        date(formatString: "DD MMMM YYYY")
        title
        coverImage {
          childImageSharp {
            fluid(maxWidth: 600) {
              ...GatsbyImageSharpFluid
              ...GatsbyImageSharpFluidLimitPresentationSize
            }
          }
        }
      }
    }
  }
`