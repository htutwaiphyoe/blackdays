import { useLocation } from "react-router-dom";

import Button from "../UI/Button/Button";
import classes from "./Event.module.scss";
const Event = (props) => {
    const location = useLocation();
    return (
        <article className={classes.Event}>
            <div className={classes.Event__Intro}>
                <span className={classes.Event__Intro__Date}>{props.day.date}</span>
                <h1 className={classes.Event__Intro__Heading}>
                    Day {props.day.day}
                    <br />#{props.day.hashtag}
                </h1>
            </div>
            <figure className={classes.Event__Image}>
                <img src={props.day.photo} alt="hero" />
            </figure>
            <p className={classes.Event__Paragraph}>{props.day.description}</p>
            <Button path={`${location.pathname}/day/${props.day.location}`}>All events</Button>
        </article>
    );
};

export default Event;
