import {useState,useContext} from "react";
import {Link} from "react-router-dom";

import "../../styles/navigation.scss"
export default function Quest(){
    return (
        <div className="content_page">
            <div className="quest_title">
                <div className="quest_title_left">
                    <div className="quest_title_left_theme">Тестирование</div>
                    <div className="quest_title_left_name">Техника безопасности на предприятии</div>
                </div>
                <div className="quest_title_right">
                    <div className="quest_title_right_in">Создано: 24.03.2024</div>
                    <div className="quest_title_right_to">Ознакомиться до: 25.03.2024</div>
                </div>
            </div>
            <div className="quest">
                <div className="backpage-work_right_white_questions">
                    <div className="backpage-work_right_white_questions_quest">Есть ли необходимость в инструктаже
                        и проверке знаний сотрудников?</div>
                    <div className="backpage-work_right_white_questions_checkbox">
                        <div className="b-w-right-w-q_checkbox_strock">
                            <div className="b-w-right-w-q_checkbox_strock_radio">
                                <div className="b-w-right-w-q_checkbox_strock_radio_active coloractive"></div>
                            </div>
                            <div className="b-w-right-w-q_checkbox_strock_option ">Да, конечно</div>
                        </div>
                        <div className="b-w-right-w-q_checkbox_strock">
                            <div className="b-w-right-w-q_checkbox_strock_radio">
                                <div className="b-w-right-w-q_checkbox_strock_radio_active"></div>
                            </div>
                            <div className="b-w-right-w-q_checkbox_strock_option">Возможно</div>
                        </div>
                        <div className="b-w-right-w-q_checkbox_strock">
                            <div className="b-w-right-w-q_checkbox_strock_radio">
                                <div className="b-w-right-w-q_checkbox_strock_radio_active"></div>
                            </div>
                            <div className="b-w-right-w-q_checkbox_strock_option">Нет, сомневаюсь</div>
                        </div>
                    </div>
                    <div className="backpage-work_right_white_questions_btns">
                        <div className="backpage-work_right_white_questions_btn_red">НАЗАД</div>
                        <div className="backpage-work_right_white_questions_btn_green">ДАЛЕЕ</div>
                    </div>

                </div>
            </div>

        </div>
    )
}