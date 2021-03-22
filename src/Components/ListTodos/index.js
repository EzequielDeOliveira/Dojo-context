import React, { useEffect } from 'react';

import Item from '../Item';
import { useTodo } from '../../context';

const ListTodos = ({ items }) => {
    const context = useTodo();
    const { removeTask, completeTask, todos } = context;

    useEffect(() => {
        console.log(context);
    }, [])

    return (
        <div style={styles.container}>
            {
                todos.map(item => {
                    return <Item item={item} removeTask={removeTask} completeTask={completeTask} />
                })
            }
        </div>
    );
}

const styles = {
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        paddingTop: "5%"
    }
}

export default ListTodos;