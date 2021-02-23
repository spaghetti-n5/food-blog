import React from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import styles from "./header-css-modules.module.css";

const Header = ({ siteTitle }) => (
  <header>
    <div className={styles.header}>
      <h1 className={styles.headerTitle}>
        <Link to="/">
          {siteTitle}
        </Link>
      </h1>
      <h2 className={styles.headerSubTitle}> - in cerca di felicitá - </h2>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: '',
}

export default Header
