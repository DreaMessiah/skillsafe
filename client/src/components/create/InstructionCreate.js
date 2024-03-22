import {useState,useContext} from "react";
import {Link} from "react-router-dom";

import "../../styles/navigation.scss"
export default function InstructionCreate({quest, setQuest}){




    return (
        <div className="questboard_doc" style={(quest !== 1) ? {display:"none"} : {}}>
            <div className="questboard_doc_title">
                Создаем новый документ инструктажа...
            </div>

        </div>


    )
}