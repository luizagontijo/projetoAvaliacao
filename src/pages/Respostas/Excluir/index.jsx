import axios from 'axios';
import { useState, useEffect } from 'react';
import {Redirect, Link} from 'react-router-dom';
 
export default function ExcluirResposta(props){
    const[state, setState] = useState({
        resposta: []
    });
 
    const[redirect, setRedirect] = useState(false);
 
    useEffect(
        ()=>{
            const {id} = props.match.params;
            axios.get(`${process.env.REACT_APP_HOST_URL}/globalhitss/respostas/${id}`)
           .then(
               res => {
                   const resposta = res.data;
                   setState({resposta})
               }
           )
        },[props.match.params]
    )
 
    const handleConfirm = () =>{
        const {id} = props.match.params; 
        axios.put(`${process.env.REACT_APP_HOST_URL}/globalhitss/deletarResposta/${id}`)
        .then(
            data => {
                if(data){
                    alert("Dados Excluidos com sucesso");
                    setRedirect(true);
                }
            }
        )
    }
    
    const {resposta} = state;
 
    if(redirect){
        return <Redirect to='/respostas' />
    }else{
        return(
            <>
                <h3>Deseja excluir a resposta "{resposta.textoResposta}" ?</h3> 
                <button className="w-30 btn btn-lg btn-primary" onClick={handleConfirm}>Sim</button>
                <br></br>
                <br></br>
                <p><Link to={`/detalhesResposta/${resposta.id}`}>Voltar</Link></p>
            </>
        )
    }
}
