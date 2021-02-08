import React, {useState} from 'react';
import data from './data.json';
import './App.css';
import Header from './Header';
import ToDoList from './ToDoList';



function App() {
  const [toDoList, setToDoList] = useState(data);

  const handleToggle = (id) => {
      let mapped = toDoList.map((task) => {
        return task.id === Number(id) ? { ...task, completed: !task.completed } : { ...task};
      });
      setToDoList(mapped);
    };

    const handleFilter = () => {
      let filtered = toDoList.filter(task => {
        return !task.completed;
      });
      setToDoList(filtered)
    }

    const addTask = (userInput) => {
      let copy = [...toDoList];
      copy = [...copy, {id: toDoList.length+1, task: userInput, complete: false}];
      setToDoList(copy)
    }

  return (
    <div className="App">
      <Header />
      <ToDoList toDoList={toDoList} handleToggle={handleToggle} handleFilter={handleFilter} addTask={addTask}/>
    </div>
  );
}

export default App;
