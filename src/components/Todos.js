import React, { Component } from 'react';
import TodoItem from './TodoItem'

class Todos extends Component {

  render() {
    let todoItem;
    if(this.props.todos){
      todoItem=this.props.todos.map(todo =>{
        return(
          <TodoItem key={todo.title} todo={todo}/>
        );
      });
    }

    return (
      <div className="Todos">
          My Todos<br/>
          {todoItem}
      </div>
    );
  }
}

export default Todos;
