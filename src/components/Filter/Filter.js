import React, {Component} from 'react';

class Filter extends Component {
    render() {
        return(
            <ul className="filter">
                <li className="filter__item"><a className="filter__link  filter__link--active" href="#">All</a></li>
                <li className="filter__item"><a className="filter__link" href="#">Active</a></li>
                <li className="filter__item"><a className="filter__link" href="#">Done</a></li>
            </ul>
        );
    }
}

export default Filter;