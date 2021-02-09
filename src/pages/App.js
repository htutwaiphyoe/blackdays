import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Layout from "./Layout/Layout";
import Home from "./Home/Home";
import Day from "./Day/Day";

import "./App.css";

const App = () => {
    return (
        <Router>
            <Layout>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/month/:id/day/:id" exact component={Day} />
                </Switch>
            </Layout>
        </Router>
    );
};

export default App;
