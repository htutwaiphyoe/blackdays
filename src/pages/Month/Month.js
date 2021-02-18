import { useLocation } from "react-router-dom";

import Button from "../../components/UI/Button/Button";
import classes from "./Month.module.scss";
const Month = (props) => {
    const location = useLocation();
    return (
        <section className={classes.Month} id="Main">
            <article>
                <div className={classes.Month__Intro}>
                    <span className={classes.Month__Intro__Date}>February 1, 2021</span>
                    <h1 className={classes.Month__Intro__Heading}>
                        Day One
                        <br />
                        #Feb1Coup
                    </h1>
                </div>
                <figure className={classes.Month__Image}>
                    <img
                        src="https://scontent.xx.fbcdn.net/v/t1.15752-9/146550847_417038066020608_1685942869148427438_n.jpg?_nc_cat=103&ccb=3&_nc_sid=ae9488&_nc_ohc=F5Yu3wFUsnAAX8OeXD7&_nc_ht=scontent.xx&oh=f8999461f704e84dcd15101411c522cd&oe=604F920A"
                        alt="hero"
                    />
                </figure>
                <p className={classes.Month__Paragraph}>
                    On this month, Military took country's power over the elected party. This'll
                    show you all historic events that happened during that month. Vive la révolution
                </p>
                <Button path={`${location.pathname}/day/1`}>Full story</Button>
            </article>
            <article>
                <div className={classes.Month__Intro}>
                    <span className={classes.Month__Intro__Date}>February 2, 2021</span>
                    <h1 className={classes.Month__Intro__Heading}>
                        Day One
                        <br />
                        #Feb1Coup
                    </h1>
                </div>
                <figure className={classes.Month__Image}>
                    <img
                        src="https://scontent.xx.fbcdn.net/v/t1.15752-9/146550847_417038066020608_1685942869148427438_n.jpg?_nc_cat=103&ccb=3&_nc_sid=ae9488&_nc_ohc=F5Yu3wFUsnAAX8OeXD7&_nc_ht=scontent.xx&oh=f8999461f704e84dcd15101411c522cd&oe=604F920A"
                        alt="hero"
                    />
                </figure>
                <p className={classes.Month__Paragraph}>
                    On this month, Military took country's power over the elected party. This'll
                    show you all historic events that happened during that month. Vive la révolution
                </p>
                <Button path={`${location.pathname}/day/1`}>Full story</Button>
            </article>
            <article>
                <div className={classes.Month__Intro}>
                    <span className={classes.Month__Intro__Date}>February 3, 2021</span>
                    <h1 className={classes.Month__Intro__Heading}>
                        Day One
                        <br />
                        #Feb1Coup
                    </h1>
                </div>
                <figure className={classes.Month__Image}>
                    <img
                        src="https://scontent.xx.fbcdn.net/v/t1.15752-9/146550847_417038066020608_1685942869148427438_n.jpg?_nc_cat=103&ccb=3&_nc_sid=ae9488&_nc_ohc=F5Yu3wFUsnAAX8OeXD7&_nc_ht=scontent.xx&oh=f8999461f704e84dcd15101411c522cd&oe=604F920A"
                        alt="hero"
                    />
                </figure>
                <p className={classes.Month__Paragraph}>
                    On this month, Military took country's power over the elected party. This'll
                    show you all historic events that happened during that month. Vive la révolution
                </p>
                <Button path={`${location.pathname}/day/1`}>Full story</Button>
            </article>
            <article>
                <div className={classes.Month__Intro}>
                    <span className={classes.Month__Intro__Date}>February 4, 2021</span>
                    <h1 className={classes.Month__Intro__Heading}>
                        Day One
                        <br />
                        #Feb1Coup
                    </h1>
                </div>
                <figure className={classes.Month__Image}>
                    <img
                        src="https://scontent.xx.fbcdn.net/v/t1.15752-9/146550847_417038066020608_1685942869148427438_n.jpg?_nc_cat=103&ccb=3&_nc_sid=ae9488&_nc_ohc=F5Yu3wFUsnAAX8OeXD7&_nc_ht=scontent.xx&oh=f8999461f704e84dcd15101411c522cd&oe=604F920A"
                        alt="hero"
                    />
                </figure>
                <p className={classes.Month__Paragraph}>
                    On this month, Military took country's power over the elected party. This'll
                    show you all historic events that happened during that month. Vive la révolution
                </p>
                <Button path={`${location.pathname}/day/1`}>Full story</Button>
            </article>
        </section>
    );
};

export default Month;
