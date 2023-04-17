import React, {useEffect, useState} from "react";
import style from './style.module.css';
import {redirect, useParams} from "react-router-dom";
import {FileType} from "../../model/FileType";
import {FileMenuType} from "../../model/FileMenuType";
import filemenuIcon from '../../resources/img/filemenu.jpg';
import Button from '@mui/material/Button';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
export default function FileMenu(){
    const params = useParams();
    const {id}=params;
    const [typeMenu, setTypeMenu] = useState<FileMenuType[]>([]);

    const headers = {"Content-Type": "application/json",};
    const contentMenuApi =  async ()=>{
        fetch(`https://laravel.navoiyuran.uz/api/filemenu/?lang=uz&menu_id=${id}`, {
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

    }
    useEffect(() => {
        contentMenuApi();
    }, [id]);
    return(
        <div className={style.container}>

            {typeMenu.map((value,index)=><>
                <a href={`https://laravel.navoiyuran.uz/storage/${value.file}`} className={style.card}>
                <img width={'200px'} src={filemenuIcon}/>
                    <div className={style.card_wrapper}>
                        <h1 className={'text-green-400 text-[32px] mt-4'}>{value.title}</h1>
                        <h1 className={'text-gray-700-400 text-[32px] mt-4'}>{value.name}</h1>
                        <Button sx={{marginTop:'6px'}} variant="contained" endIcon={<CloudDownloadIcon />}>
                            Yuklab olish
                        </Button>
                    </div>
                </a>
            </>)}
        </div>
    )
}