import React, {Component} from 'react';
import TodoItem from '../TodoItem/TodoItem';

class Todos extends Component {    
    render() {
        const todos = this.props.items;
        return(
            <ul className="list-task">
                {todos.map((todo) => {
                    return <TodoItem
                        key={todo.id}
                        id={todo.id}
                        todo={todo}
                        toggle={this.props.toggleComplete}
                    />
                })}
            </ul>
       );
    }
}

export default Todos;