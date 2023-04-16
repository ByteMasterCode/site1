import React, {Component,useEffect,useState} from 'react';
import style from './style.module.css';
import {redirect, useLocation, useParams} from 'react-router-dom';
import {FileType} from "../../model/FileType";
import {HierarchyType} from "../../model/HierarchyType";

 export default function Hirarchy(){
     const params = useParams();
     const {id}=params;
     const [hierarchyMenu, setThierarchy] = useState<HierarchyType[]>([]);
     const headers = {"Content-Type": "application/json",};
     const hierarchyMenuApi =  async ()=>{
         fetch(`https://laravel.navoiyuran.uz/api/hierarchy/?lang=uz&id=${id}`, {
             method: "GET",
             headers: {'Accept': 'application/json'}
         })
             .then(async (response) => response.json())
             .then((info) => {
                 console.log(info);

                 setThierarchy(info);

             })
             .catch((err) => {
                 console.log(err.message);
             });
         if (hierarchyMenu?.length === 0) {
             console.log('null');
             redirect('/')

         }
     }

     useEffect(() => {
         hierarchyMenuApi();
     }, [id]);

     return(
         <div className={style.container}>
             {
                 hierarchyMenu.map((value,index)=>
                     <div className={style.card}>
                         <img className={'rounded-lg m-4'} width={'200px'} height={'200px'} src={`https://laravel.navoiyuran.uz/storage/${value.image}`} />

                     </div>
                 )
             }


         </div>
     )
 }