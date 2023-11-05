import { useState, useEffect } from "react";
import styles from "./Portfolio.module.css";
import CardList from "../CardList/CardList";
import portfolio from "../../../assets/data/portfolio";

const Portfolio = () => {
    const projectes = portfolio.projects;
    projectes.reverse();

    return <CardList cards={projectes}></CardList>;
};
export default Portfolio;
