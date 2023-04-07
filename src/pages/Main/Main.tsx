import react from "react";
import Home from "../home/Home";
import History from "../history/History";
import Map from "../map/Map";
import Product from "../product/Product";
import Partners from "../../components/partners";
import News from "../news/News";
import Footer from "../../components/footer";
import React from "react";

export default function Main(){
    return <div className='w-screen'>
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

        </div>
    </div>
}