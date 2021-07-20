// import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import axios from 'axios';

export default function MainTimes() {
    // const [state, setState] = useState({
    //     times: []
    // })

    // useEffect(
    //     () => {
    //         axios.get(`${process.env.REACT_APP_HOST_URL}/globalhitss/times`)
    //             .then(
    //                 res => {
    //                     const times = res.data;
    //                     setState({ times })
    //                 }
    //             )
    //     }, []
    // );
    // console.log(state);
    // const { times } = state;
    return (
        <>
            <h3>Times</h3>
            <Link to={'/inserirTime'}>Adicionar</Link>
            <div className="row mt-3 p-3 justify-content-between rounded shadow">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th colspan="4" >Ações</th>
                        </tr>
                    </thead>
                        {/* <tbody>
                        {
                            times.map(

                                (time, key) =>
                                (
                                    <tr key={key}>
                                        <td>{time.nome}</td>
                                        <td><Link to={`/inserirUsuario/${time.id}`}>Adicionar Usuário</Link></td>
                                        <td><Link to={`/detalhesTime/${time.id}`}>Detalhes do Time</Link></td>
                                        <td><Link to={`/editarTime/${time.id}`}>Editar</Link></td>
                                        <td><Link to={`/excluirTime/${time.id}`}>Excluir</Link></td>
                                    </tr>
                                )
                            )
                        }
                    </tbody> */}
                    <tbody>
                        <tr>
                            <td>Administradores</td>
                            <td><Link to={`/inserirUsuario`}>Adicionar Usuário</Link></td>
                            <td><Link to={`/detalhesTime`}>Detalhes do Time</Link></td>
                            <td><Link to={`/editarTime`}>Editar</Link></td>
                            <td><Link to={`/excluirTime`}>Excluir</Link></td>
                        </tr>
                        <tr>
                            <td>Time Pop</td>
                            <td><Link to={`/inserirUsuario`}>Adicionar Usuário</Link></td>
                            <td><Link to={`/detalhesTime`}>Detalhes do Time</Link></td>
                            <td><Link to={`/editarTime`}>Editar</Link></td>
                            <td><Link to={`/excluirTime`}>Excluir</Link></td>
                        </tr>
                        <tr>
                            <td>Time MPB</td>
                            <td><Link to={`/inserirUsuario`}>Adicionar Usuário</Link></td>
                            <td><Link to={`/detalhesTime`}>Detalhes do Time</Link></td>
                            <td><Link to={`/editarTime`}>Editar</Link></td>
                            <td><Link to={`/excluirTime`}>Excluir</Link></td>
                        </tr>



                        
                    </tbody>
                </table>
            </div>
            <p className="mt-3"><Link>Voltar</Link></p>
        </>
    )
}
