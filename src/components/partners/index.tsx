import React, {Component} from 'react';
import style from './style.module.css'
import ngmk from '../../resources/img/ngmk_white.png';
import peco from '../../resources/img/peco_white.png';
import techno from '../../resources/img/techno_white.png';
import marubeni from '../../resources/img/marubeni_white.png';
import navoiazot from '../../resources/img/navoiyazot_white.png';
import tochu from '../../resources/img/icochu_white.png';
import agmk from '../../resources/img/agmk_white.png';
import orano from '../../resources/img/orano_white.png';
import cameco from '../../resources/img/cameco_white.png';
import {useTranslation} from "react-i18next";

export default function Partners ()  {

    const [t,i18n] = useTranslation("global");


        return (
            <div className={style.container}>
                <h1 className='text-[35px] ml-6 font-bold mt-2 text-gray-400 uppercase'>{t("partners.header")}</h1>
                <h1 className='text-[70px] w-[10%] text-green-600 ml-6 font-bold border-b-4 border-green-400'> {t("partners.title")}</h1>
                <div className={style.wrapper}>
                    <a target="_blank" href='https://www.ngmk.uz/uz/'>
                        <article className={style.card}>

                            <img src={ngmk}/>

                            <span className={style.top}/>
                            <span className={style.right}/>
                            <span className={style.bottom}/>
                            <span className={style.left}/>
                        </article>
                    </a>
                    <a target="_blank" href='https://reso.ru/'>
                        <article className={style.card}>

                            <img src={peco}/>

                            <span className={style.top}/>
                            <span className={style.right}/>
                            <span className={style.bottom}/>
                            <span className={style.left}/>
                        </article>
                    </a>
                    <a target="_blank" href='https://www.tehnotrans.ru/ru/'>
                        <article className={style.card}>

                            <img src={techno}/>

                            <span className={style.top}/>
                            <span className={style.right}/>
                            <span className={style.bottom}/>
                            <span className={style.left}/>
                        </article>
                    </a>
                    <a target="_blank" href='https://www.marubeni.com/en/'>
                        <article className={style.card}>

                            <img src={marubeni}/>

                            <span className={style.top}/>
                            <span className={style.right}/>
                            <span className={style.bottom}/>
                            <span className={style.left}/>
                        </article>
                    </a>
                    <a target="_blank" href='https://www.orano.group/en/orano-across-the-world/uzbekistan'>
                        <article className={style.card}>

                            <img src={orano}/>

                            <span className={style.top}/>
                            <span className={style.right}/>
                            <span className={style.bottom}/>
                            <span className={style.left}/>
                        </article>
                    </a>
                    <a target="_blank" href='https://www.agmk.uz/'>
                        <article className={style.card}>

                            <img src={agmk}/>

                            <span className={style.top}/>
                            <span className={style.right}/>
                            <span className={style.bottom}/>
                            <span className={style.left}/>
                        </article>
                    </a>
                    <a target="_blank" href='https://www.itochu.co.jp/en/index.html'>
                        <article className={style.card}>

                            <img src={tochu}/>

                            <span className={style.top}/>
                            <span className={style.right}/>
                            <span className={style.bottom}/>
                            <span className={style.left}/>
                        </article>
                    </a>
                    <a target="_blank" href='https://www.navoiyazot.uz/'>
                        <article className={style.card}>

                            <img src={navoiazot}/>

                            <span className={style.top}/>
                            <span className={style.right}/>
                            <span className={style.bottom}/>
                            <span className={style.left}/>
                        </article>
                    </a>
                    <a target="_blank" href='https://www.cameco.com/'>
                        <article className={style.card}>
                            <img src={cameco}/>
                            <span className={style.top}/>
                            <span className={style.right}/>
                            <span className={style.bottom}/>
                            <span className={style.left}/>
                        </article>
                    </a>

                </div>
            </div>)

    }


