import React, {useContext, useEffect} from "react"
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"

import MainPage from "./pages/MainPage"
import TestPage from "./pages/TestPage"
function App() {
  return (
      <Router>
        <div className="App">
          <Routes>
            <Route path='/' element={<MainPage/>} />
            <Route path='/test' element={<TestPage/>} />
          </Routes>
        </div>
      </Router>
  )
}

export default App
