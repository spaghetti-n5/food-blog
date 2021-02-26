import React from "react";
import { Link } from "gatsby";
import styles from "./menu-css-modules.module.css";

const Menu = () => (
    <div className={styles.menu}>
      <Link className={styles.menuLink} to="/ricette-vegetariane">Ricette vegetariane</Link>
    </div>
)

export default Menu
