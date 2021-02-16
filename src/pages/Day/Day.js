import { useEffect, useState } from "react";

import firebase from "../../api/firebase";
import Event from "../../components/Event/Event";
import "./Day.scss";
const Day = (props) => {
    const [events, setEvents] = useState([]);
    const getEvents = async () => {
        const response = await firebase.get(`events.json?orderBy="day"equalTo=${13}`);
        let events = [];
        for (let i in response.data) {
            events.push({ id: i, ...response.data[i] });
        }
        setEvents(events);
    };
    useEffect(() => {
        getEvents();
    }, []);
    return (
        <section className="Day">
            <h1 className="Day__heading">
                Day 9<span className="Day__heading--date">9.2.2021</span>
            </h1>
            <div className="Day__Events">
                {events.map((event) => (
                    <Event photo={event.photo} description={event.description} key={event.id} />
                ))}
            </div>
        </section>
    );
};

export default Day;
