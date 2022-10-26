import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./pages/home";
import { Login } from "./pages/login";
import { Demo } from "./pages/demo";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import AboutUs from "./pages/aboutUs";
import { Pagos } from "./pages/pagos";
import Contact from "./pages/Contact";


import { Catalogo } from "./pages/catalago";

import { SignUp } from "./pages/signup";
import { Altas } from "./pages/altas";
import { AltasVender } from "./pages/altasVender";
import { AltasAlquiler } from "./pages/altasAlquiler";
import { VistaUser } from "./pages/user";



//create your first component
const Layout = () => {
    //the basename is used when your project is published in a subdirectory and not in the root of the domain
    // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
    const basename = process.env.BASENAME || "";

    return (
        <div>
            <BrowserRouter basename={basename}>
                <ScrollToTop>

                    <Navbar />
                    
                    <Routes>
                        <Route element={<Home />} path="/" />
                        <Route element={<Demo />} path="/demo" />
                        <Route element={<Login />} path="/login" />
                        <Route element={<SignUp />} path="/signup"/>
                        <Route element={<Altas />} path="/altas"/>
                        <Route element={<AltasVender />} path="/altasvender"/>
                        <Route element={<AltasAlquiler />} path="/altasalquiler"/>
                        <Route element={<Pagos />} path="/pagos"/>
                        <Route element={<AboutUs />} path="/aboutus"/>
                        <Route element={<Contact />} path="/contact"/>
                        <Route element={<h1>Not found!</h1>} />
                        <Route element={<Footer />} path="/footer" />
                        <Route element={<Catalogo />} path="/catalogo"/>
                        <Route element={<VistaUser />} path="/user"/>
                        
                    </Routes>
                    <Footer />
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);
