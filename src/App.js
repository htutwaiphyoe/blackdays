import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Layout from "./pages/Layout/Layout";
import Home from "./pages/Home/Home";

import "./App.css";

const App = () => {
    return (
        <Router>
            <Layout>
                <Switch>
                    <Route path="/" exact component={Home} />
                </Switch>
            </Layout>
        </Router>
    );
};

export default App;
