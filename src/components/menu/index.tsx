import react, {useEffect, useState} from 'react'
import logo from '../../resources/img/logo.svg'
import styles from './styles.module.css'
import {useGetMenusQuery} from "../../store/menus/menus.api";
import {data} from "autoprefixer";
import {Menus, SubMenu} from "../../model/Menus";
import ContentMenu from "../content_menu/contentMenu";
import {Routes,Route,Link}from 'react-router-dom';
import axios from "axios";
export default function Menu() {
    const [posts, setPosts] = useState<Menus[]>([]);
     const getAPI = async (url: string, data: any): Promise<any> =>{
        return await axios({

            url: `http://167.172.176.175/api/menu/?lang=uz`,
        }).then ( (response) => {
            console.log(response)
            return {
                status: response.status,
                data: response.data
            }
        }).catch((error) =>{
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
            if(res.status === 200){
                setPosts(res.data)
                console.log(data)
            }else{
                console.log(res)
            }
        })
    const headers = {"Content-Type": "application/json",};
    useEffect(() => {
getData();
    }, []);

    let checker = (submenu: SubMenu[]) => {
        if (submenu.length > 0) {
            return (<div className={styles.sub}>
                {submenu.map((value) => <div><Link to={`/menu?id=${value.id}&type=${value.type.name}`}> {value.name}</Link></div>)}
            </div>)

        } else {
            return (
                <div></div>
            )
        }
    }


    return (

        <div className={styles.container}>

            <div className={styles.list}>

                <ul>
                    <li>
                        <div className={styles.logo}>
                        <Link to={'/'}>    <img  src={logo} alt={'Navoiy Uran'}/></Link>
                        </div>
                        <Link to={'/'}>   <h1>Navoiy Uran</h1></Link>
                    </li>
                    {posts.map((post: Menus) => {


                        return (
                              <li>

                                  <div className='flex h-full items-center'>  {post.name}  </div>
                                     <div className='fixed text-white'> {checker(post.sub_menu)}</div>

                                </li>


                        )
                    })}

                    <div className='flex  w-40 h-full items-center'>
                        <div className='flex flex-row w-40 h-10 ml-1 mr-4 bg-gray-200 rounded-2xl items-center'>

                            <div className='ml-1 w-12 h-8 rounded-2xl text-[18px] bg-white text-center font-bold'>uz
                            </div>
                            <div
                                className='ml-1 w-12 h-8 rounded-2xl text-[18px] text-gray-400 text-center font-bold'>рус
                            </div>
                            <div
                                className='ml-1 w-12 h-8 rounded-2xl text-[18px] text-gray-400  text-center font-bold'>eng
                            </div>
                        </div>

                    </div>
                </ul>

            </div>

        </div>

    )

}