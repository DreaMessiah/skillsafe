import {useEffect, useState} from "react";
import Navigation from "../../components/nav/Navigation";
import FileInput from "../../components/inputs/FileInput";
import SkillService from "../../services/SkillService";
import {useMessage} from "../../hooks/message.hook";
import {Link, useNavigate} from "react-router-dom";
import MultiSelect from "../../components/inputs/MultiSelect";
import LoadingSpinner from "../../components/loading/LoadingSpinner";
import formatDate from "../../components/functions/formatDate";
import addDays from "../../components/functions/addDays";

export default function ListSkillsPage() {
    const [name, setName] = useState('')
    const [days, setDays] = useState('')
    const [info, setInfo] = useState('')

    const [skills,setSkills] = useState([])

    const [developers, setDevelopers] = useState([])
    const [group,setGroup] = useState([])
    const [loading, setLoading] = useState(false)
    const [empty, setEmpty] = useState([])

    const [files,setFiles] = useState([])

    const message = useMessage()
    const navigate = useNavigate()

    const loadingHandler = async () => {
        setLoading(true)
        try {
            const {data} = await SkillService.getDevelopers()
            if(data) {
                const devel = data.map(item => ({...item,label:item.name,value:item.id}))
                setDevelopers(devel)
            }
            const response = await SkillService.fetchSkills()
            if (response.data){
                setSkills(response.data)
                console.log(response.data)
            }
        }catch (e) {
            console.log(e)
        }finally {
            setLoading(false)
        }
    }
    useEffect( () => {
        loadingHandler()
    },[])
    return (
        <div className="workpage">
            <div className="workpage_left">
                <Navigation />
            </div>
            <div className="content_page">
                <div className="content_page_main margintop20px">
                <div className="content_page_main_title">Список инструктажей</div>
                <div className="content_page_main_list">
                    {skills.length && skills.map((item,index) => (
                        <div className="content_page_main_list_in readed">
                            <div className="content_page_main_list_in_title">Инструктаж</div>
                            <div className="content_page_main_list_in_name">{item.name}</div>
                            <div className="content_page_main_list_in_controll">
                                <div className="content_page_main_list_in_controll_dates">
                                    <div className="content_page_main_list_in_controll_dates_maked">Создано: {formatDate(item.createdAt)}</div>
                                    <div className="content_page_main_list_in_controll_dates_complited">Ознакомиться до: {formatDate(addDays(item.createdAt,item.days))}</div>
                                </div>
                                <div className="content_page_main_list_in_controll_btn">Посмотреть</div>
                            </div>
                            <div className="havedocs">вложение присутствует</div>
                        </div>
                        )
                    )}

                </div>
            </div>
            </div>
            {loading ? (<LoadingSpinner/>) : null}
        </div>
    )
}