import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/images/logo/sunanda_logo.png";
import NavButton from "../ui/Button/NavButton";
import styles from "./navbar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = () => {
    return (
        <header>
            <nav>
                <ul className={styles.menu}>
                    <li>
                        <NavLink to="/">
                            <img src={Logo} alt="Sunanda logotyp" className={styles.logo} />
                        </NavLink>
                    </li>
                    <li className={styles.toggle}>
                        <input className={styles["menu-btn"]} type="checkbox" id="menu-btn" />
                        <label className={styles["menu-icon"]} htmlFor="menu-btn">
                            <span className={styles["nav-icon"]}></span>
                        </label>
                    </li>
                    <li className={styles["menu-item"]}>
                        <NavLink to="/NET">[ .NET ]</NavLink>
                    </li>
                    <li className={styles["menu-item"]}>
                        <NavLink to="/GDK">[ GDK ]</NavLink>
                    </li>
                    <li className={styles["menu-item"]}>
                        <NavLink to="/MKV">[ MKV ]</NavLink>
                    </li>
                    <li className={styles["menu-item"]}>
                        <NavLink to="/about">[ Om mig ]</NavLink>
                    </li>
                    <li className={styles["menu-item"]}>
                        <div className={styles["navbar-container-btn"]}>
                            <span>
                                <NavButton href="/contact" background="primary">
                        <FontAwesomeIcon icon="message" />
                                    Kontakta mig
                                </NavButton>
                            </span>
                        </div>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;
