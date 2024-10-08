import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./Componenets/Header";
import Body from "./Componenets/Body";
import Footer from "./Componenets/Footer";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Home from "./Componenets/Home";
import Contact from "./Componenets/Contact";
import Error from "./Componenets/Error";
import RestaurantMenu from "./Componenets/RestaurantMenu";
import Profile from "./Componenets/Profile";
import Shimmer from "./Componenets/Shimmer";
import { Provider } from "react-redux";
import store from "./Componenets/utils/store";
import Cart from "./Componenets/Cart";

 
 const Instamart = lazy(() => import("./Componenets/Instamart")) // lazy loading
 const About = lazy(() => import("./Componenets/About"))

   const AppLayout = () =>{
    return(
        <Provider store={store}>
            <Header />
            <Outlet />
            <Footer />
        </Provider>
    )
   }

   const appRouuter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        errorElement: <Error />,
        children:[
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/home",
                element: <Home />
            },
            {
                path: "/about",
                element: <Suspense fallback={<h1>Loading...</h1>}> <About /></Suspense>,
                children:[{
                    path: "Profile",
                    element: <Profile/>
                }]
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/restaurant/:id",
                element: <RestaurantMenu />
            },
            {
                path: "/instamart",
                element: <Suspense fallback={<Shimmer/>}><Instamart /></Suspense>
            },
            {
                path: "/cart",
                element: <Cart />
            },
        ]
    },
    
   ])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouuter} />);
