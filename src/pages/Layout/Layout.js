import Intro from "../../components/Intro/Intro";
import Navigation from "../../components/Navigation/Navigation";

import classes from "./Layout.module.scss";
const Layout = (props) => {
    return (
        <main className={classes.Layout}>
            <Intro />
            <Navigation />
            {props.children}
        </main>
    );
};

export default Layout;
