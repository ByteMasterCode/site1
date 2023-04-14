import React from "react";
import style from './styles.module.css';
import  logo from '../../resources/img/logo_white.svg'
export default function  Vacansy(){


    return(
        <div className={style.container}>
            <h1 className={'text-[32px] font-bold ml-4 border-l-4 pl-2 mb-2 border-green-400'} > Ochiq ish o`rinlari </h1>
            <div className={style.wrapper}>
                <div className={style.vacansy_item}>
                    <div className={'flex mt-4 flex-row border-b-1 pb-2 border-b-2'}>
                    <img className={'ml-6  bg-green-400 rounded-lg'} width={'70px'} height={'70px'} src={logo}/>
                    <div className={'ml-5 text-[20px] self-center uppercase font-bold'}>Otdel Nomi</div>
                    </div>
                    <div className={'w-fit bg-green-400 rounded-lg mt-1 ml-2 text-[12] text-white pl-2 pr-2'} >Programmer</div>
                    <div className={'p-2'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, consequuntur.</div>
                </div>



            </div>
        </div>
    )
}