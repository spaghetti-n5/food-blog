import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"
import Image from "../components/image";
import styles from "./pages-css-modules.module.css";

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div className={styles.pageWrap}>
      <div className={styles.textWrap}>
        <h2 className={styles.postTitle}>Oops, non abbiamo trovato quello che stavi cercando</h2>
        <Link to="/">- Ritorna alla home page -</Link>
      </div>
      <Image alt="404" filename="404.jpg" />
    </div>
  </Layout>
)

export default NotFoundPage
