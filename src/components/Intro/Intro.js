import classes from "./Intro.module.scss";

const Intro = (props) => {
    return (
        <header className={classes.Intro}>
            <h1>
                burma <br />
                blackdays
            </h1>
            <p>
                History of Burma (Myanmar) was repeated again at 1st February 2021.
                <br />
                This is what our generation Y and Z did against Military Coup.
            </p>
            <a href="#navigation">
                <ion-icon name="arrow-down-circle-outline"></ion-icon>
            </a>
        </header>
    );
};

export default Intro;
