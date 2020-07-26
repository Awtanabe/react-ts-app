import * as React from 'react'
import { classBody } from '@babel/types';

type TodoItemProps = {
  id: number
  body: string
}
type Todo = {
  id: number
  body: string
}

const TodoItem: React.FC<TodoItemProps> = (props) => {
  return(<div key={props.id}>{props.body}</div>)
}

export default TodoItem