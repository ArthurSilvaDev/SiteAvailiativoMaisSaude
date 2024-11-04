/* eslint-disable no-unused-vars */
import React, {useState} from "react";
import Forms from './Forms'
import { useParams } from "react-router-dom";

const FormularioAvali = () =>{
    const {customParam} = useParams();

    const[respostas, setRespostas] = useState({});

    const handleChange = (id, valor) =>{
        setRespostas((prevRespostas) =>({
            ...prevRespostas,
            [id]: valor,
        }))
    }

    const handleSubmit = (event) =>{
        event.preventDefault();

        const resultados = {
            customParam, respostas,
        } //Objeto hash + resultado

        //CRIANDO O JSON
        const jsonResultados = JSON.stringify(resultados,null,2)

        const blob = new Blob([jsonResultados], {type:"application/json"})
        const url = URL.createObjectURL(blob)

        //Clicar e forçar o download
        const a = document.createElement("a")
        a.href = url
        a.download = "resultados_avaliacao.json"
        document.body.appendChild(a)
        a.click()
        document.body.removeChild(a)

        //Limpa  objeto URL
        URL.revokeObjectURL()




        console.log("Repostas:", Object.entries(respostas).map(([id, nota]) => ({id, nota})))
        console.log({customParam})
        //alert("Obrigado por avaliar")
        //window.location.href = 'https://www.maissaudecentroclinico.com.br/'
    }

    /*
    Perguntas: Recepção, tempo de espera, atendimento pelo profissional, Nivel de satisfação geral

    */

    return(
        <form className="FormPrinc" onSubmit={handleSubmit}>
            <input className="ID-user" type="text" value={customParam} readOnly />
            <Forms pergunta = 'Como voce avalia a qualidade do atendimento recebido na recepção?'
            id = 'atendimento'
            onChange = {handleChange}
            /><br/>
            <Forms pergunta = 'As informações fornecidas foram clara e compreensíveis?'
            id = 'clareza'
            onChange = {handleChange}
            /><br/>
            <Forms pergunta = 'Como você avalia a facilidade de agendar sua consulta?'
            id = 'agendamento'
            onChange = {handleChange}
            /><br/>
            <Forms pergunta = 'O seu atendimento foi iniciado na hora marcada?'
            id = 'pontualidade'
            onChange = {handleChange}
            /><br/>
            <Forms pergunta = 'Como voce avalia a qualidade do atendimento recebido pelo profissional?'
            id = 'profissional'
            onChange = {handleChange}
            /><br/>
            <Forms pergunta = 'Qual a sua satisfação geral com os nossos serviços?'
            id = 'geral'
            onChange = {handleChange}
            /><br/>
            <br />
            <button className="px-5 bg-white" type="submit">Enviar Avaliação</button>
        </form>
    )

}

export default FormularioAvali