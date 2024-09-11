import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import HomeStore from "../pages/HomeStore";
import LogInPage from "../pages/LogInPage";
import RegisterPage from "../pages/RegisterPage";
import PrivateRoute from "../components/PrivateRoutes";
import Cart from "../pages/Cart";
import RockingChairs from "../components/RockingChairs";
import SideChair from "../components/SideChair";
import LoungeChair from "../components/LoungeChair";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <RegisterPage></RegisterPage>,
      },
      {
        path: "/login",
        element: <LogInPage></LogInPage>
      },
      
    ],
  },
  {
    path: "/homestore",
    element: <PrivateRoute>
      <HomeStore></HomeStore>
    </PrivateRoute>,
    children: [
      {
        path: "/homestore/rockingchairs",
        element: <RockingChairs></RockingChairs>,
        loader: ()=>fetch('/data.json')
      },
      {
        path: "/homestore/sidechairs",
        element: <SideChair></SideChair>,
        loader: ()=>fetch('/sidechairs.json')
      },
      {
        path: "/homestore/loungechairs",
        element: <LoungeChair></LoungeChair>,
        loader: ()=>fetch('/loungechairs.json')
      },
      
    ]
  },
  {
    path: "/cart",
    element: <PrivateRoute>
      <Cart></Cart>
    </PrivateRoute>
  },
])

export default router;