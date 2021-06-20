import React, {Component} from 'react';

class Form extends Component {
    render() {
        return (
            <form className="form" action="./server.php" method="POST">
                <input className="header__search search" type="text" placeholder="Search task for to do" />
            </form>
        );
    }
}

export default Form;