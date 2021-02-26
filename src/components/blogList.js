import React from "react";
import { graphql, Link } from "gatsby";

import SEO from "../components/seo";
import Layout from "../components/layout";
import Img from "gatsby-image";

import styles from "./blogList-css-modules.module.css";

export default function BlogList({ data, pageContext }) {
  console.log(data.allMarkdownRemark.edges)
  console.log(pageContext)

  const { currentPage, numPages } = pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage = currentPage - 1 === 1 ? '/' : `/`+ ((currentPage - 1).toString())
  const nextPage = `/`+ ((currentPage + 1).toString())
  return (
    <Layout>
      <SEO title="Posts" />
        <h4>{data.allMarkdownRemark.totalCount} Ricette</h4>
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
        <ul className={styles.paginationWrap}>
          {!isFirst && (
            <Link to={prevPage} rel="prev">
              ← Pagina precedente
            </Link>
          )}
          {Array.from({ length: numPages }, (_, i) => (
            <li key={`pagination-number${i + 1}`}>
              <Link
                to={`/${i === 0 ? '' : i + 1}`}
                style={{
                  fontWeight: i + 1 === currentPage ? 'bold' : 'normal',
                }}
              >
                {i + 1}
              </Link>
            </li>
          ))}
          {!isLast && (
            <Link to={nextPage} rel="next">
              Pagina successiva →
            </Link>
          )}
        </ul>
    </Layout>
  )
}

export const query = graphql`
  query($skip: Int!, $limit: Int!){
    allMarkdownRemark(
      sort: {fields: frontmatter___date, order: DESC},
      limit: $limit
      skip: $skip
      ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM YYYY", locale: "it")
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
