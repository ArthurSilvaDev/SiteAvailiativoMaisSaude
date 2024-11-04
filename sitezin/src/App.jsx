import './App.css'
import FormularioAvali from './components/FormularioAvali'
import Logo from './images/Logo.png'

function App() {
  

  return (
    <>
      <a href="https://www.maissaudecentroclinico.com.br/"><img className='logo' src={Logo} alt="Logo" /></a>
      <FormularioAvali/>
    </>
  )
}

export default App
