import { useEffect } from "react";

import classes from "./Home.module.scss";

const Home = (props) => {
    useEffect(() => {
        document.getElementById("Nav").scrollIntoView();
    }, []);
    return (
        <section className={classes.Home} id="Main">
            <div className={classes.Home__Intro}>
                <h1 className={classes.Home__Intro__Heading}>
                    About
                    <br />
                    history
                </h1>
                <p className={`${classes.Home__Description}`}>
                    This webiste is about black history from 1st February to Now.
                </p>
                <p className={`${classes.Home__Description}`}>
                    This'll show you all historic events that happened during that time.
                </p>
                <p className={`${classes.Home__Description}`}> Vive la révolution</p>
            </div>
            <figure className={classes.Home__Image}>
                <img
                    src="https://lh3.googleusercontent.com/4Xl9dOZ9kpdG5U3BaNtmAa4Obs_h54nqbFgLf7Diuix84zrxrgqvkIUJuWFkFckSerWst5gJ2KYfE5Mx0CWSzA4J3ISdQjfrdilMBzCsKGxbIOKPxeyPAfMF4nKr3ph1f0QJsQxsGY_jt3detE3ez8rLXt2YsMlS8siYJS3_PUed3JaFKZesGqqIIWXd2Q3uAzF2_RbzWkylcq-sEjHdf-Ve493S8u9b5ZTKtslX2LMNZjTS2PuuR0nh9lmkTGy38cTquEcDHW7mMgS77pmpcyJDhSMPCJQ2Zo99BrDIMrgtX3a1bN3el9OZKJKio713sHxx109ess_uvjux6MSBYXRAg4lGxfyxUG_SDdikjxWPrGHf_DIO969fB5bu9ShRM_pfnZmlkZHdEm27VQLs7ETj0nSVsITPWmuCQ78MTGcOhafb4cQCxIH093CfnzTB6lnG7Xr7nH0-k7JuLWbsaBegM1cmox44W-jyMKzzA77gqoBZr3bWNr8aUfEa87l42mreTH2NnEPxPvnDGIwndwnIHKHvCusgrNsWGWNiaZpvP_8fO5jA4ii0kfcriJSa-Eig3HweMdMxO04FT0gSCjLZclHkS_8kmE_ywHpZmFbnSQCoLQFHkRs7fGGT0Cg5j0mGdOyiuzxA4bKoW_qB4U38hWxAs6heC-g9IkV4GfHVVhg2oqmk1Ql6qg3M=w1225-h695-no?authuser=0"
                    alt="hero"
                    loading="lazy"
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
