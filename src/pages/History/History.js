import { useLocation } from "react-router-dom";

import Button from "../../components/UI/Button/Button";
import classes from "./History.module.scss";

const History = (props) => {
    const location = useLocation();

    return (
        <section className={classes.History} id="Main">
            <div className={classes.History__Intro}>
                <span className={classes.History__Intro__Date}>February, 2021</span>
                <h1 className={classes.History__Intro__Heading}>
                    First Month
                    <br />
                    of history
                </h1>
                <p className={classes.History__Paragraph}>
                    On this month, Military took country's power over the elected party.
                    <br />
                    This'll show you all historic events that happened during that month.
                    <br />
                    Vive la révolution
                </p>
            </div>
            <figure className={classes.History__Image}>
                <img
                    src="https://scontent.xx.fbcdn.net/v/t1.15752-9/146550847_417038066020608_1685942869148427438_n.jpg?_nc_cat=103&ccb=3&_nc_sid=ae9488&_nc_ohc=F5Yu3wFUsnAAX8OeXD7&_nc_ht=scontent.xx&oh=f8999461f704e84dcd15101411c522cd&oe=604F920A"
                    alt="hero"
                />
            </figure>

            <Button path={`${location.pathname}/month/1`}>Full story</Button>
        </section>
    );
};

export default History;
