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
import exp from "constants";
export  default function  Map(){
    useEffect(()=>{
        AOS.init();
    });
    const [count, countUpdate] = useState(1);
    const [liste, listeUpdate] = useState(1);
    const listes = [{'name':'Navoiy uran davlat korxonasi'},{'name':'Davlatlarga exportlar'}]
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
       if (liste === 1){
           return(
               <div className='w-full h-full absolute absolute'>
                   <CategoryList/>
                   <MainTitle/>
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
       }else {
           return (
               <div className='w-full h-full absolute'>
                   <div className={styles.uzbekistan}>
                       <img className={'w-[10vh] h-[10vh] hov'} src={uzbekistan}/>
                   </div>

                   <div className={'flex absolute'} data-aos="zoom-in" data-aos-delay="0"  data-aos-duration="100">
                       <Circle/>
                   </div>

                   <div className='w-full h-full'>
                        <div className='w-1 h-[100px] bg-green-400 ml-[1000px]'/>
                   </div>

               </div>

           )
       }
    }
    return(
        <div className={styles.container}>

            <img className={'w-full'} src={map}/>
            <div onClick={()=>{
                if (liste === 1){

                    listeUpdate(0)
                } else {
                    listeUpdate(1)
                }
                console.log(liste)
            }}  className='w-20 h-20 fixed z-[1]  bottom-24 ml-24 cursor-pointer'>
            <div  className="w-20 h-20 bg-green-400  rounded-full absolute bottom-24 ml-24 cursor-pointer">
                <div className='w-24 h-24    border-green-300 border-2 cursor-pointer rounded-full -translate-x-[10px] animate-ping -translate-y-[10px]'>

                </div>

                        <div className='w-[200px]  ml-24 -translate-y-[70px] '>{listes[liste].name} </div>


            </div>
            </div>



            {partners()}

            </div>

    )
}