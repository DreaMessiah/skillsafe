import {useEffect, useState} from "react";
import Navigation from "../../components/nav/Navigation";
import {useMessage} from "../../hooks/message.hook";
import {Link, useNavigate} from "react-router-dom";
import MultiSelect from "../../components/inputs/MultiSelect";
import LoadingSpinner from "../../components/loading/LoadingSpinner";
import CmsSelect from "../../components/inputs/CmsSelect";
import "../../styles/cms.scss"
import AuthService from "../../services/AuthService";
import DevelopersService from "../../services/DevelopersService";
import SkillService from "../../services/SkillService";

export default function AddDeveloper() {
    const [name, setName] = useState('')
    const [group, setGroup] = useState([])
    const [skills,setSkills] = useState([])

    const [dev,setDev] = useState()
    const [loading, setLoading] = useState(false)
    const [empty, setEmpty] = useState([])

    const [files,setFiles] = useState([])

    const message = useMessage()
    const navigate = useNavigate()

    const loadingHandler = async () => {
        setLoading(true)
        try {
            const {data} = await SkillService.fetchSkills()
            if(data) {
                const group = data.map(item => ({...item,label:item.name,value:item.id}))
                setGroup(group)
            }
        }catch (e) {
            console.log(e)
        }finally {
            setLoading(false)
        }
    }
    const checkEmpty = () => {
        const n = [...empty]
        n[0] = !!!name.trim().length
        const hasTrueValue = n.some(value => value === true)
        if( hasTrueValue ) setEmpty(n)
        else setEmpty([])
        return !hasTrueValue
    }
    const sendHandler = async () => {
        setLoading(true)
        try {
            if(checkEmpty()){
                const {data} = await DevelopersService.createDev(name,skills)
                if(data.err) message('Должность с таким названием уже сужествует')
                else {
                    if(data) {
                        message("Должность добавлена")
                        navigate('/developers')
                    }
                }
            }else message('Введите название')
        }catch (e){
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
            <div className="workpage_right">
                <div className="questboard_doc">
                    <div className="questboard_doc_title">
                        Создаем новую должность...
                    </div>
                    <div className={`block70`}>
                        <div className="cms-form">
                            <input value={name} onChange={(e) => setName(e.target.value)} className={`cms-text ${empty[0] && 'red-dotted-border'}`} placeholder="Введите название должности" />
                            <h5>Назначить инструктаж?</h5>
                            <MultiSelect values={skills} options={group} setOptions={setSkills} />
                        </div>
                    </div>
                    <div className="uppage_tools">
                        <Link to={'/developers'} className="uppage_tools_back" >Назад</Link>
                        <div onClick={(e) => sendHandler()} className="publish_tools_back" >Добавить</div>
                    </div>
                </div>
            </div>
            {loading ? (<LoadingSpinner/>) : null}
        </div>
    )
}