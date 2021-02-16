import classes from "./Home.module.scss";

const Home = (props) => {
    return (
        <section className={classes.Home} id="Main">
            <div className={classes.Home__Intro}>
                <span className={classes.Home__Intro__Date}>February 1, 2021</span>
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
                    src="https://scontent.xx.fbcdn.net/v/t1.15752-9/146550847_417038066020608_1685942869148427438_n.jpg?_nc_cat=103&ccb=3&_nc_sid=ae9488&_nc_ohc=F5Yu3wFUsnAAX8OeXD7&_nc_ht=scontent.xx&oh=f8999461f704e84dcd15101411c522cd&oe=604F920A"
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
