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


                </div>
                }
                {quest === 1 && <div className="questboard_doc">
                    <div className="questboard_doc_title">
                        Создаем новый документ инструктажа...
                    </div>
                    <div className="questboard_doc_create">
                        <input className="questboard_doc_create_name" placeholder="Введите название Инструктажа" />
                        <input className="questboard_doc_create_days" placeholder="Дней для ознакомления" type="number"/>
                        <textarea className="questboard_doc_create" >Описание и указания к ознакомлению</textarea>
                        <div className="questboard_doc_create_docs">
                            <div className="questboard_doc_create_docs_pdf"></div>
                            <div className="questboard_doc_create_docs_plus"></div>
                        </div>

                    </div>

                </div>
                }
            </div>
        </div>
    )
}