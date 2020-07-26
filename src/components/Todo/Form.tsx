import React, {FC} from 'react'

type handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>  void
type handleSubmit = (event: React.FormEvent<HTMLFormElement>) =>  void

type FormProps = {
  handleTodoValue: handleChange
  handleSubmit: handleSubmit
}

const Form: FC<FormProps> = (props) => {
  return(
    <div>
      <form onSubmit={props.handleSubmit}>
        <input type="input" onChange={props.handleTodoValue}/>
        <input type="submit" value="追加"/>
      </form>
    </div>
  )
}

export default Form