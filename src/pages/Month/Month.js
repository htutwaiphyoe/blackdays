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
        //     label: "March 7, 2021",
        //     day: "Thirty Five",
        //     hashtag: "Mar7Coup",
        //     photo:
        //         "https://lh4.googleusercontent.com/DL4sYzkC20pMdPbQri3Fo_f1S8zCpfaAbN9Ud4ByIpG-szq3TWmDwUVEZi-vNwkW9H7m4Fz5pUooTe8FZqv_qiuaohl67qrOVnwEylteSgHBobzavXSg9ORn9BfJYFX26A=w1280",
        //     description: "အာဏာရှင်ဆန့်ကျင်ရေး 5ပတ်မြောက်နေ့",
        //     location: "35",
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
