/* eslint-disable no-unused-vars */
import React, {useState} from "react";
import Forms from './Forms'

const FormularioAvali = () =>{

    const[respostas, setRespostas] = useState({});

    const handleChange = (id, valor) =>{
        setRespostas((prevRespostas) =>({
            ...prevRespostas,
            [id]: valor,
        }))
    }

    const handleSubmit = (event) =>{
        event.preventDefault();
        console.log("Repostas:", Object.entries(respostas).map(([id, nota]) => ({id, nota})))
        alert("Obrigado por avaliar")
        window.location.href = 'https://www.maissaudecentroclinico.com.br/'
    }


    return(
        <form className="FormPrinc" onSubmit={handleSubmit}>
            <Forms pergunta = 'Como voce avalia o nosso atendimento?'
            id = 'atendimento'
            onChange = {handleChange}
            />
            <Forms pergunta = 'Como voce avalia o medico 1?'
            id = 'medico1'
            onChange = {handleChange}
            />
            <Forms pergunta = 'Como voce avalia o medico 2?'
            id = 'medico2'
            onChange = {handleChange}
            />

            <br />
            <button type="submit">Enviar Avaliação</button>
        </form>
    )

}

export default FormularioAvali