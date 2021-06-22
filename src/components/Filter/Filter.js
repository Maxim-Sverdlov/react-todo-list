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
    };

    filterChange = (e) => {
        document.querySelector('.filter__link--active').classList.remove('filter__link--active');
        e.target.classList.add('filter__link--active');
        this.props.onClick(e.target.innerText);
    }

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
                        <a 
                            className="filter__link  filter__link--active"
                            onClick={this.filterChange}
                            href="#">All
                        </a>
                    </li>
                    <li className="filter__item">
                        <a 
                            className="filter__link"
                            onClick={this.filterChange}
                            href="#">Active
                        </a>
                    </li>
                    <li className="filter__item">
                        <a 
                            className="filter__link"
                            onClick={this.filterChange}
                            href="#">Done
                        </a>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Filter;