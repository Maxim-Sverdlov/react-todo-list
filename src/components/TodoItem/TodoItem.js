import React, {Component} from 'react';
import './TodoItem.scss';

class TodoItem extends Component {    
    onClickDone = () => {
        this.props.toggle(this.props.todo.id);
      }

    render() {
        return(
            <li 
                key={this.props.todo.id} 
                className="list-task__item"
                style={{ textDecoration: this.props.todo.completed ? 'line-through' : ''}}
                onClick={this.onClickDone}
            >
                <p>{this.props.todo.text}</p>
                <div className="list-task__control">
                    <button className="btn btn--important">Mark important</button>
                    <button className="btn btn--delete">
                        <span className="visually-hidden">Delete</span>
                    </button>
                </div>
            </li>
        );        
    }
}

export default TodoItem;