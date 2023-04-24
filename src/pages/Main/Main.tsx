import react from "react";
import Home from "../home/Home";
import History from "../history/History";
import  mapp from  '../../resources/img/map.svg';
import Map from "../map/Map";
import Product from "../product/Product";
import Partners from "../../components/partners";
import News from "../news/News";
import Footer from "../../components/footer";
import React from "react";
import Vacansy from "../Vacansy/Vacansy";
export default function Main(){
    return <div className='w-screen flex flex-col'>
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
        <div className={'w-[100vw] h-[100vh]'} style={{background:`url(${mapp})`,backgroundRepeat:"no-repeat",backgroundSize:"contain",backgroundPosition:'center'}} data-aos='fade-up' data-aos-duration='1000'>
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
        <div data-aos='fade-up' data-aos-duration='1000'>
            <section>
                <Vacansy/>
            </section>

        </div>
    </div>
}