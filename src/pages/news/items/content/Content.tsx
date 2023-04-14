import React, {useEffect, useState} from "react";
import styles from './style.module.css';
import ntemp from '../../../../resources/img/ntemp.jpg';
import {NewsModel} from "../../../../model/NewsModel";
import {Link} from "react-router-dom";
import AOS from "aos";


export default function Content() {
    const [news, setNews] = useState<NewsModel[]>([]);


    const headers = {"Content-Type": "application/json",};
    useEffect(() => {
        AOS.init();
        fetch('https://laravel.navoiyuran.uz/api/news/?lang=uz', {
            method: "GET",
            headers: {'Accept': 'application/json'}
        })
            .then(async (response) => response.json())
            .then((data) => {
                console.log(data);
                setNews(data);

            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);
    return (
        <div className={styles.container}>
            {
                news.map((value,index)=>
                    <div className={styles.main} style={{backgroundImage:`url(https://laravel.navoiyuran.uz/storage/${value.image})`,
                        backgroundPosition: '50% 50%',
                        backgroundSize: 'cover',
                        backgroundAttachment: 'fixed',
                        backgroundRepeat: "no-repeat"
                    }} data-aos="fade-right" data-aos-delay="400"  data-aos-duration="700"  >
                <div className={styles.badge}>
                    {value.categories.name}
                </div>

                        <div className={styles.description}>
                            {value.description.replace(/(<([^>]+)>)/gi,'').substring(0,60)}

                        </div>

                        <div className={styles.title}>{value.title.substring(0,41)}</div>
                        <div className={styles.main_bottom}>
                        </div>
                    </div>
                ).slice(news.length-1,news.length)
            }
            <div className={`${styles.wrapper}`} >

                {news.map((value,index)=>
                    <div className={styles.item}>
                       <img className={'rounded-lg  '} width={'30%'} height={'100%'} src={`https://laravel.navoiyuran.uz/storage/${value.image}`} />
                        <div  className={styles.item_wrapper}>
                        <div className={styles.item_badge}>{value.categories.name}</div>
                            <div className={styles.item_title}>{value.title}</div>
                            <div className={styles.item_description}> {value.description.replace(/(<([^>]+)>)/gi,'').substring(0,60)}</div>
                        </div>
                    </div>
                ).slice(news.length-3,news.length-1)
                }




            </div>
        </div>
    )
}