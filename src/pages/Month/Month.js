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
        //     label: "18",
        //     photo:
        //         "https://scontent.xx.fbcdn.net/v/t1.0-9/154967522_2957627754559927_6349218115892028655_n.jpg?_nc_cat=109&ccb=3&_nc_sid=730e14&_nc_ohc=XKIXBm01lTIAX_oidlI&_nc_ht=scontent.xx&oh=692c216706cfb440c90b7e2b1e96ee20&oe=60649713",
        //     description: "ဆန္ဒပြသူများကို ပစ်ခတ်ဖြိုခွင်းအပြီး ပျော်ရွှင်နေကြသော ရဲများ",
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
