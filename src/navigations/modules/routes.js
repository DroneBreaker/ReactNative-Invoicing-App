import { RouteNames } from '../../constants';
import { HomeScreen, LoginScreen, InvoiceScreen } from '../../screens';
// import { LoginScreen } from '../../screens/Auth/LoginScreen';
// import { InvoiceScreen } from '../../screens/Invoice/InvoiceScreen';

export const StackRoutes = [
    {
        name: RouteNames.HOME,
        component: HomeScreen,
        options: {
            headerTitle: 'Home',
            headerShown: false,
        },
    },

    {
        name: RouteNames.LOGIN,
        component: LoginScreen,
        options: {
            headerTitle: 'Login',
            headerShown: false,
        },
    },

    {
        name: RouteNames.INVOICE,
        component: InvoiceScreen,
        options: {
            headerTitle: 'Invoice',
            headerShown: false,
        },
    }
]