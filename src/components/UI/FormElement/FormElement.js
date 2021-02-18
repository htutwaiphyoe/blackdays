import classes from "./FormElement.module.scss";

const FormElement = (props) => {
    switch (props.type) {
        case "textarea":
            return (
                <div className={classes.FormElement}>
                    <label>{props.label}</label>
                    <textarea rows="10" />
                </div>
            );
        case "select":
            return (
                <div className={classes.FormElement}>
                    <label htmlFor="">{props.label}</label>
                    <select name="" id=""></select>
                </div>
            );
        default:
            return (
                <div className={classes.FormElement}>
                    <label htmlFor="">{props.label}</label>
                    <input type="text" />
                </div>
            );
    }
};

export default FormElement;
