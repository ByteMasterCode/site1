import react, {useEffect, useState} from 'react';
import styles from './styles.module.css'
import img_1 from '../../resources/img/img_1.jpg';
import img_2 from '../../resources/img/img_2.jpg';
import img_3 from '../../resources/img/img_3.jpg';
import {SliderModel} from "../../model/SliderMode";

export default function Slider() {

    const [sliders, setsliders] = useState([]);
    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/menu/?lang=uz')
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setsliders(data);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);
    const images = [
        {
            img: img_1,
            title: 'Zafarobod',
            content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad assumenda nam natus non perferendis quam. Amet,\n' +
                '        aspernatur dicta excepturi illo ipsa minus obcaecati odit quaerat quisquam reiciendis, repellat suscipit\n' +
                '        unde?'
        },
        {
            img: img_2,
            title: 'text_2',
            content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad assumenda nam natus non perferendis quam. Amet,\n' +
                '        aspernatur dicta excepturi illo ipsa minus obcaecati odit quaerat quisquam reiciendis, repellat suscipit\n' +
                '        unde?'
        },
        {
            img: img_3,
            title: 'text_3',
            content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad assumenda nam natus non perferendis quam. Amet,\n' +
                '        aspernatur dicta excepturi illo ipsa minus obcaecati odit quaerat quisquam reiciendis, repellat suscipit\n' +
                '        unde?'
        },
    ]
    const icons = [
        {
            forward: <svg className="w-12 h-12 cursor-pointer" fill="none" stroke="white" viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
            </svg>
        },
        {
            back: <svg className="w-12 h-12 cursor-pointer" fill="none" stroke="white" viewBox="0 0 24 24"
                       xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
            </svg>
        }
    ]
    const [pos, posState] = useState<number>(0);
    const [ch, chState] = useState<number>();
    const [size, sizeUpdate] = useState<number>(0);
    const [count, countUpdate] = useState(1);

    const forward = () => {
        if (count < images.length) {
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
        const el = document.getElementById('wrap');
        // @ts-ignore
        sizeUpdate(el.children[0].scrollWidth)
    }, [])



    return (
        <div className={styles.container}>
            <div id={'wrap'} className={styles.wrapper}>

                {images.map((value, index) =>

                    <div key={index} className={styles.img} style={{transform: `translateX(${pos}px)`}}>
                        <div className={styles.title}>
                            <div className={styles.area}>
                                <h1> {value.title}</h1>
                                <h3 className={'text-white text-xl ml-8'}>{value.content}</h3>
                                <div
                                    className={'flex mt-5 ml-[550px] justify-center  w-[100px] h-[50px] bg-emerald-300 rounded-lg text-center align-middle text-white'}>
                                    <div className={'mt-2 text-lg'}>
                                        Перейти
                                    </div>
                                </div>
                            </div>
                        </div>
                        <img src={value.img} className={'w-full h-full'}/>
                    </div>
                )}

            </div>

            <div className={styles.controller}>
                <div className={styles.control}>
                    <div className={styles.back} onClick={(e) => (
                        back()
                    )}>
                        {icons[1].back}
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