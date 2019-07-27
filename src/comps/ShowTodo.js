import React, { Component } from 'react'

export class ShowTodo extends Component {
    render() {
        return (
            <div>
                {this.props.todoProp}
            </div>
        )
    }
}

export default ShowTodo
