import { Fragment } from "react";
import Card from "../Card/Card";

import styles from "./CardList.module.css";

const CardList = ({ cards }) => {
    console.log(cards); 

    return (
        <>
            {cards.map((card) => (
                <Fragment key={card.id}>
                    <Card content={card} />
                </Fragment>
            ))}
        </>
    );
};

export default CardList;
