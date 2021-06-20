import './App.css';

import Form from './components/Form/Form';
import Filter from './components/Filter/Filter';
import Task from './components/Task/Task';
import List from './components/List/List';

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1 class="visually-hidden">APP TODO LIST</h1>
        <header class="header">
            <div class="header__container">
                <a class="header__logo" href="https://senlainc.com/" title="web site company SENLA">
                    <img src="./images/content/logo.svg" width="174" height="44" alt="Company SENLA Logo" />
                </a>
                <Form />
            </div>
        </header>
        
        <main class="main">
            <Filter />

            <Task />

            <List />
        </main>
      </div>
    </div>
  );
}

export default App;
