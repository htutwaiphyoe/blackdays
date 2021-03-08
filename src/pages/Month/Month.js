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
        //     label: "March 9, 2021",
        //     day: "Thirty Seven",
        //     hashtag: "Mar9Coup",
        //     photo:
        //         "https://lh5.googleusercontent.com/6PwceawtQVq81Spe2rERXE2L0kMI5luCikfrEGaxgqM3Vh8SoSqxanJMzluuEBRNNfQwUT3Xf3V3Ivn2cPQrEIk=w1280",
        //     description:
        //         "ဒုသမ္မတခန့်အပ်မှုနှင့်အတူ ခြေလှမ်းသွက်လာသော CRPH နှင့် အရှိန်တက်နေဆဲ အာဏာရှင်ဆန့်ကျင်ရေး",
        //     location: "37",
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
