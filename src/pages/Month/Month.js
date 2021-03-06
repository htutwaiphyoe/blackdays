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
        //     label: "March 6, 2021",
        //     day: "Thirty Four",
        //     hashtag: "Mar6Coup",
        //     photo:
        //         "https://scontent.xx.fbcdn.net/v/t1.0-9/156608397_2411587042320439_294678282210110365_o.jpg?_nc_cat=108&ccb=1-3&_nc_sid=0debeb&_nc_ohc=zsOeER5XyrsAX8V-nwt&_nc_ht=scontent.xx&oh=e00faed7a63b2f2ba4341f56b5b27e3e&oe=606B6EA9",
        //     description: "ဖိနှိပ်မှုတွေကြားက ဆက်လက်တိုက်ပွဲဝင်ဆန့်ကျင်နေဆဲ နွေဦးတော်လှန်ရေး",
        //     location: "34",
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
