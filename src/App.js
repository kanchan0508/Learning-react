import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Componenets/Header";
import Body from "./Componenets/Body";
import Footer from "./Componenets/Footer";


   const AppLayout = () =>{
    return(
        <>
            <Header />
            <Body />
            <Footer />
        </>
    )
   }
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
