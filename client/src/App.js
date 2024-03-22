import React, {useContext, useEffect} from "react"
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"

import MainPage from "./pages/MainPage"
import TestPage from "./pages/TestPage"
import MainWork from "./pages/MainWork";
import InTasks from "./pages/InTasks";
import ThisQuestion from "./pages/ThisQuestion";
import CreatePage from "./pages/CreatePage";
function App() {
  return (
      <Router>
        <div className="App">
          <Routes>
              <Route path='/' element={<MainPage/>} />
              <Route path='/workpage' element={<MainWork/>} />
              <Route path='/intask' element={<MainWork/>} />
              <Route path='/test' element={<InTasks/>} />
              <Route path='/thisquest' element={<ThisQuestion/>} />
              <Route path='/create' element={<CreatePage/>} />
          </Routes>
        </div>
      </Router>
  )
}

export default App
