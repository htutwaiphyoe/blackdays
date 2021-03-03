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
        //     label: "19",
        //     photo:
        //         "https://scontent.xx.fbcdn.net/v/t1.0-9/156015816_2817699181815570_6404445998557969482_o.jpg?_nc_cat=110&ccb=3&_nc_sid=730e14&_nc_ohc=iXGmj0_cxSEAX8kbR8s&_nc_ht=scontent.xx&oh=c3aa51e1a3795fbda184fd84470e5e83&oe=60657349",
        //     description:
        //         "ရန်ကုန် မြောက်ဥက္ကလာတွင် ဆေးတပ်ဖွဲ့ဝင်များကို ဖမ်းဆီး နှိပ်စက်အနိုင်ကျင့်",
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
