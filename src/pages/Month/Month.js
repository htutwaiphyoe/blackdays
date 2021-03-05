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
        // firebase.post("days.json", {
        //     label: "March 5, 2021",
        //     day: "Thirty Three",
        //     hashtag: "Mar5Coup",
        //     photo:
        //         "https://lh3.googleusercontent.com/jXsIu57tg70wUUib8pDlmUfufLmW4HX4cfLANoxjMPuaXF9d3e_2BTZ8PjkMHlp-DNhCk1QAVQKdSeY1Blx5dNA=w1280",
        //     description: "ဖယ်ဒရယ်အိမ်မက်နှင့်အတူ အရှိန်ပါနေဆဲအာဏာရှင်ဆန့်ကျင်ရေး",
        //     location: "33",
        // });
        getDays();
    }, []);

    if (days.length === 0) {
        return <Loader />;
    }
    return (
        <section className={classes.Month} id="Main">
            {days.map((day, i) => (
                <Event event={day} key={i} url="day" btnText="All events" />
            ))}
        </section>
    );
};

export default Month;
