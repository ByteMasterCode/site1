import React from "react";
import styles from './styles.module.scss';
import AOS from 'aos';
import 'aos/dist/aos.css'

export default function Year(){
    return(
        <div className={styles.container} data-aos="zoom-in" data-aos-delay="400"  data-aos-duration="1000">
                <h1> 2017 </h1>
        </div>
    )
}