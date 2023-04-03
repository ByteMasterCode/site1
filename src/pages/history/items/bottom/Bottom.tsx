import React, {useEffect} from "react";
import styles from './styles.module.css';
import AOS from 'aos';
import bottom from '../../../../resources/img/bottom-slider.svg';
import 'aos/dist/aos.css'

export default function Bottom(){
    useEffect(()=>{
        AOS.init()
    })
    return(
        <div className={styles.container}>

            <div className={styles.core}> </div>
            {/*ListOfScroll*/}
            <div    className={`flex w-[30vh] h-[20vh] bg-green-900 ${styles.box}`}>

                <div className={styles.title} data-aos="fade-down" data-aos-delay="400"  data-aos-duration="1000">
                    <h2> 2017 </h2>

                </div>
                <div className={styles.title_description} data-aos="fade-right" data-aos-delay="200"  data-aos-duration="1000">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, suscipit.
                </div>
            </div>

            <div  className={`flex w-[25h] h-[20vh] {styles.box}`} data-aos="fade-right" data-aos-delay="400"  data-aos-duration="1000">
            <div    className={`flex w-[25vh] h-[20vh] bg-green-800 ${styles.box}`} > </div>
            </div>
            <div  className={`flex w-[25h] h-[20vh] {styles.box}`} data-aos="fade-right" data-aos-delay="600"  data-aos-duration="1000">
                <div    className={`flex w-[25vh] h-[20vh] bg-green-600 ${styles.box}`} > </div>
            </div>
            <div  className={`flex w-[25h] h-[20vh] {styles.box}`} data-aos="fade-right" data-aos-delay="800"  data-aos-duration="1000">
                <div    className={`flex w-[25vh] h-[20vh] bg-green-500 ${styles.box}`} > </div>
            </div>
            <div  className={`flex w-[25h] h-[20vh] {styles.box}`} data-aos="fade-right" data-aos-delay="1000"  data-aos-duration="1000">
                <div    className={`flex w-[25vh] h-[20vh] bg-green-400 ${styles.box}`} > </div>
            </div>
            <div  className={`flex w-[25h] h-[20vh] {styles.box}`} data-aos="fade-right" data-aos-delay="1200"  data-aos-duration="1000">
                <div    className={`flex w-[25vh] h-[20vh] bg-green-300 ${styles.box}`} > </div>
            </div>

        {/*ListOfScroll End*/}

        </div>
    )
}