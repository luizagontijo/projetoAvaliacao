// import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import axios from 'axios';
// import moment from 'moment';

export default function DetalhesTime2(props) {
    // const [state, setState] = useState({
    //     time: []
    // });

    // useEffect(
    //     () => {
    //         const { id } = props.match.params;
    //         axios.get(`${process.env.REACT_APP_HOST_URL}/globalhitss/times/${id}`)
    //             .then(
    //                 res => {
    //                     const time = res.data;
    //                     setState({ time })
    //                 }
    //             )
    //     }, [props.match.params]
    // )

    // const { time } = state;
    return (
        <>
            <h3>Detalhes do Time</h3>
            <div className="row mt-5 p-3 justify-content-between rounded shadow">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Informações</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    {/* <tbody>
                    <tr>
                        <td>
                            <p>Nome: {time.nome}</p>
                            <p>Criado em: {moment(time.createdAt).format('DD/MM/YYYY')}</p>
                            <p>Editado em: {moment(time.updatedAt).format('DD/MM/YYYY')}</p>
                        </td>
                        <td>
                            <p><Link to={`/inserirUsuario/${time.id}`}>Adicionar Usuários</Link></p>
                            <p><Link to={`/usuariosTime/${time.id}`}>Ver Usuários</Link></p>
                            <p><Link to={`/formulariosTime/${time.id}`}>Ver Formulários</Link></p>
                            <p><Link to={`/editarTime/${time.id}`}>Editar</Link></p>
                            <p><Link to={`/excluirTime/${time.id}`}>Excluir</Link></p>
                        </td>
                    </tr>
                </tbody> */}

                    <tbody>
                        <tr>
                            <td>
                                <p>Nome: Time Pop</p>
                                <p>Criado em: 16/07/2021</p>
                                <p>Editado em: 19/07/2021</p>
                            </td>
                            <td>
                                <p><Link to={`/inserirUsuario/2`}>Adicionar Usuários</Link></p>
                                <p><Link to={`/usuariosTime/2`}>Ver Usuários</Link></p>
                                <p><Link to={`/formulariosTime/2`}>Ver Formulários</Link></p>
                                <p><Link to={`/editarTime/2`}>Editar</Link></p>
                                <p><Link to={`/excluirTime/2`}>Excluir</Link></p>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <p className="mt-3"><Link to='/times'>Voltar</Link></p>
        </>
    )
}
