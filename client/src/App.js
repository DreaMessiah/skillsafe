import React, {useContext, useEffect} from "react"
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import {Context} from "./index";

import AuthRouter from "./pages/auth/AuthRouter"
import MainWork from "./pages/MainWork";
import InTasks from "./pages/InTasks";
import ThisQuestion from "./pages/ThisQuestion";
import CreatePage from "./pages/CreatePage";

import './assets/style.scss'
import {DataProvider} from "./context/DataContext";
import {observer} from "mobx-react-lite";
import CreateRouter from "./pages/create/CreateRouter";
import SkillsRouter from "./pages/skills/SkillsRouter";
import PeoplesRouter from "./pages/peoples/PeoplesRouter";

function App() {
    const {store} = useContext(Context)
    useEffect(() => {
        if(localStorage.getItem('token')){
            store.checkAuth()
        }
    },[])
    if(store.isLoading){
        return <div>Загрузка...</div>
    }
    if(!store.isAuth) return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path='*' element={<AuthRouter/>} />
                </Routes>
            </div>
        </Router>
    )
    //skills
    if(store.user.admin){
        return (
            <DataProvider>
                <Router>
                    <div className="App">
                        <Routes>
                            <Route path='/' element={<MainWork/>} />
                            <Route path='/workers' element={<PeoplesRouter page={1}/>} />
                            <Route path='/skills' element={<SkillsRouter page={1}/>} />
                            <Route path='/createskill' element={<CreateRouter page={1}/>} />
                            <Route path='/workpage' element={<MainWork/>} />
                            <Route path='/intask' element={<MainWork/>} />
                            <Route path='/test' element={<InTasks/>} />
                            <Route path='/thisquest' element={<ThisQuestion/>} />
                            <Route path='/create' element={<CreatePage/>} />
                        </Routes>
                    </div>
                </Router>
            </DataProvider>
        )
    }
    return (
        <DataProvider>
            <Router>
                <div className="App">
                    <Routes>
                        <Route path='/' element={<MainWork/>} />
                        <Route path='/skill' element={<SkillsRouter page={2}/>} />
                        <Route path='/test' element={<MainWork/>} />
                        <Route path='/skills' element={<SkillsRouter page={1}/>} />
                    </Routes>
                </div>
            </Router>
        </DataProvider>
    )
}

export default observer(App)
