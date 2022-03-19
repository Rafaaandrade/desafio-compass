import Home from "../../../Pages/Home";
import User from "../../../Pages/User";

const routes = [
    {
        path: '/',
        exact: true,
        component: Home
    },
    {
        path: '/user',
        exact: true,
        component: User
    }

];

export default routes;