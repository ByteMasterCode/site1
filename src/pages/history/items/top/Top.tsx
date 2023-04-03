import  React from 'react';
import styles from './styles.module.scss';
import logo from '../../../../resources/img/logo_white.svg';

export  default function   Top(){

    return(
        <div className={styles.box}>
            <div className={styles.logo}>
                <div className={'flex w-[65vh] h-[5px] bg-green-400 mt-[5vh]'}/>
                <div className={'flex w-[10vh] h-[10vh] bg-green-400 p-2'}><img className={'animate-spin-slow '} src={logo}/>
                </div>
            </div>

            <h1 className={styles.title}> Bizning Tariximiz</h1>
        </div>
    )
}