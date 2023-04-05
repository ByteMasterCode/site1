import React, {useEffect, useState} from "react";
import {MenuData} from "../../model/MenuData";
import {FileType} from "../../model/FileType";
import {redirect}from 'react-router-dom';
import {info} from "autoprefixer";
import  style from './style.module.css';
export default function  ContentMenu(){
        const queryParameters = new URLSearchParams(window.location.search)
        const [typeMenu, setTypeMenu] = useState<FileType>();
        const id = queryParameters.get("id");
        const type = queryParameters.get("type");
        const headers = {"Content-Type": "application/json",};

        useEffect(() => {
                fetch(`http://167.172.176.175/api/typemenu/?lang=uz&id=${id}`, {method: "GET", headers: {'Accept': 'application/json'}})
                    .then(async (response) => response.json())
                    .then((info) => {
                            console.log(info);

                            setTypeMenu(info);

                    })
                    .catch((err) => {
                            console.log(err.message);
                    });
                if (typeMenu?.title === null) {
                    console.log('null');
                 redirect('/')

                            }
        }, []);

    function createMarkup(info:any) {
        return {
            __html: info};
    };


    return(

            <div className={style.container}>
                <h1 className='text-2xl font-bold'>{typeMenu?.submenu.menus.name}</h1>
                <div> {typeMenu?.submenu.name}</div>
                <div dangerouslySetInnerHTML={createMarkup(typeMenu?.description)}/>

            </div>
        )
}