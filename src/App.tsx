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

function App() {
    useEffect(() => {
        AOS.init()
    })
    return (
        <div className={'flex flex-col '}>
            <div data-aos='fade-up' data-aos-duration='1000'>
                <section>
                    <Home/>
                </section>
            </div>
            <div data-aos='fade-up' data-aos-duration='1000'>
                <section>
                    <History/>
                </section>
            </div>
            <div data-aos='fade-up' data-aos-duration='1000'>
                <section>
                    <Map/>
                </section>
            </div>
            <div data-aos='fade-up' data-aos-duration='1000'>
                <section>
                    <Product/>
                </section>
            </div>
            <section>
                <Partners/>
            </section>
            <div data-aos='fade-up' data-aos-duration='1000'>
                <section>
                    <News/>
                </section>
                <section>
                    <Footer/>
                </section>
            </div>
        </div>
    );
}

export default App;
