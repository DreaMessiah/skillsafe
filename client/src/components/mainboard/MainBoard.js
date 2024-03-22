import {useState,useContext} from "react";
import {Link} from "react-router-dom";

import "../../styles/navigation.scss"
export default function MainBoard(){
    return (
        <div className="content_page">
            <div className="content_page_up">
                <div className="content_page_up_name">Иванов Иван Иванович</div>
                <div className="content_page_up_dev">Машинист передвижной паровой установки 6-го разряда</div>
                <div className="content_page_up_dep">Отдет главного механика</div>
                <div className="content_page_up_boxes">
                    <div className="content_page_up_boxes_in">
                        <div className="content_page_up_boxes_in_title">Входящие (новые):</div>
                        <div className="content_page_up_boxes_in_option">Инструктажи: 1</div>
                        <div className="content_page_up_boxes_in_option">Тесты: 13</div>
                        <div className="content_page_up_boxes_in_option">Опросы: 4</div>
                    </div>
                    <div className="content_page_up_boxes_in">
                        <div className="content_page_up_boxes_in_title">Пройденные:</div>
                        <div className="content_page_up_boxes_in_option">Инструктажи: 1</div>
                        <div className="content_page_up_boxes_in_option">Тесты: 13</div>
                        <div className="content_page_up_boxes_in_option">Опросы: 4</div>
                    </div>
                    <div className="content_page_up_boxes_in">
                        <div className="content_page_up_boxes_in_title">Переназначено:</div>
                        <div className="content_page_up_boxes_in_option">Инструктажи: 1</div>
                        <div className="content_page_up_boxes_in_option">Тесты: 13</div>
                        <div className="content_page_up_boxes_in_option">Опросы: 4</div>
                    </div>
                    <div className="content_page_up_boxes_in">
                        <div className="content_page_up_boxes_in_title titredcolor">Просрочено:</div>
                        <div className="content_page_up_boxes_in_option">Инструктажи: 1</div>
                        <div className="content_page_up_boxes_in_option">Тесты: 13</div>
                        <div className="content_page_up_boxes_in_option">Опросы: 4</div>
                    </div>

                </div>
            </div>
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
        </div>
    )
}