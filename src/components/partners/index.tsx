import React, {Component} from 'react';
import style from './style.module.css'
import ngmk from '../../resources/img/ngmk.jpeg';
import peco from '../../resources/img/peco.png';
import techno from '../../resources/img/techno.png';
import marubeni from '../../resources/img/marubeni.png';
import navoiazot from '../../resources/img/navoiyazot.png';
import tochu from '../../resources/img/itochu.png';
import agmk from '../../resources/img/agmk.png';
import orano from '../../resources/img/orano.png';
import cameco from '../../resources/img/cameco.png';
class Partners extends Component {

    render() {
        return (
            <div className={style.container}>
                <h1 className='text-[30px] ml-6 text-gray-400'>Bizning faoliyat</h1>
                <h1 className='text-[70px] w-[10%] ml-6 font-bold border-b-4 border-green-400'> Hamkorlar</h1>
                <div className={style.wrapper}>

             <a target="_blank" href='https://www.ngmk.uz/uz/'>    <div className={style.item}><img className="w-[200px] h-[200px] " src={ngmk}/></div> </a>
             <a target="_blank" href='https://reso.ru/'>   <div className={style.item}><img className="w-[200px] h-[170px] " src={peco}/></div> </a>
             <a target="_blank" href='https://www.tehnotrans.ru/ru/'>   <div className={style.item}><img className="w-[200px] h-[170px] " src={techno}/></div> </a>
             <a target="_blank" href='https://www.marubeni.com/en/'>   <div className={style.item}><img className="w-[200px] h-[170px] " src={marubeni}/></div> </a>
             <a target="_blank" href='https://www.orano.group/en/orano-across-the-world/uzbekistan'>   <div className={style.item}><img className="w-[200px] h-[170px] " src={orano}/></div> </a>
             <a target="_blank" href='https://www.agmk.uz/'>   <div className={style.item}><img className="w-[200px] h-[170px] " src={agmk}/></div> </a>
             <a target="_blank" href='https://www.itochu.co.jp/en/index.html'>   <div className={style.item}><img className="w-[200px] h-[170px] " src={tochu}/></div> </a>
             <a target="_blank" href='https://www.navoiyazot.uz/'>   <div className={style.item}><img className="w-[200px] h-[170px] " src={navoiazot}/></div> </a>
             <a target="_blank" href='https://www.cameco.com/'>   <div className={style.item}><img className="w-[200px] h-[170px] " src={cameco}/></div> </a>

                </div>
            </div>
        );
    }
}

export default Partners;