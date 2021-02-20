import { useLocation } from "react-router-dom";
import { useEffect } from "react";

import Button from "../../components/UI/Button/Button";
import classes from "./Day.module.scss";
const Day = (props) => {
    const location = useLocation();
    useEffect(() => {
        document.getElementById("Nav").scrollIntoView();
    }, []);
    return (
        <section className={classes.Day} id="Main">
            <article>
                <div className={classes.Day__Intro}>
                    <span className={classes.Day__Intro__Date}>1</span>
                </div>
                <figure className={classes.Day__Image}>
                    <img
                        src="https://scontent.xx.fbcdn.net/v/t1.15752-9/146550847_417038066020608_1685942869148427438_n.jpg?_nc_cat=103&ccb=3&_nc_sid=ae9488&_nc_ohc=F5Yu3wFUsnAAX8OeXD7&_nc_ht=scontent.xx&oh=f8999461f704e84dcd15101411c522cd&oe=604F920A"
                        alt="hero"
                    />
                </figure>
                <p className={classes.Day__Paragraph}>
                    On this Day, Military took country's power over the elected party. This'll show
                    you all historic events that happened during that Day. Vive la révolution
                </p>
                <Button path={`${location.pathname}/asdfsdafsdf`}>Full story</Button>
            </article>
            <article>
                <div className={classes.Day__Intro}>
                    <span className={classes.Day__Intro__Date}>2</span>
                </div>
                <figure className={classes.Day__Image}>
                    <img
                        src="https://scontent.xx.fbcdn.net/v/t1.15752-9/146550847_417038066020608_1685942869148427438_n.jpg?_nc_cat=103&ccb=3&_nc_sid=ae9488&_nc_ohc=F5Yu3wFUsnAAX8OeXD7&_nc_ht=scontent.xx&oh=f8999461f704e84dcd15101411c522cd&oe=604F920A"
                        alt="hero"
                    />
                </figure>
                <p className={classes.Day__Paragraph}>
                    On this Day, Military took country's power over the elected party. This'll show
                    you all historic events that happened during that Day. Vive la révolution
                </p>
                <Button path={`${location.pathname}/asdfsdafsdf`}>Full story</Button>
            </article>
            <article>
                <div className={classes.Day__Intro}>
                    <span className={classes.Day__Intro__Date}>3</span>
                </div>
                <figure className={classes.Day__Image}>
                    <img
                        src="https://scontent.xx.fbcdn.net/v/t1.15752-9/146550847_417038066020608_1685942869148427438_n.jpg?_nc_cat=103&ccb=3&_nc_sid=ae9488&_nc_ohc=F5Yu3wFUsnAAX8OeXD7&_nc_ht=scontent.xx&oh=f8999461f704e84dcd15101411c522cd&oe=604F920A"
                        alt="hero"
                    />
                </figure>
                <p className={classes.Day__Paragraph}>
                    On this Day, Military took country's power over the elected party. This'll show
                    you all historic events that happened during that Day. Vive la révolution
                </p>
                <Button path={`${location.pathname}/asdfsdafsdf`}>Full story</Button>
            </article>
            <article>
                <div className={classes.Day__Intro}>
                    <span className={classes.Day__Intro__Date}>4</span>
                </div>
                <figure className={classes.Day__Image}>
                    <img
                        src="https://scontent.xx.fbcdn.net/v/t1.15752-9/146550847_417038066020608_1685942869148427438_n.jpg?_nc_cat=103&ccb=3&_nc_sid=ae9488&_nc_ohc=F5Yu3wFUsnAAX8OeXD7&_nc_ht=scontent.xx&oh=f8999461f704e84dcd15101411c522cd&oe=604F920A"
                        alt="hero"
                    />
                </figure>
                <p className={classes.Day__Paragraph}>
                    On this Day, Military took country's power over the elected party. This'll show
                    you all historic events that happened during that Day. Vive la révolution
                </p>
                <Button path={`${location.pathname}/asdfsdafsdf`}>Full story</Button>
            </article>
        </section>
    );
};

export default Day;
