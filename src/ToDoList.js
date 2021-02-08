import React from 'react';
import ToDo from './ToDo'


const ToDoList = ({toDoList, handleToggle}) => {
    return (
        <div>
            {toDoList.map(todo => {
                return <ToDo todo={todo} key={todo.id} handleToggle={handleToggle}/>
            })}
        </div>
    )
}

export default ToDoList;