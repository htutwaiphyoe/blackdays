import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Layout from "./Layout/Layout";
import Home from "./Home/Home";
import Day from "./Day/Day";
import Month from "./Month/Month";
import History from "./History/History";

const App = () => {
    return (
        <Router>
            <Layout>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/history" exact component={History} />
                    <Route path="/history/month/:id" exact component={Month} />
                    <Route path="/history/month/:id/day/:id" exact component={Day} />
                </Switch>
            </Layout>
        </Router>
    );
};

export default App;
