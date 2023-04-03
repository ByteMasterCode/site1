import React, {useEffect, useState} from "react";
import styles from './styles.module.css';
import map from '../../resources/img/map.svg'
import uzbekistan from '../../resources/img/uzbekistan.svg';
import CategoryList from "./items/categoryList/CategoryList";
import Horizontal, {MainTitle} from "./items/lines/Horizontal";
import {Vertical,Circle} from "./items/lines/Horizontal";
import arrow from '../../resources/img/arr.png';
import AOS from 'aos';
import 'aos/dist/aos.css'
export  default function  Map(){
    useEffect(()=>{
        AOS.init();
    });
    const [count, countUpdate] = useState(1);

    const forward = () => {
        if (count < 2) {

            countUpdate(count + 1);
        }

    };
    const back = () => {
        if (count > 1 ) {
            countUpdate((count - 1 ));

        }

    };

  let  partners = ()=>{
       if (count === 1){
           return(
               <div>

               </div>
           )
       }else {
           return (
               <div className='w-full h-full absolute'>

               <img className='absolute w-[270px] h-[70px] translate-y-[35vh]  translate-x-[68vw] rotate-6' src={arrow}/>
               <img className='absolute w-[600px] h-[70px] translate-y-[22vh]  translate-x-[30vw] rotate-[210deg]' src={arrow}/>

               </div>

           )
       }
    }
    return(
        <div className={styles.container}>

            <img className={'w-full'} src={map}/>
            <CategoryList/>

            <MainTitle/>
            {partners()}
            <div className={styles.uzbekistan}>
                <img className={'w-[10vh] h-[10vh] hov'} src={uzbekistan}/>
            </div>
            <div className={'flex absolute'} data-aos="fade-down" data-aos-delay="600"  data-aos-duration="2000">
                <Horizontal/>
            </div>
            <div className={'flex absolute'} data-aos="fade-left" data-aos-delay="400"  data-aos-duration="2000">
                <Vertical/>
            </div>
            <div className={'flex absolute'} data-aos="zoom-in" data-aos-delay="0"  data-aos-duration="100">
                <Circle/>
            </div>
            </div>

    )
}