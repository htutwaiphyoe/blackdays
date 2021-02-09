import axios from "axios";

export default axios.create({
    baseURL: "https://blackdays-1221-default-rtdb.firebaseio.com/",
});
