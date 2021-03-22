import { useState } from 'react';
import './App.css';

import ListTodos from './Components/ListTodos';
import TodoProvider from './context';

function App() {

  const [completed, setCompleted] = useState(0);

  return (
    <div className="App">
      <TodoProvider>
        <h2 style={styles.title}>Número de tarefas completas: {completed}</h2>
        <ListTodos />
      </TodoProvider>
    </div>
  );
}

const styles = {
  title: {
    margin: 0
  }
}

export default App;
