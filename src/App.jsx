import Header from "./components/header"
import Home from "./containers/home"
import Form from "./containers/form"
import './App.css'

import {Routes, Route, Navigate} from "react-router-dom"

function App() {

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/form" element={<Form />}/>
        <Route path="*" element={<Navigate to="/" />}/>
      </Routes>
    </div>
  )
}

export default App
