import {useState} from "react";
import Navigation from "../../components/nav/Navigation";

export default function CreateDocs() {
    const [quest, setQuest] = useState(0)
    const [name, setName] = useState('')
    const [days, setDays] = useState('')
    const [info, setInfo] = useState('')

    return (
        <div className="workpage">
            <div className="workpage_left">
                <Navigation />
            </div>
            <div className="workpage_right">
                <div className="uppage_tools">
                    <div className="uppage_tools_back" onClick={() => setQuest(0)}>Назад</div>
                    <div className="publish_tools_back" >ОПУБЛИКОВАТЬ</div>
                </div>
                <div className="questboard_doc">
                    <div className="questboard_doc_title">
                        Создаем новый документ инструктажа...
                    </div>
                    <div className="questboard_doc_create">
                        <input className="questboard_doc_create_name" placeholder="Введите название Инструктажа" />
                        <input className="questboard_doc_create_days" placeholder="Дней для ознакомления" type="number"/>
                        <textarea className="questboard_doc_create_textarea" >Описание и указания к ознакомлению</textarea>
                        <div className="questboard_doc_create_docs">
                            <div className="questboard_doc_create_docs_file">
                                <i className="fa-regular fa-file-word"/>
                                <div className="helper_doc">
                                    <div>thisdocument.pdf</div>
                                    <div className="delete_doc">удалить</div>
                                </div>
                            </div>
                            <div className="questboard_doc_create_docs_file">
                                <i className="fa-regular fa-file-pdf"/>
                                <div className="helper_doc">
                                    <div>thisdocument.pdf</div>
                                    <div className="delete_doc">удалить</div>
                                </div>
                            </div>
                            <div className="questboard_doc_create_docs_file">
                                <i className="fa-regular fa-file-excel"/>
                                <div className="helper_doc">
                                    <div>thisdocument.pdf</div>
                                    <div className="delete_doc">удалить</div>
                                </div>
                            </div>
                            <div className="questboard_doc_create_docs_file">
                                <i className="fa-regular fa-image"/>
                                <div className="helper_doc">
                                    <div>thisdocument.pdf</div>
                                    <div className="delete_doc">удалить</div>
                                </div>
                            </div>
                            <div className="questboard_doc_create_docs_file">
                                <i className="fa-regular fa-file-word"/>
                                <div className="helper_doc">
                                    <div>thisdocument.pdf</div>
                                    <div className="delete_doc">удалить</div>
                                </div>
                            </div>
                            <div className="questboard_doc_create_docs_file">
                                <i className="fa-regular fa-file-pdf"/>
                                <div className="helper_doc">
                                    <div>thisdocument.pdf</div>
                                    <div className="delete_doc">удалить</div>
                                </div>
                            </div>
                            <div className="questboard_doc_create_docs_file">
                                <i className="fa-regular fa-file-excel"/>
                                <div className="helper_doc">
                                    <div>thisdocument.pdf</div>
                                    <div className="delete_doc">удалить</div>
                                </div>
                            </div>
                            <div className="questboard_doc_create_docs_file">
                                <i className="fa-regular fa-image"/>
                                <div className="helper_doc">
                                    <div>thisdocument.pdf</div>
                                    <div className="delete_doc">удалить</div>
                                </div>
                            </div>
                            <div className="questboard_doc_create_docs_file">
                                <i className="fa-regular fa-file-word"/>
                                <div className="helper_doc">
                                    <div>thisdocument.pdf</div>
                                    <div className="delete_doc">удалить</div>
                                </div>
                            </div>

                            <div className="questboard_doc_create_docs_plus"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}