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
import AuthService from "../../services/AuthService";

export default function ListPage() {
    const [users,setUsers] = useState([])
    const [loading,setLoading] = useState(false)
    const message = useMessage()
    const navigate = useNavigate()

    const loadingHandler = async () => {
        setLoading(true)
        try {
            const {data} = await AuthService.getUsers()
            if(data) {
                console.log(data)
                setUsers(data.users)
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
                    <div className="content_page_main_title">Список пользователей</div>
                    <div className="content_page_main_list">
                        <div className="table-container">
                            <div className="table-row header">
                                <div className="cell">Табельный номер</div>
                                <div className="cell">Логин</div>
                                <div className="cell">ФИО</div>
                                <div className="cell">Должность</div>
                                <div className="cell"></div>
                            </div>
                            {users.length && users.map((item,index) => (
                                <div className="table-row">
                                    <div className="cell">{item.tn}</div>
                                    <div className="cell">{item.login}</div>
                                    <div className="cell">{item.name}</div>
                                    <div className="cell">{item.developer}</div>
                                    <div className='cell button'>Открыть</div>
                                </div>
                            ))}

                        </div>

                    </div>
                </div>
            </div>
            {loading ? (<LoadingSpinner/>) : null}
        </div>
    )
}