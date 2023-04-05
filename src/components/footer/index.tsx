import React, {Component, useEffect, useState} from 'react';
import style from './style.module.css';
import {Menus, SubMenu} from "../../model/Menus";
export default function Footer () {



        const [posts, setPosts] = useState([]);


        const headers = {"Content-Type": "application/json",};
        useEffect(() => {
            fetch('http://167.172.176.175/api/menu/?lang=uz', {method: "GET", headers: {'Accept': 'application/json'}})
                .then(async (response) => response.json())
                .then((data) => {
                    console.log(data);
                    setPosts(data);
                })
                .catch((err) => {
                    console.log(err.message);
                });
        }, []);

        return (
            <div className={style.container}>
                {posts.map((value:Menus)=> <div>
                    {value.name}
                </div>)}
            </div>
        );

}
