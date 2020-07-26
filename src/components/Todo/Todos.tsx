import React ,{Component} from 'react';
import TodoItem from './TodoItem'

type TodosProps = {
  todos: Todo[]
}

type Todo = {
 id: number
 body: string
}

type TodosState = {
  todos: Todo[]
}

class Todos extends React.Component<TodosProps,{}> {
  render() {
    return (
      <div className="Todos">
        {this.props.todos.map(todo => <TodoItem {...todo} />)}
      </div>
    );
  }
}

export default Todos;
