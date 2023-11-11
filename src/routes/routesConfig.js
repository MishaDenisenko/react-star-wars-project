import HomePage from "../containers/HomePage";
import NotFoundPage from "../containers/NotFoundPage";
import PeoplePage from "../containers/PeoplePage";
import PersonPage from "../containers/PersonPage";
import FavoritesPage from '../containers/FavoritesPage';

const routesConfig = [
    {
        routePath: '/',
        navPath: '/',
        element: <HomePage/>,
        title: 'Home'
    },
    {
        routePath: '/people',
        navPath: '/people/?page=1',
        element: <PeoplePage/>,
        title: 'People'
    },
    {
        routePath: '/people/:id',
        navPath: '',
        element: <PersonPage/>,
        title: ''
    },
    {
        routePath: '/favorites',
        navPath: '',
        element: <FavoritesPage/>,
        title: ''
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
