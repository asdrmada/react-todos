import React, { Component } from 'react'

export class ShowTodo extends Component {
    render() {
        return (
            <div>
                {this.props.todoProp}<p>Done</p>
            </div>
        )
    }
}

export default ShowTodo
