import { Switch, Route } from "react-router-dom";
import { PrivateRoute } from "./PrivateRoute";

import {
  Main,
  Login,
  Cadastro,
  Genero,
  GeneroStore,
  Serie,
  SerieStore,
} from "pages";

const Routes = () => {
  return (
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/cadastro" component={Cadastro} />
      <PrivateRoute exact path="/" component={Main} />
      <PrivateRoute exact path="/genero/:id" component={GeneroStore} />
      <PrivateRoute exact path="/genero" component={Genero} />
      <PrivateRoute exact path="/serie/:id" component={SerieStore} />
      <PrivateRoute exact path="/serie" component={Serie} />
    </Switch>
  );
};

export default Routes;
