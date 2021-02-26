import React from "react";
import { graphql, Link } from "gatsby";
import Img from "gatsby-image";
import Layout from "./layout"

import styles from "./blogPost-css-modules.module.css";

export default function BlogPost({
  data, // this prop will be injected by the GraphQL query below.
  pageContext,
}) {
  console.log("pageContextBlogPost", pageContext)
  const { previous, next } = pageContext;
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
      <ul className={styles.navigationWrap}>
          <li>
            {previous && (
              <Link to={`/${previous.frontmatter.slug}`} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={`/${next.frontmatter.slug}`} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "DD MMMM YYYY" locale: "it")
        title
        slug
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