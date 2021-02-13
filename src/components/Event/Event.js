import classes from "./Event.module.scss";
const Event = (props) => {
    return (
        <div className={classes.Event}>
            <figure className={classes.Event__Photo}>
                <img src={props.photo} alt="lee bl ma aye loe" />
            </figure>
            <div className={classes.Event__Content}>
                <p>{props.description}</p>
            </div>
        </div>
    );
};

export default Event;
