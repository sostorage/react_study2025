import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router'
import Home from './routes/page/Home'
import About from './routes/page/About'
import ProductList from './routes/page/ProductList'

function App() {

  return (
    // Routes역할
    // - 사용자가 요청한 URL 중 일치하는 컴포넌트를 렌더링해주는 컴포넌트
    // Route역할
    // - path에 정의된 요청이 들어왔을 때 element에 정의도니 컴포넌트를 렌더링하는 역할

    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/prdList" element={<ProductList/>}/>
    </Routes>
  )
}

export default App
