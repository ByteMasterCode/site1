import React from "react";
import styles from './styles.module.css';
import factory from '../../../../resources/img/factory.jpeg';
import half from '../../../../resources/img/half_circle.svg';
import chemical from '../../../../resources/img/chemical.svg';
import pipes from '../../../../resources/img/pipes.svg';
import stone from '../../../../resources/img/stone.svg';
import AOS from 'aos';
import 'aos/dist/aos.css'
export default function Content() {
    return (

        <div className={styles.container}>
            {/*Content*/}

            <div className={styles.item}>

                <div className={styles.mask} >

                    <img className={'w-full h-full '} src={factory} />

                    <img
                        className={'w-[185vw] h-[79.5vh] -translate-x-[28vw] rotate-[1deg] translate-y-10 absolute'}
                        src={half}/>
                </div>

                <div className={styles.content}>
                    <div  data-aos="fade-left" data-aos-delay="400"  data-aos-duration="2000">
                    <h1> MAMLAKATIMIZ KORXONALARI VA OʼZ EHTIYOJIMIZ UCHUN SULFAT KISLOTA ISHLAB CHIQARAMIZ </h1>
                    </div>
                    <div className={styles.description}>
                        <div  data-aos="fade-left" data-aos-delay="400"  data-aos-duration="2000">
                            Hozirgi kunda “Navoiyuran” davlat korxonasining asosiy tarkibiy qismlaridan hisoblangan Sulfat kislotasi ishlab chiqarish tsexi 2184-2013 GOST asosida texnik sulfat kislota (N2SO4) ishlab chiqaradi va tabiiy uranni qazib olish uchun asosiy xom ashyo sifatida  ishlatiladi. Shuningdek, “Navoiy kon metallurgiya kombinati” AJ korxonalarida oltin ishlab chiqarishda, “Navoiyazot” AJ va “Navoiy issiqliq elektr stansiyasi” AJ ishlab chiqarish jarayonida xom ashyo sifatida foydalanadi.                        </div>
                   </div>
                </div>
            </div>

            {/*Content End*/}

            {/*---  Products ---*/}

            <div className={styles.list}>
                <h1> Bizning Maxsulotlar </h1>


                <div className={styles.products}>
                    <div className={styles.product_item} data-aos="fade-down" data-aos-delay="200"  data-aos-duration="2000">
                    <img className={'w-[10vh] h-[1-vh]'} src={chemical}/>

                        <div className={styles.description}>
                            <h3 > Sulfat kislotasi  </h3>
                  2184-2013 GOST asosida texnik sulfat kislota (N2SO4)
                        </div>
                    </div>

                    <div className={styles.product_item} data-aos="fade-down" data-aos-delay="200"  data-aos-duration="2000">
                    <img className={'w-[10vh] h-[1-vh]'} src={pipes}/>

                        <div className={styles.description}>
                            <h3 > Quvr maxsulotlari </h3>
                            Turli karroziya va ishqolanishga chidamli quvur mahsulotlari ishlab chiqariladi.
                        </div>
                    </div>
                    <div className={styles.product_item} data-aos="fade-down" data-aos-delay="200"  data-aos-duration="2000">
                    <img className={'w-[10vh] h-[1-vh]'} src={stone}/>

                        <div className={styles.description}>
                            <h3 > Qazilma boyliklar </h3>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, neque.
                        </div>
                    </div>

                </div>
            </div>

            {/*---  Products End ---*/}
        </div>
    )
}