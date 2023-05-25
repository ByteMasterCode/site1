import react, {useEffect, useState} from 'react';
import styles from './styles.module.css';
import Top from './items/top/Top';
import pat from '../../resources/img/pat.png'
import Main from "./items/main/Main";
import history from "../../resources/img/history.png";
import React from "react";
import Content from "./items/Content/Content";
import industry from "../../resources/img/zaglushka.jpg";
import AOS from "aos";
import 'aos/dist/aos.css'
import {useDispatch, useSelector} from "react-redux";
import {useTypeSelector} from "../../store/hooks";

export default function History() {



    const state = useTypeSelector(state => state);
    return (
        <div className={styles.container}>

            <div className={styles.content}>
                <img onChange={()=>console.log('changed')} className={'w-full h-full absolute duration-[2s] grayscale hover:grayscale-0'} src={'https://back.navoiyuran.uz/storage/'+state.his.image} />
                <Content/>


            </div>

        </div>
    )
}