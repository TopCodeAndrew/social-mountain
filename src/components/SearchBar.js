import React, { Component } from 'react';

export default class SearchBar extends Component {
    constructor() {
        super();
        this.state = {
            userInput: ''
        }
    }



    handleChange(val) {
        this.setState({
            userInput: val
        })
    }

    // handleClick() {
    //     this.props.
    // }


    render() {
        return (
            <div>
                <input onChange={(e) => this.handleChange(e.target.value)}
                    placeholder="filter posts" />

                <button onClick={() => this.props.filterFn(this.state.userInput)}>filter now!</button>
            </div>

        )
    }
}