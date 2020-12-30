import React, {Component} from 'react';

class Searchbar extends Component {

    state = {
        text:''
    }

    handlechange = (event) => {
        this.setState({
            text: event.target.value
        })
    }

    handlesubmit = (event) => {
        event.preventDefault();
        this.props.searchTerm(this.state.text);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handlesubmit}>
                <input value={this.state.text} type="text" onChange={this.handlechange} />
                </form>
            </div>
        )
    }
}

export default Searchbar;