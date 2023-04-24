import react, {useEffect, useState} from 'react';
import styles from './styles.module.css'
import {SliderModel} from "../../model/SliderMode";
import Carousel from "nuka-carousel";
import Cookies from "universal-cookie";
export default function Slider() {

    const [sliders, setsliders] = useState([]);
    const headers = { "Content-Type": "application/json",};
    const cookies = new Cookies();
    const lang =cookies.get('lang')
    useEffect(() => {
         fetch(`https://laravel.navoiyuran.uz/api/sliders/?lang=${lang}`,{method:"GET",headers: { 'Accept': 'application/json'}})
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

        <Carousel renderCenterLeftControls={({previousSlide})=>(
            <button className={'flex items-center cursor-pointer bg-green-400/80 hover:bg-green-600 w-[70px] h-[50px]'} onClick={previousSlide}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 35 35" strokeWidth={1.5} stroke="white" className="w-40 h-40 mt-4 ml-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                </svg>

            </button>
        )}
        renderCenterRightControls={({nextSlide})=>(
            <button className={'flex items-center cursor-pointer bg-green-400/80 hover:bg-green-600 w-[70px] h-[50px]'} onClick={nextSlide}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 35 35" strokeWidth={1.5} stroke="white" className="w-40 h-40 mt-4 ml-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>


            </button>
        )}
        >
            {
                sliders.map((value:SliderModel)=>
                   <div className={'w-full   h-full'} >
                    <img className={styles.img} width={'100%'} height={'100%'}  src={'https://laravel.navoiyuran.uz/storage/'+value.image}/>

                   </div>
                )
            }

        </Carousel>

    )
}