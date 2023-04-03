import react from 'react';
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
    return (
        <div className={styles.container}>

            <div className={styles.content}>
                <img className={'w-full h-full absolute duration-[2s] grayscale hover:grayscale-0'} src={industry} />
                <Content/>


            </div>

        </div>
    )
}