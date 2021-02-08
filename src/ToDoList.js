import React from 'react';
import ToDo from './ToDo'
import ToDoForm from './ToDoForm'


const ToDoList = ({toDoList, handleToggle, handleFilter, addTask}) => {
    return (
        <div>
            <ToDoForm addTask={addTask}/>
            {toDoList.map(todo => {
                return <ToDo todo={todo} key={todo.id} handleToggle={handleToggle}/>
            })}

            <button style={{margin: '20px'}} onClick={handleFilter}>Clear Completed</button>
        </div>
    )
}

export default ToDoList;