import React, {useState} from 'react';


const ToDoForm = ({addTask}) => {
    const [userInput, setUserInput] = useState('')

   const handleChange = (e) => {
       setUserInput(e.currentTarget.value)
   }

   const handleSubmit = (e) => {
       e.preventDefault();
       addTask(userInput);
       setUserInput('')
   }

    return (
        <div>
            <form>
                <label>task name
                    <input type="text" value={userInput} onChange={handleChange}/>
                </label>
                <button onClick={handleSubmit}>Enter</button>
            </form>
        </div>
    )
}

export default ToDoForm;