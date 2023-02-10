import Admin from "./pages/Admin"
import { ADMIN_ROUTE, BASKET_ROUTE, SHOP_ROUTE, REGISTRATION_ROUTE, CAKE_ROUTE, LOGIN_ROUTE } from './utils/consts';
import Basket from './pages/Basket';
import Shop from './pages/Shop';
import Auth from './pages/Auth';
import cakePage from './pages/cakePage';

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },
    {
        path: BASKET_ROUTE,
        Component: Basket
    },

]


export const publicRoutes = [
    {
        path: SHOP_ROUTE,
        Component: Shop
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },
    {
        path: CAKE_ROUTE + '/:id',
        Component: cakePage
    },



]

