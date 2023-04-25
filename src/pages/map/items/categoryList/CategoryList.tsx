import React, {useEffect} from "react";
import styles from './style.module.css';
import whitelogo from '../../../../resources/img/logo_white.svg';
import excavator from '../../../../resources/img/excavator.svg';
import city from '../../../../resources/img/city.svg';
import stock from '../../../../resources/img/stock.svg';
import AOS from 'aos';
import 'aos/dist/aos.css'
import {useTranslation} from "react-i18next";

export default function CategoryList(){
    const [t,i18n] = useTranslation("global");

    useEffect(()=>{
        AOS.init()
    })
    return(
        <div className={styles.container}>
            <div  data-aos="flip-left" data-aos-easing="ease-out-cubic"  data-aos-delay="600"  data-aos-duration="2000">
                    <div className={styles.item}>
                        <div className={`${styles.title} text-red-400`}>
                            {t("export.item_1.title")}
                        </div>
                    <div className={`${styles.paralel} bg-red-400`}>
                    <img className={'w-[5vw] h-[7vh] ml-6 mt-3'} src={whitelogo}/>
                    </div>
                        <h1>
                            01
                        </h1>
                        <div  className={styles.description}>
                            {t("export.item_1.content")} </div>
                    </div>
            </div>
            <div data-aos="flip-left" data-aos-easing="ease-out-cubic"  data-aos-delay="600"  data-aos-duration="2000">

            <div className={styles.item}>
                <div className={`${styles.title} text-sky-400`}>
                    {t("export.item_2.title")}
                </div>
                <div className={`${styles.paralel} bg-sky-400`}>
                    <img className={'w-[5vw] h-[7vh] ml-6 mt-3'} src={city}/>
                </div>
                <h1>
                    02
                </h1>
                <div className={styles.description}>
                    {t("export.item_2.content")}              </div>
            </div>
            </div>
            <div data-aos="flip-left" data-aos-easing="ease-out-cubic"  data-aos-delay="600"  data-aos-duration="2000">
            <div className={styles.item}>
                <div className={` ${styles.title} text-green-400`}>
                    {t("export.item_3.title")}
                </div>
                <div className={`${styles.paralel} bg-green-400`}>
                    <img className={'w-[5vw] h-[7vh] ml-6 mt-3'} src={excavator}/>
                </div>
                <h1>
                    03
                </h1>
                <div className={styles.description}>
                    {t("export.item_3.content")}
                </div>
            </div>
            </div>
            <div data-aos="flip-left" data-aos-easing="ease-out-cubic"  data-aos-delay="600"  data-aos-duration="2000">
            <div className={styles.item}>
                <div className={`${styles.title} text-amber-400`}>
                    {t("export.item_4.title")}
                </div>
                <div className={`${styles.paralel} bg-amber-400`}>
                    <img className={'w-[5vw] h-[7vh] ml-6 mt-3'} src={stock}/>
                </div>
                <h1>
                    04
                </h1>
                <div className={styles.description}>
                    {t("export.item_4.content")}
                </div>
            </div>
            </div>
        </div>
    )
}