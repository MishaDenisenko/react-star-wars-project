import HomePage from "../containers/HomePage";
import PeoplePage from "../containers/PeoplePage";
import NotFoundPage from "../containers/NotFoundPage";

const routesConfig = [
    {
        path: '/',
        element: <HomePage/>,
        title: 'HomePage'
    },
    {
        path: "/people",
        element: <PeoplePage/>,
        title: 'PeoplePage'
    },
    {
        path: "/not-found",
        element: <NotFoundPage/>,
        title: 'Not Found'
    },
    {
        path: "/*",
        element: <NotFoundPage/>,
        title: ''
    },
]

export default routesConfig;
