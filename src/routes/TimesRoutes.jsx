import React from 'react';
import { Switch, Route } from "react-router-dom";
import MainTimes from "../pages/Times/Main";
import InserirTime from "../pages/Times/Inserir";
import DetalhesTime from "../pages/Times/Detalhes";
import DetalhesTime2 from "../pages/Times/Detalhes/index2";
import DetalhesTime3 from "../pages/Times/Detalhes/index3";
import ExcluirTime from "../pages/Times/Excluir";
import EditarTime from "../pages/Times/Editar";

export default function TimesRoute(){
    return(
     
        <Switch>
            <Route exact path = {'/times'} component={MainTimes} />
            <Route exact path = {'/inserirTime'} component={InserirTime} />
            <Route path={'/detalhesTime/1'} component={DetalhesTime} />
            <Route path={'/detalhesTime/2'} component={DetalhesTime2} />
            <Route path={'/detalhesTime/3'} component={DetalhesTime3} />
            <Route path={'/excluirTime/:id'} component={ExcluirTime} />
            <Route path={'/editarTime/:id'} component={EditarTime} />
        </Switch>
    )
}