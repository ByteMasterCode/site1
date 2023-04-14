import React from "react";
import styles from './styles.module.scss';
import {useTypeSelector} from "../../../../store/hooks";


export default function Description(){

    const state = useTypeSelector(state => state);
    return(
        <div className={styles.container} >
            <h1 className={styles.title}>{state.his.title} </h1>
            {state.his.description}
        </div>
    )
}