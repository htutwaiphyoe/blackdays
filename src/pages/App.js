import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Layout from "./Layout/Layout";
import Home from "./Home/Home";
import Day from "./Day/Day";
import History from "./History/History";

import "./App.css";

const App = () => {
    return (
        <Router>
            <Layout>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/history" exact component={History} />
                    <Route path="/month/:id/day/:id" exact component={Day} />
                </Switch>
            </Layout>
        </Router>
    );
};

export default App;
