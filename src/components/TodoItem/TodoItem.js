import React, {Component} from 'react';
import './TodoItem.scss';

class TodoItem extends Component {    
    onClickDone = () => {
        this.props.toggle(this.props.todo.id);
    }
    
    onClickRemove = (e) => {
        this.props.remove(this.props.todo.id);
        e.stopPropagation();
    }

    onClickImportant = (e) => {
        this.props.important(this.props.todo.id);
        e.stopPropagation();

        const parent = e.target.parentNode.parentNode;
        if (parent.classList.contains('list-task__item--important')) {
            parent.classList.remove('list-task__item--important');
        } else {
            parent.classList.add('list-task__item--important');
        }
    }

    render() {
        let classes = [];
        classes.push('list-task__item');
        if (this.props.todo.important) {
            classes.push('list-task__item--important');
        }
        if (this.props.todo.completed) {
            classes.push('list-task__item--done');
        }

        return(
            <li 
                key={this.props.todo.id}
                className={classes.join(' ')}
                onClick={this.onClickDone}
            >
                <p>{this.props.todo.text}</p>
                <div className="list-task__control">
                    {this.props.todo.important ? <button onClick={this.onClickImportant} className="btn btn--not-important">Not important</button> : <button onClick={this.onClickImportant} className="btn btn--important">Mark important</button>}
                    <button 
                        className="btn btn--delete"
                        onClick={this.onClickRemove}
                    >
                        <span className="visually-hidden">Delete</span>
                    </button>
                </div>
            </li>
        );        
    }
}

export default TodoItem;