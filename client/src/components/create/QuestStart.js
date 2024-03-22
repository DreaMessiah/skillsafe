import {useState,useContext} from "react";
import {Link} from "react-router-dom";

import "../../styles/navigation.scss"
export default function QuestStart({quest, setQuest}){

    const jumpPage = task => {
        setQuest(task)
        console.log(quest)
    }


    return (
            <div className="questboard" style={(quest !== 0) ? {display:"none"} : {}}>
                <div onClick={(e)=> console.log(quest)} className="questboard_title">
                    КАКОЕ ЗАДАНИЕ СОЗДАДИМ?
                </div>
                <div className="questboard_white">
                    <div className="questboard_white_btn" onClick={()=>jumpPage(1)}>ИНСТРУКТАЖ</div>
                    <div className="questboard_white_btn" onClick={()=>jumpPage(2)}>ТЕСТ</div>
                    <div className="questboard_white_btn" onClick={()=>jumpPage(3)}>ОПРОС</div>
                    <div className="questboard_white_btn red">ГЛАВНАЯ</div>
                </div>
            </div>


    )
}