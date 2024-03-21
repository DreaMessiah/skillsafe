import {useState,useContext} from "react";
import {Link} from "react-router-dom";

import "../../styles/navigation.scss"
export default function Navigation(){
    return (
        <div className="navigation">
            <div className="navigation_list">
                <div className="navigation_list_main">
                    <div className="navigation_list_main_img"></div>
                    <div className="navigation_list_main_text">Главная</div>
                </div>
                <div className="navigation_list_btn">СОЗДАТЬ</div>
                <div className="navigation_list_btn">ВХОДЯЩИЕ</div>
                <div className="navigation_list_btn">ДОКУМЕНТЫ</div>
                <div className="navigation_list_btn">ИНСТРУКТАЖИ</div>
                <div className="navigation_list_btn">ОПРОСЫ</div>
                <div className="navigation_list_btn">НАСТРОЙКИ</div>

            </div>
            <div className="navigation_logo"></div>
        </div>
    )
}