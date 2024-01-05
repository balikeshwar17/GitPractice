import React, { useState } from 'react';

const Todo=()=>{
   const [newTodo,setNewTodo]=useState('');
   const [todos,setTodos]=useState([]);
   const handleSubmit=()=>{
    if (newTodo.trim() !== '') {
        setTodos([...todos, newTodo]);
        setNewTodo('');
      }
   }
   const handleDelete=(index)=>{
       console.log(index);
       const updateTodos=todos.filter((todo,indx)=>indx !== index);
       setTodos(updateTodos);
   }
  return (
         <>
          <div className="todo">
            <h1>Todo App</h1>
            {/* input field + button  */}
            <div className="field">
                <input type="text"  id='input'
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)} placeholder='Add your new todo'/>
                <button id="btn" onClick={handleSubmit}>Add</button>
            </div>
            {/* showing the todo list  */}
            <div className="textArea">

            {todos.map((todo, index) => (
            <div className="newText" key={index}>
              <p>{todo}</p>
              <button onClick={() => handleDelete(todo,index)}>Delete</button>
            </div>
          ))}
            </div>
          </div>
         </>
  );
};

export default Todo;


