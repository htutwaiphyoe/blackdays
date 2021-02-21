import { useEffect } from "react";

import Event from "../../components/Event/Event";
import classes from "./Day.module.scss";

const events = [
    {
        label: "1",
        photo:
            "https://scontent.xx.fbcdn.net/v/t1.0-9/152659268_3867789859943537_2516930599771641404_n.jpg?_nc_cat=1&ccb=3&_nc_sid=730e14&_nc_ohc=-_uAFlC8SeYAX-MXujd&_nc_ht=scontent.xx&oh=f250193850a6a74d9c4a2c2888820e8b&oe=605778AF",
        description:
            " On this Day, Military took country's power over the elected party. This'll show you all historic events that happened during that Day. Vive la révolution",
        date: "1",
    },
    {
        label: "2",
        photo:
            "https://scontent.xx.fbcdn.net/v/t1.0-9/s720x720/150904498_1087637964996440_3648146150395420268_o.jpg?_nc_cat=104&ccb=3&_nc_sid=8bfeb9&_nc_ohc=es3Q65J2-iIAX85IFtg&_nc_ht=scontent.xx&tp=7&oh=525e84be099608d9d18e443162ebc0f5&oe=60573200",
        description:
            " On this Day, Military took country's power over the elected party. This'll show you all historic events that happened during that Day. Vive la révolution",
        date: "1",
    },
    {
        label: "2",
        photo:
            "https://scontent.xx.fbcdn.net/v/t1.0-9/s720x720/150904498_1087637964996440_3648146150395420268_o.jpg?_nc_cat=104&ccb=3&_nc_sid=8bfeb9&_nc_ohc=es3Q65J2-iIAX85IFtg&_nc_ht=scontent.xx&tp=7&oh=525e84be099608d9d18e443162ebc0f5&oe=60573200",
        description:
            " On this Day, Military took country's power over the elected party. This'll show you all historic events that happened during that Day. Vive la révolution",
        date: "1",
    },
    {
        label: "2",
        photo:
            "https://scontent.xx.fbcdn.net/v/t1.0-9/151782449_3867524689970054_6943183007767081302_n.jpg?_nc_cat=1&ccb=3&_nc_sid=8bfeb9&_nc_ohc=YW9vcBDOQ8MAX8Ku9xA&_nc_ht=scontent.xx&oh=cf7cc9e9084c6213f98c29bd9eec228c&oe=6057CB72",
        description:
            " On this Day, Military took country's power over the elected party. This'll show you all historic events that happened during that Day. Vive la révolution",
        date: "1",
    },
    {
        label: "2",
        photo:
            "https://scontent.xx.fbcdn.net/v/t1.0-9/151328551_846227992887096_6864072506699007557_o.jpg?_nc_cat=103&ccb=3&_nc_sid=8bfeb9&_nc_ohc=TIRftTAP0wkAX864wA_&_nc_ht=scontent.xx&oh=5a723e1743418317ad4dc7953bdbd5de&oe=60560F1E",
        description:
            " On this Day, Military took country's power over the elected party. This'll show you all historic events that happened during that Day. Vive la révolution",
        date: "1",
    },
    {
        label: "2",
        photo:
            "https://scontent.xx.fbcdn.net/v/t1.0-9/152414863_4075155629212707_3717362030622707331_n.jpg?_nc_cat=1&ccb=3&_nc_sid=730e14&_nc_ohc=hOxVDzN_xgQAX-M2084&_nc_ht=scontent.xx&oh=7799bee3f2aefcf8c293d0994f38381a&oe=6058F316",
        description:
            " ဖမ်းဆီးဖို့ ဝရမ်းထုတ်ထားတဲ့ ရုပ်ရှင်သရုပ်ဆောင် အကယ်ဒမီလူမင်းကို ရဲတွေအများကြီးကားနဲ့ရောက်လာပြီး တံခါးကို ချိုးဖျက်လို့ ဝင်ရောက်ပြီး ဖမ်းဆီးခြင်း",
        date: "1",
    },
    {
        label: "2",
        photo:
            "https://scontent.xx.fbcdn.net/v/t1.0-9/152038544_1132515803852431_8829011072545138928_n.jpg?_nc_cat=1&ccb=3&_nc_sid=8bfeb9&_nc_ohc=lyX6na7N02YAX9ZYCyi&_nc_ht=scontent.xx&oh=99b4aabe8796727415e863f4fb90c721&oe=6058BECF",
        description:
            "မြဝတီတွင် စစ်အာဏာရှင်ဆန့်ကျင်​ရေး အ​ထွေ​ထွေသပိတ်ကို KNU က လက်နက်အပြည့်အစုံဖြင့်လုံခြုံယူ​ပေးထား",
        date: "1",
    },
    {
        label: "2",
        photo:
            "https://scontent.xx.fbcdn.net/v/t1.0-9/152598623_4113238975377643_4317362100704996163_o.jpg?_nc_cat=1&ccb=3&_nc_sid=730e14&_nc_ohc=-gvGyDT3H3oAX-hJgIe&_nc_ht=scontent.xx&oh=72747ab354116ff2faf9e3a981cefa7d&oe=6058D5F8",
        description:
            "မြစ်ကြီးနားမြို့ ဧရာဝတီမြစ်အတွင်းက ရေလယ်ကျွန်းမှာ လူငယ်တွေ ရေးဆွဲထားတဲ့ 'We Lost Human Rights'",
        date: "1",
    },
];

const Day = (props) => {
    useEffect(() => {
        document.getElementById("Nav").scrollIntoView();
    }, []);
    return (
        <section className={classes.Day} id="Main">
            {events.map((event, i) => (
                <Event event={event} key={i} btnText="Full story" />
            ))}
        </section>
    );
};

export default Day;
