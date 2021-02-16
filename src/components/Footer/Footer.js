import classes from "./Footer.module.scss";

const Footer = (props) => {
    return (
        <footer className={classes.Footer}>
            <p>
                Developed by HWP | Design Credit:
                <a href="https://html5up.net/" target="_blank" rel="noreferrer">
                    HTML5 UP
                </a>
            </p>
        </footer>
    );
};

export default Footer;
