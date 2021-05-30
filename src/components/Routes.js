import { Route, Switch, Redirect, useRouteMatch } from "react-router";
import React from "react";
import Accueil from "./accueil/Accueil";
import Actus from "./actualites/Actus";
import Article from "./article/Article";
import Contact from "./Contact";
import Partenaires from "./partenaires/Partenaires";
import Equipe from "./equipe/Equipe";
import NotFound from "./NotFound";
import Gestion from "./cms/list/Gestion";
import Form from "./cms/form/Form";
import Login from "./cms/Login";
import Page from "./Page";
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
      <Route path="/equipes/:equipe" component={Equipe} />
      <Route path="/__admin">
        <Admin />
      </Route>
      <Route path="/:ref" component={Page}></Route>
      <Route component={NotFound} />
    </Switch>
  );
};

export default Routes;
