import React from "react";
import styles from './styles.module.scss';
import Content from "./items/content/Content";
import List from "./items/list/List";
import Cookies from "universal-cookie";
const cookies = new Cookies();

export  default function Product(){
    const check =()=>{
        if (cookies.get('lang')===undefined){
            cookies.set('lang','uz');
        }
    }
    check();

    return(
        <div className={styles.container}>
            <Content/>


        </div>
    )
}