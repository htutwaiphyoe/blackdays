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
        //     label: "12",
        //     photo:
        //         "https://scontent.xx.fbcdn.net/v/t1.0-9/153253963_265856821564209_2576278085726699505_n.jpg?_nc_cat=1&ccb=3&_nc_sid=8bfeb9&_nc_ohc=ZDgo4rl2wWsAX_osgyh&_nc_ht=scontent.xx&oh=e7786b921cb532fb1f8ee64dfeccd0d5&oe=605DC101",
        //     description:
        //         "စစ်ကောင်စီက ခန့်အပ်သော ရပ်ကွက်အုပ်ချုပ်ရေးမှူးများကို အလိုမရှိကြောင်း ဆန္ဒပြသည့် ရန်ကုန်၊ တာမွေမြို့နယ်၊ အောင်မင်္ဂလာရပ်ကွက်အတွင်းသို့ ရဲအင်အား ရာဂဏန်း လာရောက် ဖြိုခွင်းပြီး ရပ်ကွက်ထဲအထိ လိုက်လံဖမ်းဆီးသလို ပစ်ခတ်မှုတွေလည်းရှိ",
        //     date: "25",
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
