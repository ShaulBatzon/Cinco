import { HomePage } from "./pages/HomePage.jsx";
import { Explore } from "./pages/Explore.jsx";
import { Login } from "./cmps/Login.jsx";
import { BecomeASeller } from "./pages/BecomeASeller.jsx";
import { GigPage } from "./pages/GigPage.jsx";
import { userService } from "./services/user.service";
import { SignUp } from "./cmps/SignUp.jsx";
import { AppHeaderW } from "./cmps/AppHeader-wihte";
import { AppHeader } from "./cmps/AppHeader";
import { SellerProfile } from "./pages/sellerProfile/SellerProfile.jsx";
// Routes accesible from the main navigation (in AppHeader)

const routesH = [
  {
    path: "/:page/:page",
    component: AppHeaderW,
  },
  // {
  //   path: "/sellerProfile/:page/:page",
  //   component: AppHeaderW,
  // },
  // {
  //   path: "/sellerProfile/:page/:page",
  //   component: HeaderSeller,
  // },
  // {
  //   path: "/sellerProfile/:page",
  //   component: SellerProfile,
  // },
  {
    path: "/:page",
    component: AppHeaderW,
  },
  // {
  //   path: "/sellerProfile",
  //   component: SellerProfile,
  // },
  {
    path: "/",
    component: AppHeader,
  },
];

export default routesH;
