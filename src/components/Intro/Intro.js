import classes from "./Intro.module.scss";

const Intro = (props) => {
    const onContinueClick = (e) => {
        document.getElementById("Nav").scrollIntoView();
    };
    return (
        <header className={classes.Intro}>
            <h1>
                spring <br />
                revolution
            </h1>
            <p>
                History of Burma (Myanmar) was repeated again at 1st February 2021.
                <br />
                This is what our generation Y and Z did against Military Coup.
            </p>
            <span onClick={onContinueClick}>
                <ion-icon name="arrow-down-circle-outline"></ion-icon>
            </span>
        </header>
    );
};

export default Intro;
