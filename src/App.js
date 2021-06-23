import React, {Component} from 'react';
import './App.scss';

import Filter from './components/Filter/Filter';
import Tasks from './components/Tasks/Tasks';
import Todos from './components/Todos/Todos';

class App extends Component {
  state = {
    todos: [],
    mode: 'All',
    searchedValue: '',
  }

  componentDidMount() {
    const todos = localStorage.getItem('todo-list') !== null ? JSON.parse(localStorage.getItem('todo-list')) : [];
    this.setState({ todos: todos });
  }

  componentDidUpdate() {
    localStorage.setItem('todo-list', JSON.stringify(this.state.todos));
  }

  addTodo = (todo) => {
    this.setState({
      todos: [todo, ...this.state.todos]
    });
  };

  removeTodo = (id) => {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== id),
    });
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
    });
  }

  toggleImportant = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            important: !todo.important,
          }
        } else {
          return todo;
        }
      })
    });
  }

  changeMode = (s) => {
    this.setState({mode: s});
  }

  changeSearchedValue = (text) => {
    this.setState({searchedValue: text});
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
   
    todos = todos.filter(todo => {
      if (this.state.searchedValue === '') {
        return todo;
      } else if (todo.text.toLowerCase().includes(this.state.searchedValue.toLowerCase())) {
        return todo;
      } else {
        return null;
      }
    })

    return (
      <div className="App">
        <div className="container">
          <h1 className="visually-hidden">APP TODO LIST</h1>
          <header className="header">
              <Filter 
                onClick={this.changeMode}
                searched={this.changeSearchedValue}
              />
          </header>
          
          <main className="main">
              <Tasks 
                onClick={this.addTodo}
              />

              <Todos 
                items={todos}
                toggleComplete={this.toggleComplete}
                toggleImportant={this.toggleImportant}
                onRemove={this.removeTodo}
              />
          </main>
        </div>
      </div>
    );
  }
}

export default App;
