import {useState,useContext} from "react";
import {Link} from "react-router-dom";
import "../styles/mainpageboard.scss"
export default function MainpageBoard(){
    return (
        <div className="backpage">
            <div className="backpage_left"></div>
            <div className="backpage_center">
                <div className="backpage_center_radius"></div>
            </div>
            <div className="backpage_right">

            </div>
            <div className="backimg"></div>
            <div className="backpage-work">
                <div className="backpage-work_left">
                    <div className="backpage-work_left_signin">
                        <div className="backpage-work_left_signin_logo"></div>
                        <input className="backpage-work_left_signin_input" type="text" placeholder="Логин"/>
                        <input className="backpage-work_left_signin_input" type="password" placeholder="Пароль"/>
                        <Link to="/workpage" className="backpage-work_left_signin_btn">ВОЙТИ</Link>
                    </div>
                </div>
                <div className="backpage-work_center"></div>
                <div className="backpage-work_right">
                    <div className="backpage-work_right_white">
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
                            <div className="backpage-work_right_white_questions_btn">ОТПРАВИТЬ</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
