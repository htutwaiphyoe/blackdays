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
        //         "https://scontent-sin6-1.xx.fbcdn.net/v/t1.0-9/150112399_121054173356119_951073405035202345_o.jpg?_nc_cat=1&ccb=3&_nc_sid=8bfeb9&_nc_ohc=F7zuw_uIsvgAX9yzgXg&_nc_ht=scontent-sin6-1.xx&oh=fa31dc61e368230a3b966ebf9520c8ca&oe=6060CD7E",
        //     description:
        //         "Milk Tea Alliance နေ့မှာ ရဲတပ်ဖွဲ့၏ သတ်ဖြတ်မှုကြောင့် နိုင်ငံတစ်ဝှမ်းအသက်ပေးခဲ့ရသူများစာရင်း",
        //     date: "28",
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
