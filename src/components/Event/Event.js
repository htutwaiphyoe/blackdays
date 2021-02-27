import { useLocation } from "react-router-dom";

import Button from "../UI/Button/Button";
import classes from "./Event.module.scss";

const Event = (props) => {
    const location = useLocation();
    let url = `${location.pathname}`;
    if (props.url) {
        url += `/${props.url}/${props.event.location}`;
    } else {
        url += "/asdfsadf";
    }
    return (
        <article className={classes.Event}>
            <div className={classes.Event__Intro}>
                <span className={classes.Event__Intro__Label}>{props.label ? props.label : props.event.label}</span>
                {props.event.day && (
                    <h1 className={classes.Event__Intro__Heading}>
                        Day {props.event.day}
                        <br />#{props.event.hashtag}
                    </h1>
                )}
            </div>
            <figure className={classes.Event__Image}>
                <img src={props.event.photo} alt="hero" loading="lazy" />
            </figure>
            <p className={classes.Event__Paragraph}>{props.event.description}</p>
            <Button path={url}>{props.btnText}</Button>
        </article>
    );
};

export default Event;
