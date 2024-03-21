import {useState,useContext} from "react";
import {Link} from "react-router-dom";

import "../../styles/navigation.scss"
export default function MainBoard(){
    return (
        <div className="content_page">
            <div className="content_page_up">
                <div className="content_page_up_name"></div>
                <div className="content_page_up_dev"></div>
                <div className="content_page_up_dep"></div>
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
                        <div className="content_page_up_boxes_in_title">Просрочено:</div>
                        <div className="content_page_up_boxes_in_option">Инструктажи: 1</div>
                        <div className="content_page_up_boxes_in_option">Тесты: 13</div>
                        <div className="content_page_up_boxes_in_option">Опросы: 4</div>
                    </div>

                </div>
            </div>
            <div className="content_page_main"></div>
        </div>
    )
}