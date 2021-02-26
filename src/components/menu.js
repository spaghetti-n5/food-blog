import React from "react";
import { Link } from "gatsby";
import styles from "./menu-css-modules.module.css";

const Menu = () => (
    <div className={styles.menu}>
        <Link className={styles.menuLink} to="/antipasti-ed-aperitivi">Antipasti ed aperitivi</Link>
        <Link className={styles.menuLink} to="/primi-piatti">Primi piatti</Link>
        <Link className={styles.menuLink} to="/secondi-piatti">Secondi piatti</Link>
        <Link className={styles.menuLink} to="/dolci">Dolci</Link>
        <Link className={styles.menuLink} to="/ricette-vegetariane">Ricette vegetariane</Link>
        <Link className={styles.menuLink} to="/cucine-del-mondo">Cucine del mondo</Link>
    </div>
)

export default Menu;
