import React from 'react';
import logo from './logo.svg';
import './App.css';
import Todos from './components/Todo/Todos'
import Form from './components/Todo/Form'

type Todo = {
 id:number
 body: string
}

type TodoState = {
  todos: Todo[]
  value: string
}

class App extends React.Component<{}, TodoState>  {　
  constructor(props: any) {
    super(props)
    this.state = {
      todos: [{id:1, body: "todo1"},{id:2, body: "todo2"}],
      value: ''
    }
  } 

  handleSubmit(e: React.FormEvent<HTMLFormElement>):void {
    e.preventDefault()
    const newTodos = Object.assign([], this.state.todos,[...this.state.todos, {id: this.state.todos.length + 1, body: this.state.value}])
    this.setState({todos: newTodos})
  }

  handleTodoValue(e: React.ChangeEvent<HTMLInputElement>): void {
    this.setState({value: e.target.value})
  }
  render () {
    const {todos} = this.state
    console.log(this.state)
    return (
      <div className="ui main">
        <Form handleTodoValue={this.handleTodoValue.bind(this)} handleSubmit={this.handleSubmit.bind(this)}/>
        <Todos todos={todos}/>
      </div>
    );  
  }
}

export default App;
