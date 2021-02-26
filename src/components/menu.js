import React from "react";
import { Link } from "gatsby";
import styles from "./menu-css-modules.module.css";

const Menu = () => (
    <div className={styles.social}>
      <Link to="/chi-sono">Chi sono</Link>
    </div>
)

export default Menu
