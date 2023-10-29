import { Fragment } from "react";
import Card from "../Card/Card";

import styles from "./CardList.module.css";

const CardList = ({ cards }) => {
    console.log(cards); 

    return (
        <div className={styles["grid-cards"]}>
            {cards.map((card) => (
                <Fragment key={card.id}>
                    <Card content={card} />
                </Fragment>
            ))}
        </div>
    );
};

export default CardList;
