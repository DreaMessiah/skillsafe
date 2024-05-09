import {useEffect, useState} from "react";
import Navigation from "../../components/nav/Navigation";
import FileInput from "../../components/inputs/FileInput";
import SkillService from "../../services/SkillService";
import {useMessage} from "../../hooks/message.hook";
import {Link, useNavigate} from "react-router-dom";
import MultiSelect from "../../components/inputs/MultiSelect";
import LoadingSpinner from "../../components/loading/LoadingSpinner";

export default function CreateSkillPage() {
    const [name, setName] = useState('')
    const [days, setDays] = useState('')
    const [info, setInfo] = useState('')

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
        }catch (e) {
            console.log(e)
        }finally {
            setLoading(false)
        }
    }
    const checkEmpty = () => {
        const n = [...empty]

        n[0] = !!!name.trim().length
        n[1] = !!!info.trim().length
        n[2] = !!!files.length

        const hasTrueValue = n.some(value => value === true)
        if( hasTrueValue ) setEmpty(n)
        else setEmpty([])

        return !hasTrueValue
    }
    const sendHandler = async () => {
        setLoading(true)
        try {
            if(checkEmpty()){
                const fileList = files.map(item => ({name: item.name}));
                const {data} = await SkillService.createSkill(name,days,info,fileList,group)
                if(data) message("Инструктаж добавлен")
                console.log(data)
                navigate('/')
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
                <div className="uppage_tools">
                    <Link to={'/skills'} className="uppage_tools_back" >Назад</Link>
                    <div onClick={(e) => sendHandler()} className="publish_tools_back" >ОПУБЛИКОВАТЬ</div>
                </div>
                <div className="questboard_doc">
                    <div className="questboard_doc_title">
                        Создаем новый документ инструктажа...
                    </div>
                    <div className="questboard_doc_create">
                        <input value={name} onChange={(e) => setName(e.target.value)} className="questboard_doc_create_name" placeholder="Введите название Инструктажа" />
                        <input value={days} onChange={(e) => setDays(e.target.value)} className="questboard_doc_create_days" placeholder="Дней для ознакомления" type="number"/>
                        <textarea value={info} onChange={(e) => setInfo(e.target.value)} className="questboard_doc_create_textarea" >Описание и указания к ознакомлению</textarea>
                        <label>Привязать к должностям?</label>
                        <div className={`multi`}>
                            <MultiSelect options={developers} values={group} setOptions={setGroup}/>
                        </div>
                        <FileInput setFiles={setFiles} files={files} empty={false} />
                    </div>
                </div>
            </div>
            {loading ? (<LoadingSpinner/>) : null}
        </div>
    )
}