import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header/Header';
import './style.scss'
import { Button } from './components/Button/Button';
import { Todolist } from './components/Todolist/Todolist';
import { useEffect, useState } from 'react';

function App() {

  const list =[{ id:Math.random(),
        text:'To do list 1',
         status:false},
         { id:Math.random(),
          text:'To do list 2',
           status:false},
         { id:Math.random(),
          text:'To do list 3',
           status:false},
        ]
const [todos,setTodos] = useState(list)
useEffect (()=>{
  setTodos(todos)
})
const deletehandeClik= ()=>{
  setTodos([])
}
const restoreDelete =()=>{
  setTodos(list)
}
  return (
    <div className='App'>
      <Header 
    onAdd={(text)=> setTodos([
      ...todos,{
        id:Math.random(),
        text:text,
        status:false
      }
    ])}
      />
      <Button/>
      < Todolist todos={todos}/>
      <div className="delete">
        <button onClick={restoreDelete}> Restore deleted task</button>
        <button onClick={deletehandeClik}>Delete all tasks</button>
    </div>
    </div>
  );
}

export default App;
