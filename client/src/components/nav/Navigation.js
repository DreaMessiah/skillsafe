import {useState,useContext} from "react";
import {Link} from "react-router-dom";
import "../../styles/navigation.scss"
import {observer} from "mobx-react-lite";
import {Context} from "../../index";
function Navigation(){
    const {store} = useContext(Context)
    return (
        <div className="navigation">
            <div className="navigation_list">
                <Link to="/" className="navigation_list_main">
                    <div className="navigation_list_main_img"></div>
                    <div className="navigation_list_main_text">Главная</div>
                </Link>
                {store.user.admin && <Link to="/create" className="navigation_list_btn">СОЗДАТЬ</Link>}
                <Link to="/test" className="navigation_list_btn">ВХОДЯЩИЕ</Link>
                {store.user.admin && <Link to={'/workers'} className="navigation_list_btn">РАБОТНИКИ</Link>}
                <Link to={'/skills'} className="navigation_list_btn">ИНСТРУКТАЖИ</Link>
                <div className="navigation_list_btn">ОПРОСЫ</div>
                <div className="navigation_list_btn">НАСТРОЙКИ</div>
                {!store.user.admin && <div onClick={() => store.logout()} className="navigation_list_btn">ВЫХОД</div>}
                {store.user.admin &&
                <div className="navigation_list_btns">
                    <div className=""><i className="fa-solid fa-users"/></div>
                    <div className=""><i className="fa-solid fa-user-xmark"/></div>
                    <div className=""><i className="fa-solid fa-bell"/></div>
                    <div onClick={() => store.logout()} className=""><i className="fa-solid fa-right-to-bracket"/></div>
                </div>}

            </div>
            <div className="navigation_logo"></div>
        </div>
    )
}
export default observer(Navigation)