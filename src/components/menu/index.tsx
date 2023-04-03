import react, {useEffect, useState} from 'react'
import logo from '../../resources/img/logo.svg'
import styles from './styles.module.scss'
import {useGetMenusQuery} from "../../store/menus/menus.api";
import {data} from "autoprefixer";

export default function Menu() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch('http://167.172.176.175/api/menu/?lang=uz')
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setPosts(data);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);
    return (
        <div className={styles.container}>
            <div className={styles.list}>
                <ul>
                    <li>
                        <div className={styles.logo}>

                            <img src={logo} alt={'Navoiy Uran'} />

                        </div>

                    </li>
                    {posts.map((post)=>{

                        return(
                                // @ts-ignore
                                <li>{post.name}</li>
                        )
                    })}



                </ul>
            </div>
        </div>
    )

}