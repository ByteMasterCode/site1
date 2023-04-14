import React from "react";
import styles from './styles.module.scss';
import AOS from 'aos';
import 'aos/dist/aos.css'
import {useDispatch} from "react-redux";
import {useTypeSelector} from "../../../../store/hooks";

export default function Year(){

    const state = useTypeSelector(state => state);
    return(
        <div className={styles.container} data-aos="zoom-in" data-aos-delay="400"  data-aos-duration="1000">
                <h1> {state.his.year} </h1>
        </div>
    )
}