import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import FormularioAvali from './components/FormularioAvali'
import Logo from './images/logo.svg'
import Inicio from './components/Inicio'

function App() {
  

  return (
    <>
      
        
        <Router>
          <div>
            <a href="https://www.maissaudecentroclinico.com.br/"><img className='logo' src={Logo} alt="Logo" /></a>
            <Inicio/>
            <Routes>
              <Route path="/:customParam" element={<FormularioAvali/>} />
            </Routes>
            <p>Mais® Centro Clínico - 2024</p>
          </div>
        </Router> 
    </>
  )
}

export default App
