import {useState,useContext,useEffect} from "react";
import {Link} from "react-router-dom";
import "../../styles/mainpageboard.scss"
import {Context} from "../../index";
import {useMessage} from "../../hooks/message.hook";
export default function AuthPage(){
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [empty,setEmpty] = useState(false)

    const {store} = useContext(Context)
    const message = useMessage()

    const handleSubmit = async (event) => {
        event.preventDefault()
        const promise = await store.login(login.toLowerCase(),password)

        if(promise?.response?.data?.message){
            setEmpty(true)
            message(promise.response.data.message)
        }else{
            setEmpty(false)
        }
    }
    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'Enter') {
                event.preventDefault()
                handleSubmit(event)
            }
        }
        document.addEventListener('keydown', handleKeyDown)
        return () => {
            document.removeEventListener('keydown', handleKeyDown)
        }
    }, [handleSubmit])

    return (
        <div className="backpage">
            <div className="backpage_left"></div>
            <div className="backpage_center">
                <div className="backpage_center_radius"></div>
            </div>
            <div className="backpage_right">

            </div>
            <div className="backimg"></div>
            <div className="backpage-work">
                <div className="backpage-work_left">
                    <div className="backpage-work_left_signin">
                        <div className="backpage-work_left_signin_logo"></div>
                        <input className={`backpage-work_left_signin_input ${empty && 'red-auth-border'}`} value={login} onChange={(e) => setLogin(e.target.value)} type="text" placeholder="Логин"/>
                        <input className={`backpage-work_left_signin_input ${empty && 'red-auth-border'}`} value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Пароль"/>
                        <div onClick={(e) => handleSubmit(e)} className="backpage-work_left_signin_btn">ВОЙТИ</div>
                    </div>
                </div>
                <div className="backpage-work_center"></div>
                <div className="backpage-work_right">
                    <div className="backpage-work_right_white">
                        <div className="backpage-work_right_white_questions">
                            <div className="backpage-work_right_white_questions_quest">Есть ли необходимость в инструктаже
                                и проверке знаний сотрудников?</div>
                            <div className="backpage-work_right_white_questions_checkbox">
                                <div className="b-w-right-w-q_checkbox_strock">
                                    <div className="b-w-right-w-q_checkbox_strock_radio">
                                        <div className="b-w-right-w-q_checkbox_strock_radio_active coloractive"></div>
                                    </div>
                                    <div className="b-w-right-w-q_checkbox_strock_option ">Да, конечно</div>
                                </div>
                                <div className="b-w-right-w-q_checkbox_strock">
                                    <div className="b-w-right-w-q_checkbox_strock_radio">
                                        <div className="b-w-right-w-q_checkbox_strock_radio_active"></div>
                                    </div>
                                    <div className="b-w-right-w-q_checkbox_strock_option">Возможно</div>
                                </div>
                                <div className="b-w-right-w-q_checkbox_strock">
                                    <div className="b-w-right-w-q_checkbox_strock_radio">
                                        <div className="b-w-right-w-q_checkbox_strock_radio_active"></div>
                                    </div>
                                    <div className="b-w-right-w-q_checkbox_strock_option">Нет, сомневаюсь</div>
                                </div>
                            </div>
                            <div onClick={(e) => console.log(store.isAuth)} className="backpage-work_right_white_questions_btn">ОТПРАВИТЬ</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
