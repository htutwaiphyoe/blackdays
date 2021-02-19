import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { lazy, Suspense } from "react";

import Layout from "./Layout/Layout";
import Home from "./Home/Home";

const Day = lazy(() => import("./Day/Day"));
const Month = lazy(() => import("./Month/Month"));
// const History = lazy(() => import("./History/History"));
const Contact = lazy(() => import("./Contact/Contact"));

const App = () => {
    return (
        <Router>
            <Layout>
                <Switch>
                    <Suspense fallback={null}>
                        <Route path="/" exact component={Home} />
                        <Route path="/history" exact component={Month} />
                        {/* <Route path="/history/month/:monthId" exact component={Month} /> */}
                        <Route path="/history/day/:dayId" exact component={Day} />
                        <Route path="/history/day/:dayId/:eventId" exact component={Home} />
                        <Route path="/contact" exact component={Contact} />
                    </Suspense>
                </Switch>
            </Layout>
        </Router>
    );
};

export default App;
