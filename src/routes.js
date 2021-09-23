import {HomePage} from './pages/HomePage.jsx'
import {Explore} from './pages/Explore.jsx'
import { BecomeASeller } from './pages/BecomeASeller.jsx'

// Routes accesible from the main navigation (in AppHeader)
const routes = [
    {
        path:'/',
        component: HomePage,
        label: 'Home',
    },
    {
        path:'/explore',
        component: Explore,
        label: 'Explore'
    },
    {
        path:'/seller',
        component: BecomeASeller,
        label: 'Become a Seller'
    }
]

export default routes;