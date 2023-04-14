import React, {useEffect, useState} from "react";
import {MenuData} from "../../model/MenuData";
import {FileType} from "../../model/FileType";
import {redirect, useLocation, useParams} from 'react-router-dom';
import {info} from "autoprefixer";
import style from './style.module.css';

export default function ContentMenu() {

        const params = useParams();
        const {id}=params;
         const [typeMenu, setTypeMenu] = useState<FileType>();

    const headers = {"Content-Type": "application/json",};
    const contentMenuApi =  async ()=>{
        fetch(`https://laravel.navoiyuran.uz/api/typemenu/?lang=uz&id=${id}`, {
            method: "GET",
            headers: {'Accept': 'application/json'}
        })
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
    }
    useEffect(() => {
       contentMenuApi();
    }, [id]);

    function createMarkup(info: any) {
        return {
            __html: info
        };
    };


    return (

        <div className={style.container}>

            <h1 className='text-[40px] text-gray-400 font-bold'>{(typeMenu?.submenu.menus !== null) ? typeMenu?.submenu.menus.name.toUpperCase() : ''}</h1>
            <div className='text-[70px] text-gray-800 mt-4'> {typeMenu?.submenu.name.toUpperCase()}</div>
            <img className='w-full h-1/4 mt-4 rounded-2xl align-middle' src={'https://laravel.navoiyuran.uz/storage/' + typeMenu?.image}/>
            <div className={'mt-4'} dangerouslySetInnerHTML={createMarkup(typeMenu?.description)}/>


            <div
                className='flex flex-row w-full ml-3 mt-5 border-2 border-green-300 rounded-2xl h-24 pl-4 text-green-800 text-[27px] leading-[80px]'>
                <div className={'cursor-pointer'} onClick={() => {navigator.clipboard.writeText(window.location.href)}}>
                {window.location.href.substring(0, 70)}
                </div>
            </div>
        </div>
    )
}