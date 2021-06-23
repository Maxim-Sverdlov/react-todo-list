import React, {Component} from 'react';
import { nanoid } from 'nanoid'
import './Tasks.scss';

class Tasks extends Component {
    state = {
        text: '',
    }
    
    pressedEnter = (e) => {
        if(e.keyCode === 13 && e.shiftKey === false) {
            e.preventDefault();
            this.handleClick();
        }
    }

    changeValue = (e) => {
        this.setState({
            text: e.target.value,
        });
    }

    handleClick = (e) => {
        this.props.onClick({
            id: nanoid(),
            text: this.state.text,
            completed: false,
            important: false,
        });

        document.querySelector('.task-block__text').value = '';
    };


    render() {
        return(
            <section className="task-block">
                <h2 className="visually-hidden">Add task</h2>
                <label className="task-block__label" htmlFor="new-task">New Task</label>
                <textarea 
                    className="task-block__text" 
                    name="add-task" 
                    id="new-task" 
                    cols="10" 
                    rows="3"
                    value={this.setState.text}
                    onChange={this.changeValue}
                    onKeyDown={this.pressedEnter}
                >
                </textarea>
                <button 
                    type="button" 
                    className="task-block__btn btn btn--add"
                    onClick={this.handleClick}
                >Add
                </button>
            </section>
        );
    }
}

export default Tasks;