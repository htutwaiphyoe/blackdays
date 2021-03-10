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
        //     label: "22",
        //     photo:
        //         "https://scontent.xx.fbcdn.net/v/t1.0-9/158730210_203938471522037_7349191497684162101_o.jpg?_nc_cat=1&ccb=1-3&_nc_sid=730e14&_nc_ohc=EAwiZ0QxyoYAX8rFCxy&_nc_ht=scontent.xx&oh=3a164c3dccc1187b39c32813a6d19aaf&oe=60706C3C",
        //     description:
        //         "မြန်မာပြည်သားဆို အမြဲ အပိုတောင်လေ့ရှိတဲ့ ထိုင်းနိုင်ငံက Taxi.ကားဆရာများက UN.ရုံးရှေ့ဆန္ဒလာပြသူတွေကို ပိုက်ဆံမယူပဲ လိုက်ပို့ပေး",
        //     date: "38",
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
