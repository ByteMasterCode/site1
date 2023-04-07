import react, {useEffect, useState} from 'react';
import styles from './styles.module.css'
import img_1 from '../../resources/img/img_1.jpg';
import img_2 from '../../resources/img/img_2.jpg';
import img_3 from '../../resources/img/img_3.jpg';
import {SliderModel} from "../../model/SliderMode";

export default function Slider() {

    const [sliders, setsliders] = useState([]);
    const headers = { "Content-Type": "application/json",};
    useEffect(() => {
         fetch('http://167.172.176.175/api/sliders/?lang=uz',{method:"GET",headers: { 'Accept': 'application/json'}})
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setsliders(data);
                setCount(data.length);
                const el = document.getElementById('wrap');
                // @ts-ignore
                sizeUpdate(el.children[0].scrollWidth)
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);

    const icons = [
        {
            forward: <svg className="w-20 h-20 cursor-pointer" fill="none" stroke="white" viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
            </svg>
        },
        {
            back: <svg className="w-20 h-20 cursor-pointer" fill="none" stroke="white" viewBox="0 0 24 24"
                       xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
            </svg>
        }
    ]
    const [pos, posState] = useState<number>(0);
    const [ch, chState] = useState<number>();
    const [size, sizeUpdate] = useState<number>(0);
    const [count, countUpdate] = useState(1);
    const [scount,setCount]=useState(1);
    const forward = () => {
        if (count < sliders.length) {
            posState((size * count) * -1);
            countUpdate(count + 1);
        }
        console.log(pos - size)
    };
    const back = () => {
        if (count > 1) {
            countUpdate((count - 1));
            posState((pos - size * -1));
        }

    };
    useEffect(() => {

    }, [])



    return (
        <div className={styles.container}>
            <div id={'wrap'} className={styles.wrapper}>
            {sliders.map((info:SliderModel,index)=>
                <div key={index} className={styles.img} style={{transform: `translateX(${pos}px)`}}>
                    <div className={styles.title}>
                        <div className={styles.area}>
                            <h1> {info.title}</h1>
                            <h3 className={'text-white text-xl ml-8'}>{info.content}</h3>
                            <div
                                className={'flex mt-5 ml-[550px] justify-center  w-[100px] h-[50px] bg-emerald-300 rounded-lg text-center align-middle text-white'}>
                                <div className={'mt-2 text-lg'}>
                                    Перейти
                                </div>
                            </div>
                        </div>


                    </div>

                    <img src={'http://167.172.176.175/storage/'+info.image} className={'w-full h-full'}/>

                </div>

            )}

                {<div></div>}

            </div>

            <div className={styles.controller}>
                <div className={styles.control}>
                    <div className={styles.back} onClick={(e) => (
                        back()
                    )}>
                        {icons[1].back}
                    </div>
                    <div>


                    </div>
                    <div className={styles.forward} onClick={(e) => (
                        forward()
                    )}>
                        {icons[0].forward}
                    </div>
                </div>
            </div>
        </div>
    )
}