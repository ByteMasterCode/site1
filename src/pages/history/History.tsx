import react, {useEffect, useState} from 'react';
import styles from './styles.module.scss';
import Top from './items/top/Top';
import pat from '../../resources/img/pat.png'
import Main from "./items/main/Main";
import history from "../../resources/img/history.png";
import React from "react";
import Content from "./items/Content/Content";
import industry from "../../resources/img/zaglushka.jpg";
import AOS from "aos";
import 'aos/dist/aos.css'

export default function History() {
    // const [info, setInfo] = useState<HistoryModel[]>([]);
    //
    // useEffect(() => {
    //     fetch(`http://127.0.0.1:8000/api/history/?lang=uz`, {method: "GET", headers: {'Accept': 'application/json'}})
    //         .then(async (response) => response.json())
    //         .then((info) => {
    //             console.log(info);
    //
    //             setInfo(info);
    //
    //         })
    //         .catch((err) => {
    //             console.log(err.message);
    //         });
    // }, []);

    return (
        <div className={styles.container}>

            <div className={styles.content}>
                <img className={'w-full h-full absolute duration-[2s] grayscale hover:grayscale-0'} src={industry} />
                <Content/>


            </div>

        </div>
    )
}