import { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";

import Loader from "../../components/UI/Loader/Loader";
import firebase from "../../api/firebase";
import Event from "../../components/Event/Event";
import classes from "./Day.module.scss";

const Day = (props) => {
    const [events, setEvents] = useState([]);
    const { dayId } = useParams();
    const getEvents = useCallback(async () => {
        const response = await firebase.get(`events.json?equalTo="${dayId}"&orderBy="date"`);
        let data = [];
        for (let i in response.data) {
            data.push({ id: i, ...response.data[i] });
        }
        setEvents(data);
    }, [dayId]);
    useEffect(() => {
        document.getElementById("Nav").scrollIntoView();
        getEvents();
    }, [getEvents]);

    if (events.length === 0) {
        return <Loader />;
    }
    return (
        <section className={classes.Day} id="Main">
            {events.map((event, i) => (
                <Event event={event} key={i} btnText="Full story" label={i + 1} />
            ))}
        </section>
    );
};

export default Day;
