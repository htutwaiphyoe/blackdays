import { Link } from "react-router-dom";

import classes from "./Button.module.scss";
const Button = (props) => {
    return (
        <div className={classes.Button}>
            <Link to={props.path}>{props.children}</Link>
        </div>
    );
};

export default Button;
