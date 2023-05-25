import React, {useEffect} from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from "react-redux";
import {store} from "./store";
import global_en from './translations/eng/global.json';
import global_ru from './translations/ru/global.json';
import global_uz from './translations/uz/global.json';
import i18next from "i18next";
import {I18nextProvider, initReactI18next} from "react-i18next";
import Cookies from "universal-cookie";
const cookies = new Cookies();
let lang =cookies.get('lang')
const check =()=>{
    if (cookies.get('lang')===undefined){
        cookies.set('lang','uz');
        lang = 'uz';
    }
}
check();
i18next.init({
    interpolation:{escapeValue:false},
    lng:lang,
    resources:{
        uz:{
            global:  global_uz
        },
        ru:{
            global:  global_ru
        },
        eng:{
            global:  global_en
        }
    }
})
const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(

        <BrowserRouter>
            <Provider store={store}>
                <I18nextProvider i18n={i18next}>
            <App/>
                </I18nextProvider>
            </Provider>
        </BrowserRouter>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
