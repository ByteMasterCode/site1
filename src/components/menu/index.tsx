import react, {useEffect, useState} from 'react'
import logo from '../../resources/img/logo.svg'
import styles from './styles.module.css'
import {data} from "autoprefixer";
import {Menus, SubMenu} from "../../model/Menus";
import ContentMenu from "../content_menu/contentMenu";
import {Routes, Route, Link, useNavigate} from 'react-router-dom';
import axios from "axios";
import Lang from "./items/lang";
import Cookies from "universal-cookie";



export default function Menu() {
    const cookies = new Cookies();

    const [posts, setPosts] = useState<Menus[]>([]);

    let lang =cookies.get('lang');
    if (lang === undefined) {lang ='uz';}
    const getAPI = async (url: string, data: any): Promise<any> => {
        return await axios({

            url: `https://back.navoiyuran.uz/api/menu/?lang=${lang}`,
        }).then((response) => {
            console.log(response)
            return {
                status: response.status,
                data: response.data
            }
        }).catch((error) => {
            console.log(error.data)
            return {
                status: error.status,
                data: error.response
            }
        })
    }
    // @ts-ignore
    const getData = () => getAPI().then(
        (res) => {
            if (res.status === 200) {
                setPosts(res.data)
                console.log(data)
            } else {
                console.log(res)
            }
        })
    const headers = {"Content-Type": "application/json",};


    useEffect(() => {
        getData();
    }, [lang]);


    return (

        <div className={styles.container}>
            <div className={styles.topsetting}>

                <Link to={'/'} className="flex p-1 ml-2 self-start items-center ">
                    <img className="h-14" src={logo} alt=""/>
                    <span className="ml-4 text-green-700 uppercase font-black">"Navoiyuran" davlat korxonasi</span>
                </Link>
                <div className={'mr-2'}>
                <Lang/>
                </div>
            </div>
            <div className={styles.wrapper}>


            <nav className="contents font-semibold text-base lg:text-lg">

                <ul className="mx-auto flex items-center">

                    {posts.map((value: Menus) => {
                        return (
                            <li className="p-2 xl:p-8 group inline-block relative">

                                <div className="group inline-block relative">
                                    <button
                                        className=" text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center"
                                    >
                                        <span className="mr-1">{value.name}</span>


                                    </button>
                                    <ul className=" absolute hidden  text-gray-700 w-max pt-1 description-[0.5s] group-hover:block">
                                        {value.sub_menu.map((subs: SubMenu, index) => {
                                            console.log(subs.id)
                                            return (
                                                <li key={index} className="p-2 border-b cursor-pointer border-gray-400 hover:bg-green-400 hover:text-white  bg-white">
                                                    {subs.type.name === 'menu' ? <Link
                                                        to={`/menu/${subs.id}/${subs.type.name}`}

                                                    >{subs.name}</Link> : subs.type.name === 'file' ? <Link
                                                        to={'/file/' + subs.id + '/' + subs.type.name}
                                                    >{subs.name}</Link> : subs.type.name === 'hierarchy' ? <Link to={`/hierarchy/${subs.id}/${subs.type.name}`}
                                                        >{subs.name}</Link> : ''
                                                        }

                                                </li>
                                            )
                                        })}


                                    </ul>
                                </div>


                            </li>
                        )
                    })}


                </ul>
            </nav>
            </div>
        </div>

    )

}