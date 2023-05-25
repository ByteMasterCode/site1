import React, {Component,useEffect,useState} from 'react';
import style from './style.module.css';
import {redirect, useLocation, useParams} from 'react-router-dom';
import {FileType} from "../../model/FileType";
import {HierarchyType} from "../../model/HierarchyType";
import VerticalTabs from "./items/tab";
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import EmailIcon from '@mui/icons-material/Email';
import Cookies from "universal-cookie";
 export default function Hirarchy(){
     const params = useParams();
     const cookies = new Cookies();
     const lang =cookies.get('lang')
     const {id}=params;
     const [hierarchyMenu, setThierarchy] = useState<HierarchyType[]>([]);
     const headers = {"Content-Type": "application/json",};
     const hierarchyMenuApi =  async ()=>{
         fetch(`https://back.navoiyuran.uz/api/hierarchy/?lang=${lang}&id=${id}`, {
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
                         <img className={'rounded-lg m-4'} width={'200px'} height={'200px'} src={`https://back.navoiyuran.uz/storage/${value.image}`} />
                        <div className={style.contacts}>
                            <div className={style.contact_item}>
                                <AssignmentIndIcon sx={{color:'#ccc',width:'40px',height:'40px',marginRight:'10px'}}/> {value.name}
                            </div>
                            <div className={style.contact_item}>
                                <ContactPhoneIcon sx={{color:'#ccc',width:'40px',height:'40px',marginRight:'10px'}}/> {value.phone}
                            </div>
                            <div className={style.contact_item}>
                                <EmailIcon sx={{color:'#ccc',width:'40px',height:'40px',marginRight:'10px'}}/> {value.email}
                            </div>
                        </div>
                     <VerticalTabs work={value.work} description={value.description}/>
                     </div>
                 )
             }
             <div
                 className='flex flex-row w-full ml-3 mt-5 border-2 border-green-300 rounded-2xl h-24 pl-4 text-green-800 text-[27px] leading-[80px]'>
                 <div className={'cursor-pointer'} onClick={() => {navigator.clipboard.writeText(window.location.href)}}>
                     {window.location.href.substring(0, 70)}
                 </div>
             </div>

         </div>
     )
 }