import { Route, Switch } from "react-router";
import React from "react";
import Accueil from "./accueil/Accueil";
import Actus from "./actualites/Actus";
import Article from "./article/Article";
import Contact from "./Contact";
import Inscription from "./Inscription";
import { Partenaires } from "./Partenaires";
import Boutique from "./Boutique";
import Equipe from "./equipe/Equipe";
import NotFound from "./NotFound";
import Admin from "./Admin";

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
      <Route path="/__admin" component={Admin} />
      <Route component={NotFound} />
    </Switch>
  );
};

export default Routes;
