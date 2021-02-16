import { Link } from "react-router-dom";

import Event from "../../components/Event/Event";
import classes from "./History.module.scss";
const History = (props) => {
    return (
        <section className={classes.History}>
            <Link to="history/month/2">
                <Event
                    photo="https://www.vsb.bc.ca/repository/sbpicturelibrary/9b018713-1211-4444-9b4e-436c003c1aee_BlackLivesMatter2.jpg?Width=840"
                    description="1st month of black burma"
                />
            </Link>
        </section>
    );
};

export default History;
