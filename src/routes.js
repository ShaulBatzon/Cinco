import { HomePage } from "./pages/HomePage.jsx";
import { Explore } from "./pages/Explore.jsx";
import { Login } from "./cmps/Login.jsx";
import { BecomeASeller } from "./pages/BecomeASeller.jsx";
import { GigPage } from "./pages/GigPage.jsx";
import { userService } from "./services/user.service";
import { SignUp } from "./cmps/SignUp.jsx";
import { SellerProfile } from "./pages/sellerProfile/SellerProfile.jsx";
import { Orders } from "./pages/sellerProfile/Orders.jsx";
import { Avatar } from '@mui/material';
import { SellerGigs } from "./pages/sellerProfile/SellerGigs.jsx";
import { AddGig } from "./pages/sellerProfile/AddGig";
import { Intro } from "./pages/intro.jsx";

// Routes accesible from the main navigation (in AppHeader)
const user = userService.getLoginUser();
const username = userService.getLoginUser().username;
const isSeller = userService.getLoginUser().isSeller;
const isMobile = (window.innerWidth > 380) ? false : true;
const routes = [
  {
    path: "/",
    component: 
    isMobile ? Explore : HomePage,
    label: "Home",
  },
  {
    path: "/explore",
    component: Explore,
    label: "Explore",
  },
  {
    path: "/seller",
    component: BecomeASeller,
    label: "Become a Seller",
  },
  {
    path:
      username && isSeller
        ? "/sellerProfile"
        : username
        ? "/explor"
        : "/signIn",
    component:
      username && isSeller ? SellerProfile : username ? HomePage : Login,
    label: username ? (
      <Avatar className="avatar" alt="userImg" src={user.imgUrl} onClick={userService.logout()}/>
    ) : (
      <button className="join">Join</button>
    ),
  },
  {
    path: "/sellerProfile/orders",
    component: Orders,
  },
  {
    path: "/gig/",
    component: GigPage,
  },
  {
    path: "/signup",
    component: SignUp,
  },
];

export default routes;
