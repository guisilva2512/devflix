import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CadastroVideo from "./pages/cadastro/Video";
import CadastroCategoria from "./pages/cadastro/Categoria";
import Home from "./pages/Home";

const Pagina404 = () => (<div>Página404</div>)

ReactDOM.render(
  <BrowserRouter>
    <Switch>

      {/* Cadastrar as rotas da mais especificas para menos */}
      {/* Pois a primeira que encontrar pega e vai embora */}
      <Route path="/cadastro/video" component={CadastroVideo} />
      <Route path="/cadastro/categoria" component={CadastroCategoria} />
      <Route path="/" component={Home} exact />
      <Route component={Pagina404} />

    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
