import { useState, useEffect } from "react";
import Event from "../../components/Event/Event";
import Loader from "../../components/UI/Loader/Loader";
import firebase from "../../api/firebase";
import classes from "./Month.module.scss";

const Month = (props) => {
    const [days, setDays] = useState([]);
    const getDays = async () => {
        const response = await firebase.get("days.json");
        let data = [];
        for (let i in response.data) {
            data.push({ id: i, ...response.data[i] });
        }
        setDays(data);
    };
    useEffect(() => {
        document.getElementById("Nav").scrollIntoView();
        // firebase.post("events.json", {
        //     label: "21",
        //     photo:
        //         "https://scontent.xx.fbcdn.net/v/t1.0-9/156210410_1174073503022278_1481213591621999698_n.jpg?_nc_cat=111&ccb=3&_nc_sid=8bfeb9&_nc_ohc=Dx0o_mnCjuAAX_D0Q8C&_nc_ht=scontent.xx&oh=999e950d338a2683e5f4869d779fd3c7&oe=6065B94E",
        //     description: "မင်းသမီး Amanda Seyfried ရဲ့ အမျိုးသား မြန်မာ့အရေးပြောပြီ ",
        //     date: "31",
        // });
        getDays();
    }, []);

    if (days.length === 0) {
        return <Loader />;
    }
    return (
        <section className={classes.Month} id="Main">
            {days.map((day, i) => (
                <Event event={day} key={i} url="days" btnText="All events" />
            ))}
        </section>
    );
};

export default Month;
