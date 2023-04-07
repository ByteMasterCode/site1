import React, {useEffect, useState} from "react";
import styles from './styles.module.css';
import AOS from 'aos';
import bottom from '../../../../resources/img/bottom-slider.svg';
import 'aos/dist/aos.css'
import {redirect} from "react-router-dom";
import {History} from "../../../../model/History";

export default function Bottom(){
    useEffect(()=>{
        AOS.init()
    })
    const [histories, setHistories] = useState([]);

    useEffect(() => {
        fetch(`http://127.0.0.1:8000/api/history/?lang=uz`, {method: "GET", headers: {'Accept': 'application/json'}})
            .then(async (response) => response.json())
            .then((info) => {
                console.log(info);

                setHistories(info);

            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);
    return(
        <div>
        <div className={styles.container}>

            <div className={styles.core}> </div>
            {/*ListOfScroll*/}
            {histories.map((histor:History)=>
                <div    className={`flex w-[30vh] h-[20vh] bg-green-900 ${styles.box}`}>
                <div className={styles.title} data-aos="fade-down" data-aos-delay="400"  data-aos-duration="1000">
                    <h2> {histor.year} </h2>

                </div>
                <div className={styles.title_description} data-aos="fade-right" data-aos-delay="200"  data-aos-duration="1000">
                    {histor.sort_description}
                </div>
                </div>
            )}







        {/*ListOfScroll End*/}

        </div>
        </div>
    )
}