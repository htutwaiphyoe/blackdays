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
        //     label: "17",
        //     photo:
        //         "https://scontent-sin6-1.xx.fbcdn.net/v/t1.0-9/154482648_3801543749927458_1759448197505392935_n.jpg?_nc_cat=1&ccb=3&_nc_sid=8bfeb9&_nc_ohc=HjutEJOIWIQAX8OzKJU&_nc_ht=scontent-sin6-1.xx&oh=c310a1999ae0d74f9650b679c2546b55&oe=605E9F0C",
        //     description:
        //         "မနက်ဖြန်မှာ ပြုလုပ်မယ့် အာဆီယံနိုင်ငံတွေရဲ့ Milk Tea Alliance အတွက် တောင်ကြီးမှာ ဖယောင်းတိုင်ထွန်းဆုတောင်း",
        //     date: "27",
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
