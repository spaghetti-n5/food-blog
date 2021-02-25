import React from "react";
import { graphql, Link } from "gatsby";
import Img from "gatsby-image";
import Layout from "./layout"

import styles from "./blogPost-css-modules.module.css";

export default function BlogPost({
  data, // this prop will be injected by the GraphQL query below.
  pageContext,
}) {
  console.log(pageContext)
  const { previous, next } = pageContext;
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  const featuredImgFluid = frontmatter.coverImage.childImageSharp.fluid

  const nextPathSlug = next && next.frontmatter.title.toLowerCase().replace(/\s/g, '-');
  const previousPathSlug = previous && previous.frontmatter.title.toLowerCase().replace(/\s/g, '-');

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
      <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={`/${previousPathSlug}`} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={`/${nextPathSlug}`} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
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