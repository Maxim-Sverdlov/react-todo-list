import React, {Component} from 'react';

class Task extends Component {
    render() {
        return(
            <section className="task-block">
                <h2 className="visually-hidden">Add task</h2>
                <label className="task-block__label" for="new-task">New Task</label>
                <textarea className="task-block__text" name="add-task" id="new-task" cols="10" rows="3"></textarea>
                <button type="button" className="task-block__btn btn btn--add">Add</button>
            </section>
        );
    }
}

export default Task;