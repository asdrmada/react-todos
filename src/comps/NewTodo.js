import React, { Component } from 'react'

export class NewTodo extends Component {

    constructor(props){
        super(props);
        this.state = {
            task: ''
        }
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(evt) {
        this.setState({
          [evt.target.name]: evt.target.value
        });
      }

    handleSubmit(evt) {
        evt.preventDefault();
        this.props.createTodo(this.state.task);
        this.setState({ task: "" });
    }

    render() {
        return (
            <div>
              <form onSubmit={this.handleSubmit}>
                <input type='text'
                       placeholder='New Todo'
                       id='task'
                       name='task'
                       value={this.state.task} 
                       onChange={this.handleChange}>
                </input>
                <button>Add Todo!</button>
              </form>
            </div>
        )
    }
}

export default NewTodo
