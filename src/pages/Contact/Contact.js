import { useEffect } from "react";

import FormElement from "../../components/UI/FormElement/FormElement";
import Button from "../../components/UI/Button/Button";

import classes from "./Contact.module.scss";

const Contact = (props) => {
    useEffect(() => {
        document.getElementById("Nav").scrollIntoView();
    }, []);
    return (
        <section className={classes.Contact} id="Main">
            <form className={classes.Contact__Item}>
                <FormElement label="name" type="input" />
                <FormElement label="email" type="input" />
                <FormElement label="message" type="textarea" />
                <Button>send message</Button>
            </form>
            <aside>
                <div className={classes.Contact__Info}>
                    <h3>Address</h3>
                    <p>
                        1234 Somewhere Road <br /> #87257 Nashville
                    </p>
                </div>
                <div className={classes.Contact__Info}>
                    <h3>phone</h3>
                    <p>(000) 000-0000</p>
                </div>
                <div className={classes.Contact__Info}>
                    <h3>email</h3>
                    <p>info@untitled.tld</p>
                </div>
                <div className={classes.Contact__Info}>
                    <h3>social</h3>
                    <ul>
                        <li>
                            <a
                                href="/"
                                title="Facebook"
                                className={classes.Navigation__IconLink}
                                target="_blank"
                            >
                                <ion-icon name="logo-facebook" title="Facebook"></ion-icon>
                            </a>
                        </li>

                        <li>
                            <a
                                href="/history"
                                className={classes.Navigation__IconLink}
                                target="_blank"
                                title="Instagram"
                            >
                                <ion-icon name="logo-instagram" title="Instagram"></ion-icon>
                            </a>
                        </li>
                        <li>
                            <a
                                href="/about"
                                className={classes.Navigation__IconLink}
                                target="_blank"
                                title="Twitter"
                            >
                                <ion-icon name="logo-twitter" title="Twitter"></ion-icon>
                            </a>
                        </li>
                        <li>
                            <a
                                href="/contact"
                                className={classes.Navigation__IconLink}
                                target="_blank"
                                title="Github"
                            >
                                <ion-icon name="logo-github" title="Github"></ion-icon>
                            </a>
                        </li>
                    </ul>
                </div>
            </aside>
        </section>
    );
};

export default Contact;
