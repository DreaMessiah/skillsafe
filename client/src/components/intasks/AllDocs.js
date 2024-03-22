import {useState,useContext} from "react";
import {Link} from "react-router-dom";

import "../../styles/navigation.scss"
export default function AllDocs(){
    return (
        <div className="content_page">

            <div className="content_page_main">
                <div className="content_page_main_title">НОВЫЕ</div>
                <div className="content_page_main_list">
                    <div className="content_page_main_list_in">
                        <div className="content_page_main_list_in_title">Инструктаж</div>
                        <div className="content_page_main_list_in_name">Техника безопасности на предприятии</div>
                        <div className="content_page_main_list_in_controll">
                            <div className="content_page_main_list_in_controll_dates">
                                <div className="content_page_main_list_in_controll_dates_maked">Создано: 24.03.2024</div>
                                <div className="content_page_main_list_in_controll_dates_complited">Ознакомиться до: 27.03.2024</div>
                            </div>
                            <div className="content_page_main_list_in_controll_btn">ПРОЙТИ</div>
                        </div>
                    </div>
                    <div className="content_page_main_list_in">
                        <div className="content_page_main_list_in_title">Тестирование</div>
                        <div className="content_page_main_list_in_name">Техника безопасности на предприятии</div>
                        <div className="content_page_main_list_in_controll">
                            <div className="content_page_main_list_in_controll_dates">
                                <div className="content_page_main_list_in_controll_dates_maked">Создано: 24.03.2024</div>
                                <div className="content_page_main_list_in_controll_dates_complited">Ознакомиться до: 25.03.2024</div>
                            </div>
                            <div className="content_page_main_list_in_controll_btn">ПРОЙТИ</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="content_page_main margintop20px">
                <div className="content_page_main_title">Прочитано / Пройдено</div>
                <div className="content_page_main_list">
                    <div className="content_page_main_list_in readed">
                        <div className="content_page_main_list_in_title">Инструктаж</div>
                        <div className="content_page_main_list_in_name">Техника безопасности на предприятии</div>
                        <div className="content_page_main_list_in_controll">
                            <div className="content_page_main_list_in_controll_dates">
                                <div className="content_page_main_list_in_controll_dates_maked">Создано: 24.03.2024</div>
                                <div className="content_page_main_list_in_controll_dates_complited">Ознакомиться до: 27.03.2024</div>
                            </div>
                            <div className="content_page_main_list_in_controll_btn">ПРОЙТИ</div>
                        </div>
                        <div className="havedocs">вложение присутствует</div>
                    </div>
                    <div className="content_page_main_list_in readed">
                        <div className="content_page_main_list_in_title">Тестирование</div>
                        <div className="content_page_main_list_in_name">Техника безопасности на предприятии</div>
                        <div className="content_page_main_list_in_controll">
                            <div className="content_page_main_list_in_controll_dates">
                                <div className="content_page_main_list_in_controll_dates_maked">Создано: 24.03.2024</div>
                                <div className="content_page_main_list_in_controll_dates_complited">Ознакомиться до: 25.03.2024</div>
                            </div>
                            <Link to="/thisquest" className="content_page_main_list_in_controll_btn">ПРОЙТИ</Link>
                        </div>
                    </div>
                    <div className="content_page_main_list_in readed redborder">
                        <div className="content_page_main_list_in_title">Тестирование</div>
                        <div className="content_page_main_list_in_name">Техника безопасности на предприятии</div>
                        <div className="content_page_main_list_in_controll">
                            <div className="content_page_main_list_in_controll_dates">
                                <div className="content_page_main_list_in_controll_dates_maked">Создано: 24.03.2024</div>
                                <div className="content_page_main_list_in_controll_dates_complited">Ознакомиться до: 25.03.2024</div>
                            </div>
                            <div className="content_page_main_list_in_controll_btn">ЗАПРОС НА ПЕРЕСДАЧУ</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}