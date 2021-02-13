import { Link } from "react-router-dom";

import classes from "./History.module.scss";
const History = (props) => {
    return (
        <section className={classes.History}>
            <div className={classes.Month}>
                <h1>February</h1>
                <ul>
                    <li>
                        <Link to="/month/1/day/1">Day 1</Link>
                    </li>
                    <li>
                        <Link to="/month/1/day/2">Day 2</Link>
                    </li>
                    <li>
                        <Link to="/month/1/day/3">Day 3</Link>
                    </li>
                    <li>
                        <Link to="/month/1/day/4">Day 4</Link>
                    </li>
                    <li>
                        <Link to="/month/1/day/5">Day 5</Link>
                    </li>
                    <li>
                        <Link to="/month/1/day/6">Day 6</Link>
                    </li>
                    <li>
                        <Link to="/month/1/day/7">Day 7</Link>
                    </li>
                    <li>
                        <Link to="/month/1/day/8">Day 8</Link>
                    </li>
                    <li>
                        <Link to="/month/1/day/9">Day 9</Link>
                    </li>
                    <li>
                        <Link to="/month/1/day/10">Day 10</Link>
                    </li>
                    <li>
                        <Link to="/month/1/day/11">Day 11</Link>
                    </li>
                    <li>
                        <Link to="/month/1/day/12">Day 12</Link>
                    </li>
                    <li>
                        <Link to="/month/1/day/13">Day 13</Link>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default History;
