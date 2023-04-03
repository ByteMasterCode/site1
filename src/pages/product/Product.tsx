import React from "react";
import styles from './styles.module.scss';
import Content from "./items/content/Content";
import List from "./items/list/List";


export  default function Product(){
    return(
        <div className={styles.container}>
            <Content/>


        </div>
    )
}