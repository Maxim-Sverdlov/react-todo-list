import React, {Component} from 'react';
import './Filter.scss';
import {ReactComponent as ReactIcon} from '../../images/content/logo.svg';

class Filter extends Component {
    state = {
        text: '',
    }

    inputChangeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
        console.log(e.target.value);
    };
    
    submitHandler = (e) => {
        e.preventDefault();
        console.log('HI!');
    };

    render() {
        return(
            <div className="header__container">
                <a className="header__logo" href="https://senlainc.com/" title="web site company SENLA">
                    <ReactIcon />
                </a>
                <form 
                    className="form" 
                    action="./server.php" 
                    method="POST"
                    onSubmit={this.submitHandler}
                >
                    <input 
                        className="header__search search" 
                        name="text"
                        type="text" 
                        placeholder="Search task for to do"
                        value={this.state.text}
                        onChange={this.inputChangeHandler}
                    />
                </form>
                <ul className="filter">
                    <li className="filter__item">
                        <a className="filter__link  filter__link--active" href="#">All</a>
                    </li>
                    <li className="filter__item">
                        <a className="filter__link" href="#">Active</a>
                    </li>
                    <li className="filter__item">
                        <a className="filter__link" href="#">Done</a>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Filter;