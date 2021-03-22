import React from 'react';

import { FaTrashAlt, FaCheck } from "react-icons/fa";

const Item = ({ item, completeTask, removeTask }) => {
    return (
        <div style={{...styles.container, backgroundColor: item.completed ? "green" : "white"}}>
            <h1 style={styles.text}>{item.name}</h1>
            <div style={styles.icons}>
                <FaTrashAlt onClick={() => removeTask(item)} />
                <FaCheck onClick={() => completeTask(item)} />
            </div>
        </div>
    );
}

const styles = {
    text: {
        margin: 0
    },
    container: {
        width: "80%",
        padding: "2%",
        backgroundColor: "white",
        margin: "1%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
    },
    icons: {
        width: "10%",
        display: 'flex',
        justifyContent: 'space-around'
    }
}

export default Item;