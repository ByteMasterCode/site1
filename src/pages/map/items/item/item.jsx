import React from "react";
import style from './style.module.css';


export default function   Item(props){

        return(
                <div className={`${style.container} ${props.color}`}>

                        <img className={style.img}  src={props.img}/>
                  <div className={'self-center'}>  {props.country}</div>
                </div>
        )
}