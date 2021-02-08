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

  return (
    <div className="App">
      <Header />
      <ToDoList toDoList={toDoList} handleToggle={handleToggle} handleFilter={handleFilter}/>
    </div>
  );
}

export default App;
