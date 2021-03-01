import { Route, Switch, Redirect, useRouteMatch } from "react-router";
import React from "react";
import Accueil from "./accueil/Accueil";
import Actus from "./actualites/Actus";
import Article from "./article/Article";
import Contact from "./Contact";
import Inscription from "./inscription/Inscription";
import Partenaires from "./partenaires/Partenaires";
import Boutique from "./boutique/Boutique";
import Equipe from "./equipe/Equipe";
import NotFound from "./NotFound";
import Gestion from "./cms/list/Gestion";
import Form from "./cms/form/Form";
import Login from "./cms/Login";
import { loggedIn } from "../utils.js";

function PrivateRoute({ ...rest }) {
  let { path } = useRouteMatch();

  if (loggedIn()) {
    return <Route {...rest} />;
  } else {
    return <Redirect to={`${path}/login`} />;
  }
}

function Admin() {
  let { path } = useRouteMatch();

  return (
    <Switch>
      <Route exact path={[`${path}`, `${path}/login`]} component={Login} />
      <PrivateRoute
        path={[`${path}/:schema/new`, `${path}/:schema/:id`]}
        component={Form}
      />
      <PrivateRoute path={`${path}/:schema`} component={Gestion} />
    </Switch>
  );
}

export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Accueil} />
      <Route path="/article/:id" component={Article} />
      <Route path={["/actus/:page", "/actus"]} component={Actus} />
      <Route path="/partenaires" component={Partenaires} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/infos/inscription" component={Inscription} />
      <Route exact path="/boutique" component={Boutique} />
      <Route path="/equipes/:equipe" component={Equipe} />
      <Route path="/__admin">
        <Admin />
      </Route>
      <Route component={NotFound} />
    </Switch>
  );
};

export default Routes;
