import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './components/home/home'

function App() {

  return (
      <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      </BrowserRouter>
      </>
  )
}

export default App;
