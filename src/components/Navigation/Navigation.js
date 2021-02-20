import { NavLink } from "react-router-dom";

import classes from "./Navigation.module.scss";

const Navigation = (props) => {
    return (
        <nav className={classes.Navigation} id="Nav">
            <ul>
                <li>
                    <NavLink
                        to="/"
                        title="Home"
                        activeClassName={classes.active}
                        exact
                        className={classes.Navigation__NavItem}
                    >
                        OVERVIEW
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/history"
                        activeClassName={classes.active}
                        className={classes.Navigation__NavItem}
                    >
                        HISTORY
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/contact"
                        exact
                        activeClassName={classes.active}
                        className={classes.Navigation__NavItem}
                    >
                        CONTACT US
                    </NavLink>
                </li>
            </ul>
            <ul>
                <li>
                    <a
                        href="/"
                        title="Facebook"
                        className={classes.Navigation__IconLink}
                        target="_blank"
                    >
                        <ion-icon name="logo-facebook" title="Facebook"></ion-icon>
                    </a>
                </li>

                <li>
                    <a
                        href="/history"
                        className={classes.Navigation__IconLink}
                        target="_blank"
                        title="Instagram"
                    >
                        <ion-icon name="logo-instagram" title="Instagram"></ion-icon>
                    </a>
                </li>
                <li>
                    <a
                        href="/about"
                        className={classes.Navigation__IconLink}
                        target="_blank"
                        title="Twitter"
                    >
                        <ion-icon name="logo-twitter" title="Twitter"></ion-icon>
                    </a>
                </li>
                <li>
                    <a
                        href="/contact"
                        className={classes.Navigation__IconLink}
                        target="_blank"
                        title="Github"
                    >
                        <ion-icon name="logo-github" title="Github"></ion-icon>
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;
