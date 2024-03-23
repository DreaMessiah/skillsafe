import {useState,useContext} from "react";
import {Link} from "react-router-dom";

import "../../styles/navigation.scss"
export default function Quest(){

    const [queue, setQueue] = useState(0)

    const questions = [
        {
            question: '1Есть ли необходимость в инструктаже и проверке знаний сотрудников?',
            options: ['Да, конечно', 'Возможно', 'Нет, сомневаюсь']
        },
        {
            question: 'Требуха или потраха?',
            options: ['Потрашки', 'Нет правильного ответа']
        },
        {
            question: 'Если определенность в данносм вопросе и точности даваемое ответа, и сомневаетесь ли Вы в выборе?',
            options: ['Да, конечно', 'Возможно', 'Нет, сомневаюсь', 'Возможно', 'Нет, сомневаюсь', 'Возможно', 'Нет, сомневаюсь']
        },
        {
            question: 'Это точно завершающий вопрос?',
            options: ['Да, конечно', 'Возможно', 'Нет, сомневаюсь']
        },
    ]

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
                {questions.map((quest, index) => {
                    if(queue === index) {
                        return (<div className="backpage-work_right_white_questions" key={index}>
                            <div className="backpage-work_right_white_questions_quest">{quest.question}</div>
                            <div className="backpage-work_right_white_questions_checkbox">
                                {quest.options.map((option, i) => {
                                    return (
                                        <div className="b-w-right-w-q_checkbox_strock" key={i}>
                                            <div className="b-w-right-w-q_checkbox_strock_radio">
                                                {/*<div className="b-w-right-w-q_checkbox_strock_radio_active coloractive"></div>*/}
                                                <div className="b-w-right-w-q_checkbox_strock_radio_active"></div>
                                            </div>
                                            <div className="b-w-right-w-q_checkbox_strock_option ">{option}</div>
                                        </div>
                                    )
                                })}


                            </div>
                            <div className="backpage-work_right_white_questions_btns">
                                <div className="backpage-work_right_white_questions_btn_red" onClick={()=>{setQueue(queue - 1)}}>НАЗАД</div>
                                <div className="backpage-work_right_white_questions_btn_green" onClick={()=>{setQueue(queue + 1)}}>ДАЛЕЕ</div>
                            </div>

                        </div>)
                    }
                })}

            </div>

        </div>
    )
}