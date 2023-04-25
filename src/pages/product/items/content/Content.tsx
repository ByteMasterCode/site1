import React from "react";
import styles from './styles.module.css';
import factory from '../../../../resources/img/factory.jpeg';
import half from '../../../../resources/img/half_circle.svg';
import chemical from '../../../../resources/img/chemical.svg';
import pipes from '../../../../resources/img/pipes.svg';
import stone from '../../../../resources/img/stone.svg';
import AOS from 'aos';
import 'aos/dist/aos.css'
import {useTranslation} from "react-i18next";
export default function Content() {
    const [t,i18n] = useTranslation("global");
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
                    <h1> {t("products.title")} </h1>
                    </div>
                    <div className={styles.description}>
                        <div  data-aos="fade-right" data-aos-delay="400"  data-aos-duration="2000">
                            {t("products.content")}                       </div>
                   </div>
                </div>
            </div>

            {/*Content End*/}

            {/*---  Products ---*/}

            <div className={styles.list}>
                <h1>{t("products.header")} </h1>


                <div className={styles.products}>
                    <div className={styles.product_item} data-aos="fade-down" data-aos-delay="200"  data-aos-duration="2000">
                    <img className={'w-[10vh] h-[1-vh]'} src={chemical}/>

                        <div className={styles.description}>
                            <h3 > {t("products.item_1.title")}  </h3>
                            {t("products.item_1.content")}
                        </div>
                    </div>

                    <div className={styles.product_item} data-aos="fade-down" data-aos-delay="200"  data-aos-duration="2000">
                    <img className={'w-[10vh] h-[1-vh]'} src={pipes}/>

                        <div className={styles.description}>
                            <h3 > {t("products.item_2.title")} </h3>
                            {t("products.item_2.content")}
                        </div>
                    </div>
                    <div className={styles.product_item} data-aos="fade-down" data-aos-delay="200"  data-aos-duration="2000">
                    <img className={'w-[10vh] h-[1-vh]'} src={stone}/>

                        <div className={styles.description}>
                            <h3 > {t("products.item_3.title")}  </h3>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, neque.
                        </div>
                    </div>

                </div>
            </div>

            {/*---  Products End ---*/}
        </div>
    )
}