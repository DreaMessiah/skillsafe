import React,{useEffect, useState} from "react";
import Navigation from "../../components/nav/Navigation";
import FileInput from "../../components/inputs/FileInput";
import SkillService from "../../services/SkillService";
import {useMessage} from "../../hooks/message.hook";
import {Link, useLocation, useNavigate} from "react-router-dom";
import MultiSelect from "../../components/inputs/MultiSelect";
import LoadingSpinner from "../../components/loading/LoadingSpinner";
import formatDate from "../../components/functions/formatDate";
import addDays from "../../components/functions/addDays";
import ModalForTable from "../../components/modalwin/ModalForTable";
import ModalFiles from "../../components/modalwin/ModalFiles";

import { Worker,Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';


export default function SkillReader() {

    const message = useMessage()
    const navigate = useNavigate()
    const location = useLocation()

    const [loading, setLoading] = useState(false)
    const [doc,setDoc] = useState('')
    const [sign,setSign] = useState(false)
    const [files,setFiles] = useState([])
    const [skill,setSkill] = useState({})
    const [selectedFile,setSelectedFile] = useState(-1)
    const [activeDoc,setActiveDoc] = useState(false)

    const loadingHandler = async (skill_id) => {
        setLoading(true)
        try {
            const {data} = await SkillService.loadSkill(skill_id)
            if(data){
                setSkill(data.skill)
                setFiles(data.files)
                console.log(data.files)
            }
        }catch (e) {
            console.log(e)
        }finally {
            setLoading(false)
        }
    }
    const openHandler = (index) => {
        setSelectedFile(index)
        setActiveDoc(true)
        setDoc(`http://localhost:5000/files/${skill.id}/${files[index].file}`)
    }
    const signHandler = () => {
        setSelectedFile(-1)
        setActiveDoc(false)
        setSign(true)
    }
    useEffect( () => {
        const searchParams = new URLSearchParams(location.search)
        const getId = searchParams.get('id') ? searchParams.get('id') : null
        loadingHandler(getId)
    },[])


    function Document(){
        return (
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
                {doc.length && selectedFile>=0 ?
                    <div className={'korpus'}>
                        <div className={`document`}>
                            <Viewer fileUrl={doc} />
                        </div>

                        <div className={`buttons`}>
                            <div className={`text`}>Нажатие на кнопку подписать означает ваше согласие и подтверждение того, что вы прочитали и полностью поняли указанный выше текст. Это также означает, что вы соглашаетесь нести ответственность за любые последствия, возникающие из незнания или непонимания указанной информации. Пожалуйста, убедитесь, что вы внимательно прочитали все детали и полностью понимаете свои обязанности и права перед тем, как подписать.</div>
                            <div onClick={(e) => signHandler()} className={`button`}>Подписать</div>
                        </div>
                    </div>
                    : null}

            </Worker>
        )
    }

    return (
        <div style={{overflowY:'hidden'}} className="workpage">
            <div className="workpage_left">
                <Navigation />
            </div>
            {skill &&
                <div  className="content_page">
                    <div className={'data-skill'}>
                        <div className={`title text`}>Инструктаж</div>
                        <div className={`name text`}>{skill.name}</div>
                        <div className={`info text`}>{skill.info}</div>
                        <div className={`date text`}>Ознакомиться до: {formatDate(addDays(skill.createdAt,skill.days))}</div>
                    </div>
                    {files &&
                        <div className={`questboard_doc`}>
                            <div className={`files questboard_doc_create`}>
                                {files.map( (item,index) => (
                                    <div key={index} onClick={(e) => openHandler(index)} className="questboard_doc_create_docs">
                                        <div style={sign ? {borderColor:"green"}: {}} className="questboard_doc_create_docs_file">
                                            <i className="fa-regular fa-file-pdf"/>
                                            <div className="helper_doc">
                                                <div>{item.name}</div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    }
                </div>
            }

            {/*{loading ? (<LoadingSpinner/>) : null}*/}

            <ModalFiles heigth={'100%'} width={'100%'} data={doc.length && selectedFile >= 0 ? <Document/> : null} active={activeDoc} setActive={setActiveDoc} />
            {/*{doc.length && selectedFile >= 0 ? <DocViewer documents={doc} /> : null}*/}
        </div>
    )
}
