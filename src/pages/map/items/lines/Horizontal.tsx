import React, {useEffect} from "react";
import styles from './styles.module.css';
import whitelogo from '../../../../resources/img/logo_white.svg';
import logo from  '../../../../resources/img/logo.svg';
import AOS from 'aos';
import 'aos/dist/aos.css'


export default function Horizontal(){

    return(

        <div className={styles.horizontal}>


        </div>
    )
}

export function Vertical(){
    return (

        <div className={styles.vertical}>

        </div>
    )
}

export function Circle(){
    return(
        <div className={styles.circle}>

            <img src={whitelogo} className={'w-5 h-5 absolute translate-x-[0.2vh] translate-y-[0.2vh]'}/>
            <span className={styles.outline_circle} >

            </span>
        </div>
    )
}

export  function MainTitle(){

    return(
        <div  className={styles.main} >
            <div className={'flex absolute'} data-aos="fade-left" data-aos-delay="1000"  data-aos-duration="2000">
            <img className={'w-[10vh] h-[10vh] ml-[14vh] mt-[13vh] cursor-pointer hover:animate-spin-slow'} src={logo}/>
            </div>
            <div className={'flex absolute'} data-aos="fade-left" data-aos-delay="1000"  data-aos-duration="2000">
            <h1> Navoiy Uran</h1>
            </div>
            <div className={'flex absolute'} data-aos="fade-left" data-aos-delay="1000"  data-aos-duration="2000">
            <h2> Davlat Korxonasi</h2>
            </div>
            <div className={'flex absolute'} data-aos="fade-down" data-aos-delay="400"  data-aos-duration="2000">
            <div className={styles.main_vertical}/>
            </div>
            <div className={'flex absolute'} data-aos="fade-left" data-aos-delay="400"  data-aos-duration="2000">
            <div  className={styles.main_horizontal}/>
            </div>
        </div>
    )
}
