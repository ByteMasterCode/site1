import React, {useEffect, useState} from "react";
import style from './style.module.css';
import {redirect, useParams} from "react-router-dom";
import {HierarchyType} from "../../model/HierarchyType";
import {ShowNews} from "../../model/ShowNews";
import {info} from "autoprefixer";
import {CategoryOneNews} from "../../model/CategoryOneNews";
import {Categories} from "../../model/Categories";
import youtube from '../../resources/img/youtube.png';
import facebook from '../../resources/img/facebook.png';
import instagram from '../../resources/img/instagram.png';
import telegram from '../../resources/img/telegram.png';


export default function  NewsShow(){

    const params = useParams();
    const {id}=params;
    const [news, setNewsOne] = useState<ShowNews[]>([]);
    const [categories,setCategories] = useState<Categories[]>([])
     const newsOne =  async ()=>{
        fetch(`https://laravel.navoiyuran.uz/api/news/one/?id=${id}&lang=uz`, {
            method: "GET",
            headers: {'Accept': 'application/json'}
        })
            .then(async (response) => response.json())
            .then((info) => {
            console.log(id)
        console.log(info[0].title)
              setNewsOne(info);

            })
            .catch((err) => {
                console.log(err.message);
            });

    }
    const category =  async ()=>{
        fetch(`https://laravel.navoiyuran.uz/api/categories/?lang=uz`, {
            method: "GET",
            headers: {'Accept': 'application/json'}
        })
            .then(async (response) => response.json())
            .then((info) => {

                setCategories(info);

            })
            .catch((err) => {
                console.log(err.message);
            });

    }


        useEffect(()=>{
            newsOne();
            category();
        },[id])
    function createMarkup(info: any) {
        return {
            __html: info
        };
    };


    return(
        <div className={style.container}>
            <div className={style.wrapper}>
            <h1>{news[0]?.title}</h1>
            <img className='w-full h-1/4 mt-4 rounded-2xl align-middle' src={'https://laravel.navoiyuran.uz/storage/' + news[0]?.image}/>

            <div className={'mt-4'} dangerouslySetInnerHTML={createMarkup(news[0]?.description)}/>

            <div
                className='flex flex-row w-full ml-3 mt-5 border-2 border-green-300 rounded-2xl h-24 pl-4 text-green-800 text-[27px] leading-[80px]'>
                <div className={'cursor-pointer'} onClick={() => {navigator.clipboard.writeText(window.location.href)}}>
                    {window.location.href.substring(0, 70)}
                </div>
            </div>
            </div>
            <div className={style.side_menu} >

            <div className={style.categories}>
            <div className={'text-xl text-blue-400 border-b-4 border-blue-300 mb-4 font-bold m-3'}>
                Yangiliklar kategoriyasi
            </div>
                <div className={style.categories_container}>
                {categories.map((value,index)=><div className={style.categories_item}>{value.name}</div>)
                }
                </div>
            </div>
                <div className={style.social}>
                    <div className={'text-xl text-red-400 border-b-4 border-red-300 mb-4 font-bold m-3'}>
                        Biz Ijtimoiy tarmoqlarda
                    </div>
                    <div className={`${style.social_item} bg-red-500 border-2 border-red-700`}>
                        <img  className={' bg-white  cursor-pointer'} width={42} height={42} src={youtube}/>
                        <div className={'ml-4 self-center text-lg'}>  Youtube</div>
                    </div>
                    <div className={`${style.social_item} bg-blue-500 border-2 border-blue-700`}>
                        <img  className={' bg-white  cursor-pointer'} width={42} height={42} src={facebook}/>
                        <div className={'ml-4 self-center text-lg'}>  Facebook</div>
                    </div>
                    <div className={`${style.social_item} bg-purple-500 border-2 border-purple-700`}>
                        <img  className={' bg-white  cursor-pointer'} width={42} height={42} src={instagram}/>
                        <div className={'ml-4 self-center text-lg'}>  Instagram</div>
                    </div>
                    <div className={`${style.social_item} bg-sky-500 border-2 border-sky-700`}>
                        <img  className={' bg-white  cursor-pointer'} width={42} height={42} src={telegram}/>
                        <div className={'ml-4 self-center text-lg'}>  Telegram</div>
                    </div>
                </div>
            </div>
        </div>
    )
}