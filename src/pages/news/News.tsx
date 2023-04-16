import React, {useEffect, useState} from "react";
import styles from './styles.module.scss';
import Content from "./items/content/Content";
import {Categories} from "../../model/Categories";
import {useDispatch} from "react-redux";
import {useTypeSelector} from "../../store/hooks";

export default function News(){
    const [newsCategory, setnewsCategory] = useState([]);
    const dispatch = useDispatch();
    const state = useTypeSelector(state => state);
    const headers = {"Content-Type": "application/json",};
    useEffect(() => {
        fetch('https://laravel.navoiyuran.uz/api/categories/?lang=uz', {method: "GET", headers: {'Accept': 'application/json'}})
            .then(async (response) => response.json())
            .then((data) => {
                console.log(data);

                setnewsCategory(data);
            })
            .catch((err) => {
                console.log(err.message);
            });

    }, []);

    return(
        <div  className={styles.container}>
            <div  className={styles.categories}>
                <h1> Yangiliklar </h1>

                <ul>
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