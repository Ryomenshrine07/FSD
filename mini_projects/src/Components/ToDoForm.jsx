import React, { useState } from 'react'

function ToDoForm({addTodo}) {

    let[value,setValue] = useState('');
    const handleSubmit = (e) =>
    {
        e.preventDefault();
        addTodo(value);
        setValue('');
    }

  return (
    <form className='TodoFrom' onSubmit={handleSubmit}>
        <input className='todo-input' onChange={(e) => {setValue(e.target.value);}} type="text" placeholder='Enter your task....' name="" id="" />
        <button className='todo-btn' type='submit'>Add task</button>
    </form>
  )
}

export default ToDoForm