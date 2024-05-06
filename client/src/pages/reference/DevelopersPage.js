import {useEffect, useState} from "react";
import Navigation from "../../components/nav/Navigation";
import {useMessage} from "../../hooks/message.hook";
import {Link, useNavigate} from "react-router-dom";
import LoadingSpinner from "../../components/loading/LoadingSpinner";
import AuthService from "../../services/AuthService";
import formatDate from "../../components/functions/formatDate";

import "../peoples/peoples.scss"

export default function DevelopersPage() {
    const [users,setUsers] = useState([])
    const [loading,setLoading] = useState(false)
    const [currentItems,setCurrentItems] = useState([])
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
    useEffect(() => {
        setCurrentItems(users.slice(indexOfFirstItem, indexOfLastItem))
    },[currentPage])
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

    return (
        <div className="workpage">
            <div className="workpage_left">
                <Navigation />
            </div>
            <div className="content_page">
                <div className="content_page_main margintop20px">
                    <div className="content_page_main_title">Управление персоналом</div>
                    <div className="buttons">
                        <div className="btn" >Добавить работника</div>
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
                                    <div className="cell c4">{item.developer}</div>
                                    <div className='cell c5'>{formatDate(item.createdAt)}</div>
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
            {loading ? (<LoadingSpinner/>) : null}
        </div>
    )
}