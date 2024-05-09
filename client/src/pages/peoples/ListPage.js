import {useEffect, useState} from "react";
import Navigation from "../../components/nav/Navigation";
import {useMessage} from "../../hooks/message.hook";
import {Link, useNavigate} from "react-router-dom";
import LoadingSpinner from "../../components/loading/LoadingSpinner";
import AuthService from "../../services/AuthService";
import formatDate from "../../components/functions/formatDate";

import "./peoples.scss"
import ModalFiles from "../../components/modalwin/ModalFiles";
import CmsSelect from "../../components/inputs/CmsSelect";
import SkillService from "../../services/SkillService";

export default function ListPage() {
    const [users,setUsers] = useState([])
    const [loading,setLoading] = useState(false)
    const [currentItems,setCurrentItems] = useState([])

    const [selected,setSelected] = useState(-1)
    const [activeRemove,setActiveRemove] = useState(false)
    const [activeChange,setActiveChange] = useState(false)

    const [name, setName] = useState('')
    const [tn, setTn] = useState('')
    const [login, setLogin] = useState('')
    const [mail, setMail] = useState('')

    const [developers, setDevelopers] = useState([])
    const [dev,setDev] = useState({})
    const [empty, setEmpty] = useState([])

    const itemsPerPage = 25
    const [currentPage, setCurrentPage] = useState(1)
    const [sortDirection, setSortDirection] = useState(true)
    const indexOfLastItem = currentPage * itemsPerPage
    const indexOfFirstItem = indexOfLastItem - itemsPerPage

    const paginate = (pageNumber) => setCurrentPage(pageNumber)

    const message = useMessage()
    const navigate = useNavigate()

    const loadingHandler = async (sort= 'abc') => { // 'abc' 'dev' 'date'
        setLoading(true)
        try {
            const {data} = await AuthService.getUsers(sort,sortDirection)
            if(data) {
                setUsers(data.users)
                setCurrentItems(data.users.slice(indexOfFirstItem, indexOfLastItem))
                loadDevsHandler()
            }
        }catch (e) {
            console.log(e)
        }finally {
            setLoading(false)
        }
    }
    const loadDevsHandler = async () => {
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
    const sortHandler = (sort) => {
        setSortDirection(!sortDirection)
        loadingHandler(sort)
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
    const deleteHandler = (index) => {
        setSelected(index)
        setActiveRemove(true)
    }
    const changeHandler = (index) => {
        setSelected(index)
        setName(users[index].name)
        setTn(users[index].tn)
        setLogin(users[index].login)
        setMail(users[index].email)
        const develop = developers.find(develop => develop.id === users[index].developer_id);
        console.log(develop)
        setDev(develop)

        setActiveChange(true)
    }
    const cancelHandler = () => {
        setSelected(-1)
        setName('')
        setTn('')
        setLogin('')
        setMail('')
        setDev({})
        setActiveRemove(false)
        setActiveChange(false)
    }
    const removeUser = async () => {
        try{
            setLoading(true)
            if(users.length && selected>=0){
                const {data} = await AuthService.removeUser(users[selected].id)
                if(data){
                    message('Ученик удален из системы')
                    const nu = [...users]
                    nu.splice(selected, 1)
                    setUsers(nu)
                    cancelHandler()
                }
            }
        }catch (e) {
            console.log(e)
        }finally {
            setLoading(false)
        }
    }
    const changeUserHandler = async () => {
        try {
            setLoading(true)
            if(checkEmpty()){
                const {data} = await AuthService.changeUser(users[selected].id,login,tn,name,mail,dev.id)
                if(data){
                    message('Информация обновлена')
                    const nu = [...users]
                    nu[selected].name = name
                    nu[selected].tn = tn
                    nu[selected].login = login
                    nu[selected].email = mail
                    nu[selected].developer_id = dev.id
                    nu[selected].developers = dev
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

    useEffect(() => {
        setCurrentItems(users.slice(indexOfFirstItem, indexOfLastItem))
    },[currentPage,users])
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
                <p>Вы действительно решили удалить пользователя - { (users.length && selected>=0) ? users[selected].name + ' id:' + users[selected].id : null}?</p>
                <div className={`modal-buttons`}>
                    <div onClick={() => removeUser()} className={`modal-btn red`}>Да</div>
                    <div onClick={() => cancelHandler()} className={`modal-btn not`}>Нет</div>
                </div>
            </div>
        )
    }
    function Change(){
        return (
            <div className={'modal-inbox'}>
                <h3>Изменение ученика</h3>
                <div className={`modal-form cms-form`}>
                    <input value={name} onChange={(e) => setName(e.target.value)} className={`cms-text ${empty[0] && 'red-dotted-border'}`} placeholder="Введите ФИО" />
                    <input value={login} onChange={(e) => setLogin(e.target.value)} className={`cms-text ${empty[1] && 'red-dotted-border'}`} placeholder="Введите логин" />
                    <input value={tn} onChange={(e) => setTn(e.target.value)} className={`cms-text ${empty[2] && 'red-dotted-border'}`} placeholder="Введите табельный номер" />
                    <input style={{marginBottom:'10px'}} value={mail} onChange={(e) => setMail(e.target.value)} className="cms-text" placeholder="Введите e-mail (если есть)" />
                    <CmsSelect onChange={setDev} value={dev} defaultValue={dev} options={developers} empty={empty[3]} placeholder={'Выберете должность'} />
                </div>

                <div className={`modal-buttons`}>
                    <div onClick={() => changeUserHandler()} className={`modal-btn red`}>Сохранить</div>
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
                    <div className="content_page_main_title">Управление персоналом</div>
                    <div className="buttons">
                        <Link to={`/adduser`} className="btn" >Добавить работника</Link>
                    </div>
                    <div className="content_page_main_title">Список пользователей</div>
                    <div className="content_page_main_list">
                        <div className={`sort`}>
                            <div className={`title text`}>Сортировать</div>
                            <div onClick={() => sortHandler('abc')} className={`sortbtn text`}>По алфовиту</div>
                            <div onClick={() => sortHandler('date')} className={`sortbtn text`}>По дате</div>
                            <div onClick={() => sortHandler('dev')} className={`sortbtn text`}>По должностям</div>
                        </div>
                        <div className="table-container">
                            <div className="table-row header">
                                <div className="cell c1">ФИО</div>
                                <div className="cell c2">Табельный номер</div>
                                <div className="cell c3">Логин</div>
                                <div className="cell c4">Должность</div>
                                <div className="cell c5">Дата создания</div>
                            </div>
                            {currentItems.length ? currentItems.map((item,index) => (
                                <div key={index} className="table-row">
                                    <div className="cell c1">{item.name}</div>
                                    <div className="cell c2">{item.tn}</div>
                                    <div className="cell c3">{item.login}</div>
                                    <div className="cell c4">{item.developers ? item.developers.name : null}</div>
                                    <div className='cell c5 space'>
                                        <div className={`inbox1`}>{formatDate(item.createdAt)}</div>
                                        <div className={`inbox2`}>
                                            <i onClick={(e) => changeHandler(index)} className="fa-solid fa-pencil"></i>
                                            <i onClick={(e) => deleteHandler(index)} className="fa-solid fa-trash"></i>
                                        </div>
                                    </div>
                                </div>
                            )) : null}
                        </div>
                        {users.length > itemsPerPage &&
                            <Pagination
                                itemsPerPage={itemsPerPage}
                                totalItems={users.length}
                                paginate={paginate}
                                currentPage={currentPage}
                            />
                        }
                    </div>
                </div>
            </div>
            <ModalFiles width={'600px'} heigth={'500px'} data={Change()} active={activeChange} setActive={setActiveChange} />
            <ModalFiles width={'500px'} data={<Delete/>} active={activeRemove} setActive={setActiveRemove} />
            {loading ? (<LoadingSpinner/>) : null}
        </div>
    )
}