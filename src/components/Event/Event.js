import "./Event.scss";
const Event = (props) => {
    return (
        <div className="Event">
            <figure className="Event__Photo">
                <img src={props.photo} alt="lee bl ma aye loe" />
            </figure>
            <div className="Event__Content">
                <p>{props.description}</p>
            </div>
        </div>
    );
};

export default Event;
