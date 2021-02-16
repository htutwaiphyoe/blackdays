import Intro from "../../components/Intro/Intro";
import Navigation from "../../components/Navigation/Navigation";
import Footer from "../../components/Footer/Footer";

import classes from "./Layout.module.scss";
const Layout = (props) => {
    return (
        <main className={classes.Layout}>
            <Intro />
            <Navigation />
            {props.children}
            <Footer />
        </main>
    );
};

export default Layout;
