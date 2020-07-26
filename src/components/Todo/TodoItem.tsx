import * as React from 'react'

type TodoItemProps = {
  id: number
  body: string
}
type Todo = {
  id: number
  body: string
}

const TodoItem: React.FC<TodoItemProps> = (props) => {
  return(<div>{props.body}</div>)
}

export default TodoItem