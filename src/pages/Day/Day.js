import Event from "../../components/Event/Event";

import "./Day.scss";
const Day = (props) => {
    return (
        <section className="Day">
            <h1 className="Day__heading">
                Day 9<span className="Day__heading--date">9.2.2021</span>
            </h1>
            <div className="Day__Events">
                <Event
                    photo="https://scontent.xx.fbcdn.net/v/t1.0-9/148126863_2933233206912028_5441583017405895898_n.jpg?_nc_cat=1&ccb=2&_nc_sid=8bfeb9&_nc_ohc=-RY4c_Gs7ioAX-UEWGC&_nc_ht=scontent.xx&oh=bd92fb1da1c2f9a74b4df657f22dc8e1&oe=6048D527"
                    description="တစ်နိုင်ငံလုံးဆန္ဒထုတ်ဖော်"
                />
                <Event
                    photo="https://scontent.xx.fbcdn.net/v/t1.0-9/147432028_3831698906867704_2957519634457980932_n.jpg?_nc_cat=1&ccb=2&_nc_sid=730e14&_nc_ohc=aAQW9R2OMlIAX956673&_nc_ht=scontent.xx&oh=c6fe2bd4e00bddc8ee16815b92bc6b46&oe=6048B913"
                    description="မန္တလေးနှင့် နေပြည်တော်တွင် ဆန္ဒပြသူများကို Water cannon ဖြင့်ဖြိုခွဲ၊ ကျည်ဆန်အစစ်များဖြင့် ပစ်ခတ်ဖမ်းဆီး"
                />
                <Event
                    photo="https://scontent.xx.fbcdn.net/v/t1.0-9/146934394_2835758840040493_9035539590287536454_n.jpg?_nc_cat=1&ccb=2&_nc_sid=8bfeb9&_nc_ohc=c6AGV22OhmcAX-vBnZm&_nc_ht=scontent.xx&oh=f693ba8b16e6e4df4d06a910faad276e&oe=6049BB16"
                    description="နေပြည်တော်ဆန္ဒပြပွဲ၌ စစ်တပ်မှ ရေပက်သဖြင့် လမ်းဘေးရပ်နေသော ပြည်သူအား သေနတ်ဖြင့်
                    ခေါင်းကိုပစ်ခြင်း"
                />
                <Event
                    photo="https://scontent.xx.fbcdn.net/v/t1.0-0/s640x640/147086365_4425902624091771_2973768808400265692_o.jpg?_nc_cat=1&ccb=2&_nc_sid=8bfeb9&_nc_ohc=3717nwchwDcAX_okilL&_nc_ht=scontent.xx&tp=7&oh=a524af6b8d7a1cb82b754e01ad69e508&oe=60497F78"
                    description="ရွေးကောက်ခံကိုယ်စားလှယ်လောင်းများမှ နိုင်ငံတော်၏အတိုင်ပင်ခံပုဂ္ဂိုလ်ဆိုင်ရာ ဥပဒေ ၂၀၂၁ ကိုပြဌာန်း"
                />
            </div>
        </section>
    );
};

export default Day;
