import React, { useState, useEffect } from "react";
import Logo from "./Logo";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";
import "../../scss/module/menu.scss";
import CollapseButton from "./CollapseButton";
import SubPages from "./SubPages";

function Menu() {
  const [collapsed, setCollapsed] = useState("notCollapsed");
  const [equipes, setEquipes] = useState([]);
  const [categories, setCategories] = useState([]);
  const [pages, setPages] = useState([]);

  //Fetching all the equipes
  const fetchEquipes = async () => {
    let myHeaders = new Headers();
    let requestOptions = {
      method: "GET",
      headers: myHeaders,
    };
    const res = await fetch(
      `${process.env.REACT_APP_API_URI}equipes`,
      requestOptions
    );
    res.json().then((res) => setEquipes(res));
  };

  //Fetching categories
  const fetchCategories = async () => {
    const res = await fetch(`${process.env.REACT_APP_API_URI}categories`, {
      method: "GET",
      headers: new Headers(),
    });
    res.json().then((res) => setCategories(res));
  };

  //Fetching pages
  const fetchPages = async () => {
    const res = await fetch(`${process.env.REACT_APP_API_URI}pages`, {
      method: "GET",
      headers: new Headers(),
    });
    res.json().then((res) => setPages(res));
  };

  useEffect(() => {
    fetchCategories();
    fetchEquipes();
    fetchPages();
  }, []);

  function handleClick(e) {
    switch (collapsed) {
      case "notCollapsed":
        setCollapsed("collapsed");
        break;
      case "collapsed":
        setCollapsed("notCollapsed");
        break;
      default:
        setCollapsed("collapsed");
        break;
    }
  }

  return (
    <nav id="menu">
      <div className="top">
        <CollapseButton collapsed={collapsed} handleClick={handleClick} />
        <Logo className="nav-item" />
      </div>
      <div className={`bottom ${collapsed}`}>
        <Link to="/" className="nav-item">
          Accueil
        </Link>
        <Dropdown value="Club">
          <SubPages pages={pages} value="Club" />
        </Dropdown>
        <Dropdown value="Equipes">
          {/**
           * Pour chaque catégorie on crée les liens des équipes associés à cette categorie grâce à leurs id
           */}
          {categories.map((categorie) => (
            <div className="nav-col">
              <span className="nav-header">{categorie.nom}</span>
              {equipes.map((equipe) =>
                equipe.categorie._id === categorie._id ? (
                  <Link to={`/equipes/${equipe._id}`} className="nav-item">
                    {equipe.label}
                  </Link>
                ) : (
                  ""
                )
              )}
            </div>
          ))}
        </Dropdown>
        <Dropdown value="Infos pratiques">
          <SubPages pages={pages} value="Infos pratiques" />
        </Dropdown>
        <Dropdown value="Arbitrage">
          <SubPages pages={pages} value="Arbitrage" />
        </Dropdown>
        <Link to="/actus" className="nav-item">
          Actualités
        </Link>
        <Link to="/partenaires" className="nav-item">
          Partenaires
        </Link>
        <Link to="/boutique" className="nav-item">
          Boutique
        </Link>
        <Link to="/contact" className="nav-item">
          Contact
        </Link>
      </div>
    </nav>
  );
}

export default Menu;
