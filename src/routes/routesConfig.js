import HomePage from "../containers/HomePage";
import PeoplePage from "../containers/PeoplePage";
import NotFoundPage from "../containers/NotFoundPage";

const routesConfig = [
    {
        routePath: '/',
        navPath: '/',
        element: <HomePage/>,
        title: 'HomePage'
    },
    {
        routePath: '/people',
        navPath: '/people/?page=1',
        element: <PeoplePage/>,
        title: 'PeoplePage'
    },
    {
        routePath: '/not-found',
        navPath: '/not-found',
        element: <NotFoundPage/>,
        title: 'Not Found'
    },
    {
        routePath: '/*',
        navPath: '',
        element: <NotFoundPage/>,
        title: ''
    },
]

export default routesConfig;
