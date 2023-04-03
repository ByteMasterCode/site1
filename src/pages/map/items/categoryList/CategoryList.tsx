import React, {useEffect} from "react";
import styles from './styles.module.css';
import whitelogo from '../../../../resources/img/logo_white.svg';
import excavator from '../../../../resources/img/excavator.svg';
import city from '../../../../resources/img/city.svg';
import stock from '../../../../resources/img/stock.svg';
import AOS from 'aos';
import 'aos/dist/aos.css'

export default function CategoryList(){
    useEffect(()=>{
        AOS.init()
    })
    return(
        <div className={styles.container}>
            <div  data-aos="flip-left" data-aos-easing="ease-out-cubic"  data-aos-delay="600"  data-aos-duration="2000">
                    <div className={styles.item}>
                        <div className={`${styles.title} text-red-400`}>
                        Navoiy Uran
                        </div>
                    <div className={`${styles.paralel} bg-red-400`}>
                    <img className={'w-[7vh] h-[7vh] ml-6 mt-3'} src={whitelogo}/>
                    </div>
                        <h1>
                            01
                        </h1>
                        <div  className={styles.description}>
                            O‘zbekistion uran qazib olish bo‘yicha yetakchi beshtalikka kirdi </div>
                    </div>
            </div>
            <div data-aos="flip-left" data-aos-easing="ease-out-cubic"  data-aos-delay="600"  data-aos-duration="2000">

            <div className={styles.item}>
                <div className={`${styles.title} text-sky-400`}>
                    Shaxarlar
                </div>
                <div className={`${styles.paralel} bg-sky-400`}>
                    <img className={'w-[7vh] h-[7vh] ml-6 mt-3'} src={city}/>
                </div>
                <h1>
                    02
                </h1>
                <div className={styles.description}>
                    "Navoiyuran" Davlat korxonasi tomonidan O'zbekiston Respublikasining Navoiy, Samarqand va Buxoro viloyatlarida uchta uran qazib olish bo'linmalari tomonidan 18 ta uran koni o'zlashtiriladi.                </div>
            </div>
            </div>
            <div data-aos="flip-left" data-aos-easing="ease-out-cubic"  data-aos-delay="600"  data-aos-duration="2000">
            <div className={styles.item}>
                <div className={`${styles.title} text-green-400`}>
                    Qazib olish
                </div>
                <div className={`${styles.paralel} bg-green-400`}>
                    <img className={'w-[7vh] h-[7vh] ml-6 mt-3'} src={excavator}/>
                </div>
                <h1>
                    03
                </h1>
                <div className={styles.description}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae ipsam maiores numquam quos ratione saepe?
                </div>
            </div>
            </div>
            <div data-aos="flip-left" data-aos-easing="ease-out-cubic"  data-aos-delay="600"  data-aos-duration="2000">
            <div className={styles.item}>
                <div className={`${styles.title} text-amber-400`}>
                    Zaxira
                </div>
                <div className={`${styles.paralel} bg-amber-400`}>
                    <img className={'w-[7vh] h-[7vh] ml-6 mt-3'} src={stock}/>
                </div>
                <h1>
                    04
                </h1>
                <div className={styles.description}>
                    O‘zbekiston uran qazib olish bo‘yicha yetakchi davlatlardan biridir. Respublikaning uran zaxiralari 132,3 ming tonna (jahon zaxiralarining 2%) deb baholanib, dunyoda 11 o‘rinni egallaydi.
                </div>
            </div>
            </div>
        </div>
    )
}