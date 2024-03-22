import {useState, useContext, useEffect} from "react";
import {Link} from "react-router-dom";

import "../styles/workpage.scss"
import Navigation from "./nav/Navigation";
export default function CreateTask(){

    const [quest, setQuest] = useState(0)

    useEffect(() => {
        console.log(quest)
    },[quest])

    return (
        <div className="workpage">
            <div className="workpage_left">
                <Navigation />
            </div>
            <div className="workpage_right">
                {(quest === 0) && <div className="questboard">
                    <div onClick={(e) => console.log(quest)} className="questboard_title">
                        КАКОЕ ЗАДАНИЕ СОЗДАДИМ?
                    </div>
                    <div className="questboard_white">
                        <div className="questboard_white_btn" onClick={() => setQuest(1)}>ИНСТРУКТАЖ</div>
                        <div className="questboard_white_btn" onClick={() => setQuest(2)}>ТЕСТ</div>
                        <div className="questboard_white_btn" onClick={() => setQuest(3)}>ОПРОС</div>
                        <div className="questboard_white_btn red">ГЛАВНАЯ</div>
                    </div>
                    
                }
                </div>
                }
                {quest === 1 && <div className="questboard_doc">
                    <div className="questboard_doc_title">
                        Создаем новый документ инструктажа...
                    </div>
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
                }
            </div>
        </div>
    )
}