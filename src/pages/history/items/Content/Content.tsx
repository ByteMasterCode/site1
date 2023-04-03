import React from "react";
import styles from './styles.module.scss';
import industry  from '../../../../resources/img/zaglushka.jpg'
import Bottom from "../bottom/Bottom";
import Year from "../Year/Year";
import Description from "../description/Description";
export default function Content(){
    return(
        <div className={styles.container}>
            <Year/>
            <Description/>
            <Bottom/>
        </div>
    )
}