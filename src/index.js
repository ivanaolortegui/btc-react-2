import React from "react";
import ReactDOM from "react-dom";

import * as serviceWorker from "./serviceWorker";
import Portal from "./components/Portales";
import UseState from "./components/hooks/UseState-1";
import UseState2 from "./components/hooks/UseState-2";
import Desmontado from "./components/hooks/CicloDeVida";
import ParentComponents from "./components/comunicacion/ParentComponents";
import RenderProp from "./components/comunicacion/RenderProp";

import Hoc from './components/comunicacion/Hoc'
import InputNoControladosRef from "./components/formulario/InputNoControladosRef";
import InputNoControladoForm from "./components/formulario/InputNoControladoForm";
import InputControlado from "./components/formulario/InputControlado";
import InputCpntrolado2 from "./components/formulario/InputControlado-2";
import ApiContext from "./components/api-context/ApiContext";
import UseState3 from "./components/hooks/UseState3";
import Padre from "./components/comunicacion/RederProps";
import Form from "./components/formulario/Form";
import ApiContextForm from "./components/api-context/ApiContextForm";

ReactDOM.render(
  <React.StrictMode>
    {/*   <Portal />
   <UseState/>

   <UseState2 />

   < Desmontado/> */}

    {/*  <ParentComponents/>
   <RenderProp/> */}
    {/*  <Hoc/>
   <InputNoControladosRef/>

   <InputNoControladoForm/>
   <InputControlado/>

   <InputCpntrolado2/>

   <ApiContext/> */}
    {/*  <UseState3/> */}
    {/*  <Padre/> */}
   {/*  <Form /> */}
   <ApiContextForm/>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
