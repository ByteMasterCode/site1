import React from "react";
import styles from './styles.module.scss';
import Content from "./items/content/Content";

export default function News(){
    return(
        <div  className={styles.container}>
            <div  className={styles.categories}>
                <h1> Yangiliklar </h1>

                <ul>
                    <li>
                        Mahalliy
                    </li>
                    <li>
                        Dunyo
                    </li>
                    <li>
                        Siyosiy
                    </li>
                    <li>
                        Dunyo
                    </li>
                </ul>
            </div>

        <Content/>

        </div>
    )
}