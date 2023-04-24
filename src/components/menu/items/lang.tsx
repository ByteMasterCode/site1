import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Cookies from 'universal-cookie';
import {useEffect} from "react";
import {useTranslation} from "react-i18next";

export default function Lang() {
    const cookies = new Cookies();
    const [t,i18n] = useTranslation("global");
    const handleChangeLanguage = (lang:string)=>{
        i18n.changeLanguage(lang);
    }
    useEffect(() => {
        if (cookies.get('lang') === undefined) {
            cookies.set('lang', 'uz')
        }
        console.log(cookies.get('lang'))
    })


    return (
        <ButtonGroup color={'inherit'} variant="contained" aria-label="outlined primary button group">

            <Button onClick={() => {
                cookies.set('lang', 'uz')
                handleChangeLanguage('uz')
                window.location.reload();
            }} >uz</Button>
            <Button onClick={() => {
                cookies.set('lang', 'ru')
                handleChangeLanguage('ru')
                window.location.reload();
            }} >ru</Button>
            <Button onClick={() => {
                cookies.set('lang', 'eng')
                handleChangeLanguage('eng')
                window.location.reload();
            }} >eng</Button>
        </ButtonGroup>
    );
}