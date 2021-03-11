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
            label: "24",
            photo:
                "https://scontent-mia3-1.xx.fbcdn.net/v/t1.0-9/158349590_897015257782618_3989718265167184121_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=RxtzRVWINc4AX8_sP62&_nc_ht=scontent-mia3-1.xx&oh=e226bdf6b17c4ce7b23510f5006b74ff&oe=60724063",
            description:
                "သေဆုံးနဲ့ ကျဆုံးခဲ့မှု ရန်ကုန် မြောက်ဒဂုံတွင် ၁ ဦး၊ ပခုက္ကူ မြိုင်မြို့တွင် အနည်းဆုံး ၈ ဦး၊ မန္တလေး၊ ပဲခူးနှင့် တောင်ငူ၊ ထားဝယ် တို့တွင် ၁ ဦးစီ၊ စုစုပေါင်း ၁၃ ဦး ရှိခဲ့ပါတယ်။ ဒဏ်ရာရရှိသူ အနည်းဆုံး ၁၀ ဦးထက် မနည်းရှိခဲ့",
            date: "39",
        });
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
