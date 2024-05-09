import {useEffect, useState} from "react";
import Navigation from "../../components/nav/Navigation";
import {useMessage} from "../../hooks/message.hook";
import {Link, useNavigate} from "react-router-dom";
import LoadingSpinner from "../../components/loading/LoadingSpinner";
import AuthService from "../../services/AuthService";
import formatDate from "../../components/functions/formatDate";

import "../peoples/peoples.scss"
import DevelopersService from "../../services/DevelopersService";
import CmsSelect from "../../components/inputs/CmsSelect";
import ModalFiles from "../../components/modalwin/ModalFiles";
import MultiSelect from "../../components/inputs/MultiSelect";
import SkillService from "../../services/SkillService";

export default function SkillCms() {
    const [skills,setSkills] = useState([])

    const [developers,setDevelopers] = useState([])
    const [loading,setLoading] = useState(false)
    const [currentItems,setCurrentItems] = useState([])
    const itemsPerPage = 25
    const [currentPage, setCurrentPage] = useState(1)
    const [sortDirection, setSortDirection] = useState(true)
    const indexOfLastItem = currentPage * itemsPerPage
    const indexOfFirstItem = indexOfLastItem - itemsPerPage

    const [selected,setSelected] = useState(-1)
    const [activeRemove,setActiveRemove] = useState(false)
    const [activeChange,setActiveChange] = useState(false)

    const [empty, setEmpty] = useState([])

    const [name, setName] = useState('')

    const [connections,setConnections] = useState([])
    const [group,setGroup] = useState([])


    const paginate = (pageNumber) => setCurrentPage(pageNumber)

    const message = useMessage()
    const navigate = useNavigate()

    const loadingHandler = async (sort = 'abc') => { // 'abc' 'num' 'date'
        setLoading(true)
        try {
            const {data} = await SkillService.fetchSkillsCms(sort,sortDirection)
            if(data) {
                setSkills(data)
                setCurrentItems(data.slice(indexOfFirstItem, indexOfLastItem))
            }
        }catch (e) {
            console.log(e)
        }finally {
            setLoading(false)
        }
    }

    const deleteHandler = (index) => {
        setSelected(index)
        setActiveRemove(true)
    }
    const changeHandler = async (index) => {
        try {
            setLoading(true)
            setName(developers[index].name)
            setSelected(index)
            setActiveChange(true)
            const response = await SkillService.fetchSkills()
            const {data} = await DevelopersService.getConnections(developers[index].id)
            if(response.data){
                const group = response.data.map(item => ({...item,label:item.name,value:item.id}))
                setGroup(group)
            }
            if(data.length){
                const skills = data.map(item => ({...item,label:item.name,value:item.id}))
                setConnections(skills)
            }
        }catch (e) {
            console.log(e)
        }finally {
            setLoading(false)
        }

    }
    const cancelHandler = () => {
        setSelected(-1)
        setConnections([])
        setName('')
        setActiveRemove(false)
        setActiveChange(false)
    }
    const checkEmpty = () => {
        const n = [...empty]

        const hasTrueValue = n.some(value => value === true)
        if( hasTrueValue ) setEmpty(n)
        else setEmpty([])

        return !hasTrueValue
    }
    const removeSkill = async () => {
        try{
            setLoading(true)
            if(skills.length && selected>=0){
                const {data} = await SkillService.removeSkill(skills[selected].id)
                if(data){
                    if(data.err) message('Удаление не возможно. Имеются назначения на должности')
                    else{
                        message('Инструктаж удалена из системы')
                        const nd = [...skills]
                        nd.splice(selected, 1)
                        setSkills(nd)
                        cancelHandler()
                    }
                }
            }
        }catch (e) {
            console.log(e)
        }finally {
            setLoading(false)
        }
    }
    const changeDevHandler = async () => {
        try {
            setLoading(true)
            if(checkEmpty()){
                console.log(connections)
                const {data} = await DevelopersService.changeDev(developers[selected].id,name,connections)
                if(data){
                    message('Информация обновлена')
                    const nd = [...developers]
                    nd[selected].name = name
                    cancelHandler()
                }
            }
        }catch (e){
            message(e?.response?.data?.message)
            console.log(e)
        }finally {
            setLoading(false)
        }
    }
    const sortHandler = (sort) => {
        setSortDirection(!sortDirection)
        loadingHandler(sort)
    }

    useEffect(() => {
        setCurrentItems(skills.slice(indexOfFirstItem, indexOfLastItem))
    },[currentPage,skills])
    useEffect( () => {
        loadingHandler()
    },[])

    const Pagination = ({ itemsPerPage, totalItems, paginate, currentPage }) => {
        const pageNumbers = [];

        for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
            pageNumbers.push(i);
        }

        return (
            <div className="pagination">
                {pageNumbers.map((number) => (
                    <div
                        key={number}
                        className={number === currentPage ? 'page-number active' : 'page-number'}
                        onClick={() => paginate(number)}
                    >
                        {number}
                    </div>
                ))}
            </div>
        );
    }

    function Delete(){
        return (
            <div className={'modal-inbox'}>
                <p>Вы действительно решили удалить инструктаж - { (skills.length && selected>=0) ? skills[selected].name + ' id:' + skills[selected].id : null}?</p>
                <div className={`modal-buttons`}>
                    <div onClick={() => removeSkill()} className={`modal-btn red`}>Да</div>
                    <div onClick={() => cancelHandler()} className={`modal-btn not`}>Нет</div>
                </div>
            </div>
        )
    }
    function Change(){
        return (
            <div className={'modal-inbox'}>
                <h3>Изменение должности</h3>
                <div className={`modal-form cms-form`}>
                    <input value={name} onChange={(e) => setName(e.target.value)} className={`cms-text ${empty[0] && 'red-dotted-border'}`} placeholder="Введите название должности" />
                    <h5>Привязать инструктаж?</h5>
                    <MultiSelect setOptions={setConnections} options={group} values={connections} />
                </div>
                <div className={`modal-buttons`}>
                    <div onClick={() => changeDevHandler()} className={`modal-btn red`}>Сохранить</div>
                    <div onClick={() => cancelHandler()} className={`modal-btn not`}>Отменить</div>
                </div>

            </div>
        )
    }

    return (
        <div className="workpage">
            <div className="workpage_left">
                <Navigation />
            </div>
            <div className="content_page">
                <div className="content_page_main margintop20px">
                    <div className="content_page_main_title">Управление инструктажами</div>
                    <div className="buttons">
                        <Link to={'/createskill'} className="btn" >Добавить Инструктаж</Link>
                    </div>
                    <div className="content_page_main_title">Список инструктажей</div>
                    <div className="content_page_main_list">
                        <div className={`sort`}>
                            <div className={`title text`}>Сортировать</div>
                            <div onClick={() => sortHandler('abc')} className={`sortbtn text`}>По алфовиту</div>
                            <div onClick={() => sortHandler('num')} className={`sortbtn text`}>По номеру</div>
                            <div onClick={() => sortHandler('date')} className={`sortbtn text`}>По дате</div>
                        </div>
                        <div className="table-container">
                            <div className="table-row header">
                                <div className="cell d1">№</div>
                                <div className="cell d2">Наименование</div>
                                <div className="cell d3">Дата создания</div>
                            </div>
                            {currentItems.length ? currentItems.map((item,index) => (
                                <div key={index} className="table-row">
                                    <div className="cell d1">{item.id}</div>
                                    <div className="cell d2">{item.name}</div>
                                    <div className='cell d3 space'>
                                        <div className={`inbox1`}>{formatDate(item.createdAt)}</div>
                                        <div className={`inbox2`}>
                                            <i onClick={(e) => changeHandler(index)} className="fa-solid fa-pencil"></i>
                                            <i onClick={(e) => deleteHandler(index)} className="fa-solid fa-trash"></i>
                                        </div>
                                    </div>
                                </div>
                            )) : null}
                        </div>
                        {developers.length > itemsPerPage &&
                            <Pagination
                                itemsPerPage={itemsPerPage}
                                totalItems={developers.length}
                                paginate={paginate}
                                currentPage={currentPage}
                            />
                        }
                    </div>
                </div>
            </div>
            <ModalFiles width={'600px'} heigth={'500px'} data={Change()} active={activeChange} setActive={cancelHandler} />
            <ModalFiles width={'500px'} data={<Delete/>} active={activeRemove} setActive={setActiveRemove} />
            {loading ? (<LoadingSpinner/>) : null}
        </div>
    )
}