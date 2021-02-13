import { Link } from "react-router-dom";

import "./Navigation.scss";

const Navigation = (props) => {
    return (
        <nav className="Navigation">
            <h1>Black Days</h1>
            <ul>
                <li>
                    <Link to="/" exact title="Home">
                        HOME
                    </Link>
                </li>
                <li>
                    <Link to="/about" exact>
                        ABOUT
                    </Link>
                </li>
                <li>
                    <Link to="/history" exact>
                        HISTORY
                    </Link>
                </li>
                <li>
                    <Link to="/contact" exact>
                        CONTACT
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;
