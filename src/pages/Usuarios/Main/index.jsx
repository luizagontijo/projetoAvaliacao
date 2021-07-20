// import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import axios from 'axios';
// import moment from 'moment';

export default function MainUsuarios() {
    // const [state, setState] = useState({
    //     usuarios: []
    // });

    // useEffect(
    //     () => {
    //         axios.get(`${process.env.REACT_APP_HOST_URL}/globalhitss/usuarios`)
    //             .then(
    //                 res => {
    //                     const usuarios = res.data;
    //                     setState({ usuarios })
    //                 }
    //             )
    //     }, []
    // )

    // const { usuarios } = state;
    return (
        <>
            <h3>Usuários</h3>
            <div className="row mt-3 p-3 justify-content-between rounded shadow">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Login</th>
                            <th>Tipo</th>
                            <th>Time</th>
                            <th>Criado</th>
                            <th>Detalhes</th>
                        </tr>
                    </thead>
                    {/* <tbody>
                    {
                        usuarios.map(

                            (usuario, key) =>
                            (
                                <tr key={key}>
                                    <td>{usuario.nome}</td>
                                    <td>{usuario.login}</td>
                                    <td>{usuario.tipo}</td>
                                    <td><Link to={`/detalhesTime/${usuario.idTime}`}>Ver</Link></td>
                                    <td>{moment(usuario.createdAt).format('DD/MM/YYYY')}</td>
                                    <td><Link to={`/detalhesUsuario/${usuario.id}`}>Detalhes</Link></td>
                                    
                                </tr>
                            )
                        )
                    }
                </tbody> */}
                    <tbody>    
                        <tr>
                            <td>Elvis Presley</td>
                            <td>elvis.presley</td>
                            <td>Administrador</td>
                            <td><Link to={`/detalhesTime`}>Ver</Link></td>
                            <td>15/07/2021</td>
                            <td><Link to={`/detalhesUsuario`}>Detalhes</Link></td>
                        </tr>
                        <tr>
                            <td>Roberto Carlos</td>
                            <td>roberto.carlos</td>
                            <td>Administrador</td>
                            <td><Link to={`/detalhesTime`}>Ver</Link></td>
                            <td>15/07/2021</td>
                            <td><Link to={`/detalhesUsuario`}>Detalhes</Link></td>
                        </tr>
                        <tr>
                            <td>Maria das Graças</td>
                            <td>maria.xuxa</td>
                            <td>Administradora</td>
                            <td><Link to={`/detalhesTime`}>Ver</Link></td>
                            <td>15/07/2021</td>
                            <td><Link to={`/detalhesUsuario`}>Detalhes</Link></td>
                        </tr>
                        <tr>
                            <td>Sandy Junior</td>
                            <td>sandy.junior</td>
                            <td>Gestora</td>
                            <td><Link to={`/detalhesTime`}>Ver</Link></td>
                            <td>16/07/2021</td>
                            <td><Link to={`/detalhesUsuario`}>Detalhes</Link></td>
                        </tr>
                        <tr>
                            <td>Tiago Iorc</td>
                            <td>tiago.iorc</td>
                            <td>Colaborador</td>
                            <td><Link to={`/detalhesTime`}>Ver</Link></td>
                            <td>19/07/2021</td>
                            <td><Link to={`/detalhesUsuario`}>Detalhes</Link></td>
                        </tr>
                        <tr>
                            <td>Anitta da Silva</td>
                            <td>anitta.silva</td>
                            <td>Colaboradora</td>
                            <td><Link to={`/detalhesTime`}>Ver</Link></td>
                            <td>19/07/2021</td>
                            <td><Link to={`/detalhesUsuario`}>Detalhes</Link></td>
                        </tr>
                        <tr>
                            <td>Tim Maia</td>
                            <td>tim.maia</td>
                            <td>Colaborador</td>
                            <td><Link to={`/detalhesTime`}>Ver</Link></td>
                            <td>19/07/2021</td>
                            <td><Link to={`/detalhesUsuario`}>Detalhes</Link></td>
                        </tr>
                        <tr>
                            <td>Maria Bethânia</td>
                            <td>maria.bthania</td>
                            <td>Colaboradora</td>
                            <td><Link to={`/detalhesTime`}>Ver</Link></td>
                            <td>19/07/2021</td>
                            <td><Link to={`/detalhesUsuario`}>Detalhes</Link></td>
                        </tr>
                        <tr>
                            <td>Caetano Veloso</td>
                            <td>caetano.veloso</td>
                            <td>Colaborador</td>
                            <td><Link to={`/detalhesTime`}>Ver</Link></td>
                            <td>19/07/2021</td>
                            <td><Link to={`/detalhesUsuario`}>Detalhes</Link></td>
                        </tr>
                        <tr>
                            <td>Chico Buarque</td>
                            <td>chico.buarque</td>
                            <td>Colaborador</td>
                            <td><Link to={`/detalhesTime`}>Ver</Link></td>
                            <td>19/07/2021</td>
                            <td><Link to={`/detalhesUsuario`}>Detalhes</Link></td>
                        </tr>
                        <tr>
                            <td>Elis Regina</td>
                            <td>elis.regina</td>
                            <td>Gestora</td>
                            <td><Link to={`/detalhesTime`}>Ver</Link></td>
                            <td>19/07/2021</td>
                            <td><Link to={`/detalhesUsuario`}>Detalhes</Link></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <p className="mt-3"><Link to='/usuarios'>Voltar</Link></p>
        </>
    )
};