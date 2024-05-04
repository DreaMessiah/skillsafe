import {useState, useContext, useEffect} from "react";
import {Link} from "react-router-dom";

import "../../styles/navigation.scss"
import {observer} from "mobx-react-lite";
import {Context} from "../../index";
import SkillService from "../../services/SkillService";
import formatDate from "../functions/formatDate";
import addDays from "../functions/addDays";
function MainBoard(){
    const {store} = useContext(Context)
    const [loading,setLoading] = useState(false)

    const [skills,setSkills] = useState([])

    const loadingHandler = async () => {
        setLoading(true)
        try {
            const {data} = await SkillService.fetchSkills()
            if(data){
                setSkills(data)
            }
        }catch (e) {
            console.log(e)
        }finally {
            setLoading(false)
        }
    }
    useEffect(() => {
        loadingHandler()
    },[])
    return (
        <div className="content_page">
            <div className="content_page_up">
                <div className="content_page_up_name">{store.user.name}</div>
                <div className="content_page_up_dev">{store.user.developer}</div>
                <div className="content_page_up_boxes">
                    <div className="content_page_up_boxes_in">
                        <div className="content_page_up_boxes_in_title">Входящие (новые):</div>
                        <div className="content_page_up_boxes_in_option">Инструктажи: {skills.length}</div>
                        <div className="content_page_up_boxes_in_option">Тесты:</div>
                        <div className="content_page_up_boxes_in_option">Опросы:</div>
                    </div>
                    <div className="content_page_up_boxes_in">
                        <div className="content_page_up_boxes_in_title">Пройденные:</div>
                        <div className="content_page_up_boxes_in_option">Инструктажи:</div>
                        <div className="content_page_up_boxes_in_option">Тесты:</div>
                        <div className="content_page_up_boxes_in_option">Опросы:</div>
                    </div>
                    <div className="content_page_up_boxes_in">
                        <div className="content_page_up_boxes_in_title">Переназначено:</div>
                        <div className="content_page_up_boxes_in_option">Инструктажи:</div>
                        <div className="content_page_up_boxes_in_option">Тесты:</div>
                        <div className="content_page_up_boxes_in_option">Опросы:</div>
                    </div>
                    <div className="content_page_up_boxes_in">
                        <div className="content_page_up_boxes_in_title titredcolor">Просрочено:</div>
                        <div className="content_page_up_boxes_in_option">Инструктажи:</div>
                        <div className="content_page_up_boxes_in_option">Тесты:</div>
                        <div className="content_page_up_boxes_in_option">Опросы:</div>
                    </div>

                </div>
            </div>
            <div className="content_page_main">
                <div className="content_page_main_title">НОВЫЕ</div>
                <div className="content_page_main_list">
                    {skills.length && skills.map((item,index) => (
                            <div key={index} className="content_page_main_list_in readed">
                                <div className="content_page_main_list_in_title">Инструктаж</div>
                                <div className="content_page_main_list_in_name">{item.name}</div>
                                <div className="content_page_main_list_in_controll">
                                    <div className="content_page_main_list_in_controll_dates">
                                        <div className="content_page_main_list_in_controll_dates_maked">Создано: {formatDate(item.createdAt)}</div>
                                        <div className="content_page_main_list_in_controll_dates_complited">Ознакомиться до: {formatDate(addDays(item.createdAt,item.days))}</div>
                                    </div>
                                    <Link to={`/skill?id=${item.id}`} className="content_page_main_list_in_controll_btn">Ознакомиться</Link>
                                </div>
                                <div className="havedocs">вложение присутствует</div>
                            </div>
                        )
                    )}
                </div>
            </div>
        </div>
    )
}
export default observer(MainBoard)