import React, {useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'
import './App.scss';
import Footer from "./components/footer";
import Menu from "./components/menu";
import {Routes, Route, Link, Navigate} from 'react-router-dom';
import ContentMenu from "./components/content_menu/contentMenu";
import Main from "./pages/Main/Main";
import Hirarchy from "./components/Hirarchy_Menu/Hirarchy";
import NewsShow from "./pages/NewsShow/NewsShow";
import FileMenu from "./components/File_Menu/FileMenu";

function App() {

    useEffect(() => {
        AOS.init()
    })

    return (

        <div className={'flex flex-col overflow-clip'}>
            <Menu/>
            <></>
            <Routes>
                <Route path="/menu/:id/:type"   element={<ContentMenu/>}/>
                <Route path="/hierarchy/:id/:type"   element={<Hirarchy/>}/>
                <Route path="/file/:id/:type"   element={<FileMenu/>}/>
                <Route path="/news/:id/"   element={<NewsShow/>}/>
            </Routes>
            <Routes><Route path="/" element={<Main/>}/>
                <Route
                    path=""
                    element={<Navigate to="/" replace/>}
                />
            </Routes>
            <section>
                <Footer/>
            </section>
        </div>
    );
}
export default App;
