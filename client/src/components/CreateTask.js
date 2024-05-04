import {useState, useContext, useEffect} from "react";
import {Link} from "react-router-dom";

import "../styles/workpage.scss"
import Navigation from "./nav/Navigation";
export default function CreateTask(){
    const [quest, setQuest] = useState(0)
    const [name,setName] = useState('')
    const [days,setDays] = useState('')
    const [info,setInfo] = useState('')

    useEffect(() => {
        console.log(quest)
    },[quest])

    return (
        <div className="workpage">
            <div className="workpage_left">
                <Navigation />
            </div>
            <div className="workpage_right">
                {(quest !== 0) &&
                    <div className="uppage_tools">
                        <div className="uppage_tools_back" onClick={() => setQuest(0)}>Назад</div>
                        <div className="publish_tools_back" >ОПУБЛИКОВАТЬ</div>
                    </div>
                }
                {(quest === 0) && <div className="questboard">
                    <div onClick={(e) => console.log(quest)} className="questboard_title">
                        КАКОЕ ЗАДАНИЕ СОЗДАДИМ?
                    </div>
                    <div className="questboard_white">
                        <Link to={'/createskill'} className="questboard_white_btn">ИНСТРУКТАЖ</Link>
                        <div className="questboard_white_btn" onClick={() => setQuest(2)}>ТЕСТ</div>
                        <div className="questboard_white_btn" onClick={() => setQuest(3)}>ОПРОС</div>
                        <div className="questboard_white_btn red">ГЛАВНАЯ</div>
                    </div>


                </div>
                }
                {quest === 1 && <div/>
                }
                {quest === 2 && <div className="questboard_doc">
                    <div className="questboard_doc_title">
                        Создаем новое тестирование...
                    </div>
                    <div className="questboard_doc_create">
                        <input className="questboard_doc_create_name" placeholder="Введите название Тестирование" />
                        <div className="questboard_doc_create_instr">
                            <select className="questboard_doc_create_sel" ><option>Инструкция</option></select>
                            <div className="quest_instuction_btn">Привязать инструкцию</div>
                        </div>
                        <input className="questboard_doc_create_days" placeholder="Дней для ознакомления" type="number"/>
                        <textarea className="questboard_doc_create_textarea" >Описание и указания к ознакомлению</textarea>
                        <div className="questboard_doc_create_quests">
                            <div className="questboard_doc_create_quests_plus">
                                <div className="questboard_doc_title">
                                    Добавление вопроса
                                </div>
                                <input className="questboard_doc_create_name" placeholder="Введите вопрос" />
                                <div className="questboard_doc_title">
                                    <h5>Добавить вариант ответа</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                }
            </div>
        </div>
    )
}