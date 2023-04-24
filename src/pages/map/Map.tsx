import React, {useEffect, useState} from "react";
import styles from './style.module.css';
import uzbekistan from '../../resources/img/uzbekistan.svg';
import CategoryList from "./items/categoryList/CategoryList";
import Horizontal, {MainTitle} from "./items/lines/Horizontal";
import {Vertical,Circle} from "./items/lines/Horizontal";
import AOS from 'aos';
import comeco from '../../resources/img/cameco_white.png'
import marubeni from '../../resources/img/marubeni_white.png'
import itochu from '../../resources/img/icochu_white.png'
import 'aos/dist/aos.css'

import Item from "./items/item/item";
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
                       <img className={'w-[10vw] h-[10vh] hov'} src={uzbekistan}/>
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
                       <img className={'w-[10vwh] h-[10vh]  absolute'} src={uzbekistan}/>
                   </div>

                   <div className={'flex absolute'} data-aos="zoom-in" data-aos-delay="0"  data-aos-duration="100">
                       <Circle/>
                   </div>
                   <div className={'absolute translate-x-[200px] translate-y-[250px]'}>
                       <div className='w-5 h-5  absolute  z-[-1]   border-red-300 border-2 cursor-pointer rounded-full -translate-x-[0px] animate-ping -translate-y-[0px]'>

                       </div>
                    <Item name={'Canada'} img={comeco} color={'bg-red-400'} country={'Canada'}/>
                   </div>
                   <div className={'absolute translate-x-[1300px] translate-y-[350px]'}>
                       <div className='w-5 h-5  absolute z-[-1]    border-blue-300 border-2 cursor-pointer rounded-full -translate-x-[0px] animate-ping -translate-y-[0px]'>

                       </div>
                   <Item name={'Canada'} img={marubeni} color={'bg-blue-400'} country={'Yaponiya'}/>
                   </div>
                   <div className={'absolute translate-x-[1300px] translate-y-[370px]'}>
                       <div className='w-5 h-5   absolute z-[-1]   border-blue-300 border-2 cursor-pointer rounded-full -translate-x-[0px] animate-ping -translate-y-[10px]'>

                       </div>
                       <Item name={'Canada'} img={itochu} color={'bg-blue-400'} country={'Yaponiya'}/>

                   </div>
               </div>

           )
       }
    }
    return(
        <div className={styles.container}  >


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

                        <div className='w-[20vw]  ml-24 -translate-y-[70px] '>{listes[liste].name} </div>

            </div>
            </div>



            {partners()}

            </div>

    )
}