import News from "../pages/News/News/News";
import Authorization from "../pages/Authorization";
// import Card from "../pages/Card";
import Cards from "../pages/Cards/Cards";
import FAQ from "../pages/FAQ";
import Profile from "../pages/Profile";
import Rules from "../pages/Rules";
import Cart from '../pages/Cart/Cart'

export const privateRouters = [

    {path: '/', element: Cards},
]

export const publicRoutes = [

    {path: '/', element: Cards},
    {path: '/cleonews', element: News},
    {path: '/authorization', element: Authorization},
    // {path: '/cards/:id', element: Card},
    {path: '/cart', element: Cart},
    {path: '/faq', element: FAQ},
    {path: '/profile', element: Profile},
    {path: '/rules', element: Rules},
]