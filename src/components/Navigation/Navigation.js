import "./Navigation.scss";

const Navigation = (props) => {
    return (
        <nav className="Navigation">
            <h1>Black Days</h1>
            <ul>
                <li>
                    <a href="#" title="Home">
                        HOME
                    </a>
                </li>
                <li>
                    <a href="#">ABOUT</a>
                </li>
                <li>
                    <a href="#">
                        HISTORY <i class="fas fa-caret-down"></i>
                    </a>
                </li>
                <li>
                    <a href="#">CONTACT US</a>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;
