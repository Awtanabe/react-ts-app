import React from 'react';
import logo from './logo.svg';
import './App.css';
import Todos from './components/Todo/Todos'




type Todo = {
 id:number
 body: string
}

function App () {
  const todos: Todo[] = [{id:1, body: "todo1"},{id:2, body: "todo2"}]

  return (
    <div className="ui main">
      <Todos todos={todos}/>
    </div>
  );
}

export default App;
