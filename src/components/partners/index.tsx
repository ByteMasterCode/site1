import React, {Component} from 'react';
import style from './style.module.css'
import ngmk from '../../resources/img/ngmk_white.png';
import peco from '../../resources/img/peco_white.png';
import techno from '../../resources/img/techno_white.png';
import marubeni from '../../resources/img/marubeni_white.png';
import navoiazot from '../../resources/img/navoiyazot_white.png';
import tochu from '../../resources/img/icochu_white.png';
import agmk from '../../resources/img/agmk_white.png';
import orano from '../../resources/img/orano_white.png';
import cameco from '../../resources/img/cameco_white.png';

class Partners extends Component {

    render() {
        return (
            <div className={style.container}>
                <h1 className='text-[35px] ml-6 font-bold mt-2 text-gray-400'>Bizning faoliyat</h1>
                <h1 className='text-[70px] w-[10%] text-green-600 ml-6 font-bold border-b-4 border-green-400'> Hamkorlar</h1>
                <div className={style.wrapper}>
                    <a target="_blank" href='https://www.ngmk.uz/uz/'>
                        <div
                            className="flex justify-center w-[32vw] h-[40vh] p-10   cursor-pointer border-r-2 border-b-2  border-green-300">
                            <div className={style.anim_vetical}></div>
                            <div className={style.anim_horizontal}></div>
                            <img className="w-[200px] h-[200px] " src={ngmk}/></div>
                    </a>
                    <a target="_blank" href='https://reso.ru/'>
                        <div
                            className="flex justify-center w-[32vw] h-[40vh] p-10   cursor-pointer border-b-2 border-r-2  border-green-300">
                            <img className="w-[220px] h-[170px] " src={peco}/></div>
                    </a>
                    <a target="_blank" href='https://www.tehnotrans.ru/ru/'>
                        <div
                            className="flex justify-center w-[32vw] h-[40vh] p-10  cursor-pointer border-b-2  border-green-300">
                            <img className="w-[230px] h-[170px] " src={techno}/></div>
                    </a>
                    <a target="_blank" href='https://www.marubeni.com/en/'>
                        <div
                            className="flex justify-center w-[32vw] h-[40vh] p-10  cursor-pointer border-b-2 border-r-2  border-green-300">
                            <div className={style.anim_horizontal2}></div>
                            <img className="w-[200px] h-[170px] " src={marubeni}/></div>
                    </a>
                    <a target="_blank" href='https://www.orano.group/en/orano-across-the-world/uzbekistan'>
                        <div
                            className="flex justify-center w-[32vw] h-[40vh] border-r-2 border-b-2 p-10  cursor-pointer  border-green-300">
                            <img className="w-[200px] h-[170px] " src={orano}/></div>
                    </a>
                    <a target="_blank" href='https://www.agmk.uz/'>
                        <div
                            className="flex justify-center w-[32vw] h-[40vh] p-10  cursor-pointer border-b-2  border-green-300">
                            <img className="w-[250px] h-[180px] " src={agmk}/></div>
                    </a>
                    <a target="_blank" href='https://www.itochu.co.jp/en/index.html'>
                        <div
                            className="flex justify-center w-[32vw] border-r-2 h-[40vh] p-10  cursor-pointer  border-green-300">
                            <img className="w-[200px] h-[170px] " src={tochu}/></div>
                    </a>
                    <a target="_blank" href='https://www.navoiyazot.uz/'>
                        <div
                            className="flex justify-center w-[32vw] h-[40vh] border-r-2 p-10  cursor-pointer  border-green-300">
                            <img className="w-[200px] h-[170px] " src={navoiazot}/></div>
                    </a>
                    <a target="_blank" href='https://www.cameco.com/'>
                        <div className="flex justify-center w-[32vw] h-[40vh] p-10  cursor-pointer  border-green-300">
                            <img className="w-[200px] h-[170px] " src={cameco}/></div>
                    </a>

                </div>
            </div>
        );
    }
}

export default Partners;