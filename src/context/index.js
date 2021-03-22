import React, { createContext, useContext, useState } from 'react';

const TodoContext = createContext();

const TodoProvider = ({ children }) => {
    const [todos, setTodos] = useState([
        { name: "Dormir 8 horas", completed: false },
        { name: "Fazer exercicio", completed: false },
        { name: "Estudar para a prova", completed: false },
        { name: "Fazer trabalho das disciplinas", completed: false },
        { name: "Almoçar", completed: false },
        { name: "Trabalhar", completed: false },
    ]);

    const completeTask = (task) => {
        let tasks = todos.map(item => {
          if (task.name === item.name) {
            item.completed = true;
          }
          return item;
        })
        setTodos(tasks);
      }
    
      const removeTask = (task) => {
        let tasks = todos.filter(item => {
          return task.name !== item.name;
        })
        setTodos(tasks);
      }
    

    return (
        <TodoContext.Provider value={{
            todos,
            setTodos,
            completeTask,
            removeTask
        }}>
            {children}
        </TodoContext.Provider>
    )
};

export default TodoProvider;

export function useTodo() {
    const context = useContext(TodoContext);
    return { ...context }
}