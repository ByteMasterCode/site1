import React, {useEffect, useState, useTransition} from "react";
import styles from './styles.module.scss';
import Content from "./items/content/Content";
import {Categories} from "../../model/Categories";
import {useDispatch} from "react-redux";
import {useTypeSelector} from "../../store/hooks";
import Cookies from "universal-cookie";
import global  from '../../translations/uz/global.json';
import {useTranslation} from "react-i18next";
export default function News(){
    const [newsCategory, setnewsCategory] = useState([]);
    const dispatch = useDispatch();
    const state = useTypeSelector(state => state);
    const headers = {"Content-Type": "application/json",};
    const cookies = new Cookies();
    const lang =cookies.get('lang')
    const [t,i18n] = useTranslation("global");

    useEffect(() => {
        fetch(`https://back.navoiyuran.uz/api/categories/?lang=${lang}`, {method: "GET", headers: {'Accept': 'application/json'}})
            .then(async (response) => response.json())
            .then((data) => {
                console.log(data);

                setnewsCategory(data);

                console.log(t("News.title"))
            })
            .catch((err) => {
                console.log(err.message);
            });


    }, []);






    return(
        <div  className={styles.container}>
            <div  className={styles.categories}>

                <h1>

                    {
                        t('News.title')
                    }
                </h1>

                <ul>
                    <li className={state.catego.id === 0 ? '  border-b-4 border-green-400 text-green-400 ':''} onClick={()=>{
                        dispatch({type:"SET_CURRENT",payload:0})
                        console.log(state.catego.id);
                    }}>
                        {  t('News.menu')}
                    </li>
                    {newsCategory.map((value:Categories)=>
                        <li className={state.catego.id === value.id ? '  border-b-4 border-green-400 text-green-400 ':''}  onClick={()=>{
                            dispatch({type:"SET_CURRENT",payload:value.id})
                            console.log(state.catego.id);
                        }}>{value.name}</li>
                      )}
                </ul>
            </div>

        <Content/>

        </div>
    )
}