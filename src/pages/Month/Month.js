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
        //     label: "24",
        //     photo:
        //         "https://scontent.xx.fbcdn.net/v/t1.0-9/154783615_969912593413990_330423587558787854_o.jpg?_nc_cat=103&ccb=3&_nc_sid=8bfeb9&_nc_ohc=t0cSg-LcOHMAX8qI384&_nc_ht=scontent.xx&oh=0ab7c8c693ba521dd853403ee54186a5&oe=606579F6",
        //     description:
        //         "မန်းလေး ၅၈၊၁၀၇လမ်းမှာ ကားနဲ့တိုက်ပြီး ထွက်ပြေး ၅၆လမ်းမှာမိပါတယ် ကားက လိုင်စင်နံပါတ်ပြားမပါပါဘူး လူသုံးယောက်ထိသွားပါတယ် လူကြီးတစ်ယောက်နဲ့ ကလေးနှစ်ယောက်  ကလေးတစ်ယောက်ကသေ",
        //     date: "30",
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
