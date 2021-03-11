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
        firebase.post("events.json", {
            label: "11",
            photo:
                "https://scontent-mia3-1.xx.fbcdn.net/v/t1.0-9/159814484_10160907502958128_3047089533984058890_o.jpg?_nc_cat=1&ccb=1-3&_nc_sid=0debeb&_nc_ohc=u98-56E97RAAX9mLe7v&_nc_ht=scontent-mia3-1.xx&oh=7b565cfb745ef43bb8e5ea2a1769c1ba&oe=60709F1A",
            description:
                "မန္တ​လေးမြို့ ၃၆ လမ်း ၃၈ လမ်းကြား ၈၆ လမ်း ၈၇ ကြား လမ်း ရှမ်းဝိုင်းရပ်ကွက်ကို စစ်တပ်နဲ့ ရဲ တပ်ဖွဲ့၀င်​တွေ​ ရောက်လာပြီး ​နေအိမ်တွေကို ​သေနတ်​တွေပစ်​ဖောက်၊ ​လေးဂွ​တွေ ရာဘာကျည်​တွေနဲ့ ပစ်ပြီး ဖျက်စီး",
            date: "40",
        } );
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
