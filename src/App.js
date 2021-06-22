import React, {Component} from 'react';
import './App.scss';

import Filter from './components/Filter/Filter';
import Tasks from './components/Tasks/Tasks';
import Todos from './components/Todos/Todos';

class App extends Component {
  state =  {
    todos: [],
    mode: 'All',
  }

  addTodo = (todo) => {
    this.setState({
      todos: [todo, ...this.state.todos]
    });
  };

  getList = () => {
    return localStorage.getItem('todo-list') !== null ? JSON.parse(localStorage.getItem('todo-list')) : [];
  }

  saveToLocalStorage = (task) => {
    this.setState.todos.push(task);
    localStorage.setItem('todo-list', JSON.stringify(this.state.todos));
  }

  removeFromLocalStorage = (todoIndex) => {
    this.setState.todos.splice(todoIndex, 1);
    localStorage.setItem('todo-list', JSON.stringify(this.state.todos));
  }

  toggleComplete = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          }
        } else {
          return todo;
        }
      })
    })
  }

  /*
  filteredTodos = (mode) => {
    if (mode === 'all') {

    } else if (mode === 'active') {

    } else {

    }
  }
  */

  changeMode = (s) => {
    this.setState({mode: s});
  }

  render() {
    let todos = [];

    if (this.state.mode === 'All') {
      todos = this.state.todos;
    } else if (this.state.mode === 'Active') {
      todos = this.state.todos.filter(todo => !todo.completed);
    } else if (this.state.mode === 'Done') {
      todos = this.state.todos.filter(todo => todo.completed);
    }
    
    return (
      <div className="App">
        <div className="container">
          <h1 className="visually-hidden">APP TODO LIST</h1>
          <header className="header">
              <Filter 
                onClick={this.changeMode}
              />
          </header>
          
          <main className="main">
              <Tasks 
                onClick={this.addTodo}
              />

              <Todos 
                items={todos}
                toggleComplete={this.toggleComplete}
              />
          </main>
        </div>
      </div>
    );
  }
}

export default App;
