import classes from "./Home.module.scss";

const Home = (props) => {
    return (
        <section className={classes.Home} id="Main">
            <div className={classes.Home__Intro}>
                <h1 className={classes.Home__Intro__Heading}>
                    About
                    <br />
                    brief history
                </h1>
                <p className={classes.Home__Paragraph}>
                    This webiste is about black history from 1st February to Now.
                    <br />
                    This'll show you all historic events that happened during that time.
                    <br />
                    Vive la révolution
                </p>
            </div>
            <figure className={classes.Home__Image}>
                <img
                    src="https://scontent.xx.fbcdn.net/v/t1.0-9/152455575_843215836533306_762797039450712025_n.jpg?_nc_cat=111&ccb=3&_nc_sid=e3f864&_nc_ohc=WnNSRtao8usAX_76v3P&_nc_ht=scontent.xx&oh=aeef289d53846010006789a4f64c3b0d&oe=605651DE"
                    alt="hero"
                />
            </figure>
            <p className={classes.Home__Paragraph}>
                Donec eget ex magna. Interdum et malesuada fames ac ante ipsum primis in faucibus.
                Pellentesque venenatis dolor imperdiet dolor mattis sagittis. Praesent rutrum sem
                diam, vitae egestas enim auctor sit amet. Pellentesque leo mauris, consectetur id
                ipsum sit amet, fergiat. Pellentesque in mi eu massa lacinia malesuada et a elit.
                Donec urna ex, lacinia in purus ac, pretium pulvinar mauris. Nunc lorem mauris,
                fringilla in aliquam at, euismod in lectus. Pellentesque habitant morbi tristique
                senectus et netus et malesuada fames ac turpis egestas. Curabitur sapien risus,
                commodo eget turpis at, elementum convallis enim turpis, lorem ipsum dolor sit amet
                nullam.
            </p>
            <p className={classes.Home__Paragraph}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dapibus rutrum
                facilisis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
                inceptos himenaeos. Etiam tristique libero eu nibh porttitor fermentum. Nullam
                venenatis erat id vehicula viverra. Nunc ultrices eros ut ultricies condimentum.
                Mauris risus lacus, blandit sit amet venenatis non, bibendum vitae dolor. Nunc lorem
                mauris, fringilla in aliquam at, euismod in lectus. Pellentesque habitant morbi
                tristique senectus et netus et malesuada fames ac turpis egestas. In non lorem sit
                amet elit placerat maximus. Pellentesque aliquam maximus risus. Donec eget ex magna.
                Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque venenatis
                dolor imperdiet dolor mattis sagittis. Praesent rutrum sem diam, vitae egestas enim
                auctor sit amet. Pellentesque leo mauris, consectetur id ipsum.
            </p>
        </section>
    );
};

export default Home;
