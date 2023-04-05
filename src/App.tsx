import React, {useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'
import './App.scss';
import Home from "./pages/home/Home";
import History from "./pages/history/History";
import Map from "./pages/map/Map";
import Product from "./pages/product/Product";
import News from "./pages/news/News";
import Partners from "./components/partners";
import Footer from "./components/footer";
import Menu from "./components/menu";
import {BrowserRouter} from "react-router-dom";
import {Routes, Route, Link, Navigate} from 'react-router-dom';
import ContentMenu from "./components/content_menu/contentMenu";
import Main from "./pages/Main/Main";

function App() {
    useEffect(() => {
        AOS.init()
    })
    return (

        <div className={'flex flex-col '}>
            <Menu/>
            <Routes>
                <Route path="/menu" element={<ContentMenu/>}/>
            </Routes>
            <Routes><Route path="/" element={<Main/>}/>
                <Route
                    path=""
                    element={<Navigate to="/" replace/>}
                />

            </Routes>

        </div>
    );
}

export default App;
