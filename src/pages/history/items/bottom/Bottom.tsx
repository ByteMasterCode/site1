import React, {useEffect, useState} from "react";
import styles from './styles.module.css';
import AOS from 'aos';
import bottom from '../../../../resources/img/bottom-slider.svg';
import 'aos/dist/aos.css'
import {redirect} from "react-router-dom";
import {History} from "../../../../model/History";
import {useDispatch, useSelector} from "react-redux";
import {useTypeSelector} from "../../../../store/hooks";
import Cookies from "universal-cookie";

export default function Bottom(){
    const [mainyear , setMainYear] = useState<string>();
    const [mainimage,setMainimage] = useState<string>();
    const [maindescription,setMaindescription] = useState<string>();
    const  dispatch = useDispatch();
    const cookies = new Cookies();
    const lang =cookies.get('lang')
    const state = useTypeSelector(state => state);
    useEffect(()=>{

        AOS.init()
    })
    const [histories, setHistories] = useState([]);

    useEffect(() => {
        fetch(`https://laravel.navoiyuran.uz/api/history/?lang=${lang}`, {method: "GET", headers: {'Accept': 'application/json'}})
            .then(async (response) => response.json())
            .then((info) => {


                setHistories(info);
                dispatch({type:"YEAR_UPDATE",payload:info[0].year})
                dispatch({type:"IMG_UPDATE",payload:info[0].image})
                dispatch({type:"DESCRIPTION_UPDATE",payload:info[0].description})
                dispatch({type:"TITLE_UPDATE",payload:info[0].title})
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);
    return(

        <div className={styles.container}>


            {/*ListOfScroll*/}
            {histories.map((histor:History)=>
                <div  onClick={()=>{
                    dispatch({type:"YEAR_UPDATE",payload:histor.year})
                    dispatch({type:"IMG_UPDATE",payload:histor.image})
                    dispatch({type:"DESCRIPTION_UPDATE",payload:histor.description})
                    dispatch({type:"TITLE_UPDATE",payload:histor.title})
                }}    className={`flex w-[10vw] h-[20vh] bg-green-900 ${styles.box}`} style={{background:`url(https://laravel.navoiyuran.uz/storage/${histor.image})`,
                    backgroundPosition: '50% 50%',
                    backgroundSize: 'cover',
                    backgroundAttachment: 'fixed',
                    backgroundRepeat: "no-repeat"}}>
                <div className={styles.title} data-aos="fade-down" data-aos-delay="400"  data-aos-duration="1000">
                    <h2 className={`${styles.cro} bg-green-600 rounded-lg`} > {histor.year} </h2>

                </div>
                <div className={styles.title_description} data-aos="fade-right" data-aos-delay="200"  data-aos-duration="1000">
                    {histor.sort_description}
                </div>
                </div>
            )}





        {/*ListOfScroll End*/}

        </div>

    )
}