import {useState,useContext} from "react";
import {Link} from "react-router-dom";

import "../../styles/navigation.scss"
export default function Navigation(){
    return (
        <div className="navigation">
            <div className="navigation_list">
                <Link to="/workpage" className="navigation_list_main">
                    <div className="navigation_list_main_img"></div>
                    <div className="navigation_list_main_text">Главная</div>
                </Link>
                <Link to="/create" className="navigation_list_btn">СОЗДАТЬ</Link>
                <Link to="/test" className="navigation_list_btn">ВХОДЯЩИЕ</Link>
                <div className="navigation_list_btn">ДОКУМЕНТЫ</div>
                <div className="navigation_list_btn">ИНСТРУКТАЖИ</div>
                <div className="navigation_list_btn">ОПРОСЫ</div>
                <div className="navigation_list_btn">НАСТРОЙКИ</div>
                <div className="navigation_list_btns">
                    <div className=""><i className="fa-solid fa-users"/></div>
                    <div className=""><i className="fa-solid fa-user-xmark"/></div>
                    <div className=""><i className="fa-solid fa-bell"/></div>
                    <div className=""><i className="fa-solid fa-right-to-bracket"/></div>
                </div>

            </div>
            <div className="navigation_logo"></div>
        </div>
    )
}