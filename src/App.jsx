
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import MainLayout from './components/layout/MainLayout'
import Home from './components/Routes/Home'
import AboutMe from './components/Routes/AboutMe'
import Biodata from './components/Routes/Biodata'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navigate to="/home"/>}></Route>
        <Route element={<MainLayout/>}>
          <Route path="/home" element={<Home/>}></Route>
          <Route path="/aboutme" element={<AboutMe/>}></Route>
          <Route path="/biodata" element={<Biodata/>}></Route>
        </Route>
        <Route path="*" element={<div className='text-4xl'>404 This page is not found</div>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
