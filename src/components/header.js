import React from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import styles from "./header-css-modules.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare, faLinkedin, faInstagramSquare } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Header = ({ siteTitle }) => (
  <header>
    <div className={styles.social}>
      <div>
        <a className={styles.icons} href='https://github.com/spaghetti-n5'>
          <FontAwesomeIcon icon={faGithubSquare} size="lg" />
        </a>
        <a className={styles.icons} href='https://www.linkedin.com/in/eleonora-baret-4551a632'>
          <FontAwesomeIcon icon={faLinkedin} size="lg" />
        </a>
        <a className={styles.icons} href='https://www.instagram.com/cucinadalnord.it/'>
          <FontAwesomeIcon icon={faInstagramSquare} size="lg" />
        </a>
        <a className={styles.icons} href='mailto: cucinadalnord@gmail.com'>
          <FontAwesomeIcon icon={faEnvelope} size="lg" />
        </a>
      </div>
      <Link to="/chi-sono">Chi sono</Link>
    </div>
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
