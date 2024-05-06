import {useEffect, useState} from "react";
import Navigation from "../../components/nav/Navigation";
import FileInput from "../../components/inputs/FileInput";
import SkillService from "../../services/SkillService";
import {useMessage} from "../../hooks/message.hook";
import {Link, useNavigate} from "react-router-dom";
import MultiSelect from "../../components/inputs/MultiSelect";
import LoadingSpinner from "../../components/loading/LoadingSpinner";
import CmsSelect from "../../components/inputs/CmsSelect";
import "../../styles/cms.scss"
import AuthService from "../../services/AuthService";

export default function CreateUserPage() {
    const [name, setName] = useState('')
    const [tn, setTn] = useState('')
    const [login, setLogin] = useState('')
    const [mail, setMail] = useState('')

    const [developers, setDevelopers] = useState([])
    const [dev,setDev] = useState()
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
        }catch (e) {
            console.log(e)
        }finally {
            setLoading(false)
        }
    }
    const checkEmpty = () => {
        const n = [...empty]

        n[0] = !!!name.trim().length
        n[1] = !!!login.trim().length
        n[2] = !!!tn.length
        n[3] = !!!dev

        const hasTrueValue = n.some(value => value === true)
        if( hasTrueValue ) setEmpty(n)
        else setEmpty([])

        return !hasTrueValue
    }
    const sendHandler = async () => {
        setLoading(true)
        try {
            if(checkEmpty()){
                const {data} = await AuthService.registration(login,tn,tn,name,mail)
                if(data) message("Инструктаж добавлен")
                console.log(data)
                navigate('/workers')
            }
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
                        Создаем нового ученика...
                    </div>
                    <div className={`block70`}>
                        <div className="cms-form">
                            <input value={name} onChange={(e) => setName(e.target.value)} className={`cms-text ${empty[0] && 'red-dotted-border'}`} placeholder="Введите ФИО" />
                            <input value={login} onChange={(e) => setLogin(e.target.value)} className={`cms-text ${empty[0] && 'red-dotted-border'}`} placeholder="Введите логин" />
                            <input value={tn} onChange={(e) => setTn(e.target.value)} className={`cms-text ${empty[0] && 'red-dotted-border'}`} placeholder="Введите табельный номер" />
                            <input style={{marginBottom:'10px'}} value={mail} onChange={(e) => setMail(e.target.value)} className="cms-text" placeholder="Введите e-mail (если есть)" />
                            <CmsSelect onChange={setDev} options={developers} empty={empty[3]} placeholder={'Выберете должность'} />
                        </div>
                    </div>
                    <div className="uppage_tools">
                        <Link to={'/workers'} className="uppage_tools_back" >Назад</Link>
                        <div onClick={(e) => sendHandler()} className="publish_tools_back" >Добавить</div>
                    </div>
                </div>
            </div>
            {loading ? (<LoadingSpinner/>) : null}
        </div>
    )
}