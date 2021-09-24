import { HomePage } from './pages/HomePage.jsx'
import { Explore } from './pages/Explore.jsx'
import { LoginSignUp } from './cmps/LoginSignUp'
import { BecomeASeller } from './pages/BecomeASeller.jsx'
import { GigPage } from './pages/GigPage.jsx'
// Routes accesible from the main navigation (in AppHeader)
const routes = [
    {
        path: '/',
        component: HomePage,
        label: 'Home',
    },
    {
        path: '/explore',
        component: Explore,
        label: 'Explore'
    },
    {
        path: '/seller',
        component: BecomeASeller,
        label: 'Become a Seller'
    },
<<<<<<< HEAD

    {
        path: '/join',
        component: LoginSignUp,
        label: 'join'
=======
    {
        path: '/gig',
        component: GigPage,
        label: 'Gig page'
>>>>>>> 5b08fad32c609e636fbc199d02d210bcf9b67c83
    }
]

export default routes;