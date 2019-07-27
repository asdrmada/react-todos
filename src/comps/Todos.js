import React, { Component } from 'react';
import ShowTodo from './ShowTodo';
import NewTodo from './NewTodo';
import socketIOClient from "socket.io-client";

export class Todos extends Component {

    constructor(props){
        super(props);

        this.state = {
            endpoint: 'localhost:5000',
            toDos:[]
        }
        this.create = this.create.bind(this);
    }

    send = () => {
        const socket = socketIOClient(this.state.endpoint);
        socket.emit('update list', this.state.toDos)
    }

    componentDidMount = () => {
        const { endpoint } = this.state;
        const socket = socketIOClient(endpoint);
        socket.on('update list', (data) => this.setState({response:data}));
    }

    create(newTodo) {
        this.setState({
          toDos: [...this.state.toDos, newTodo]
        });
      }

    render() {

        const listProp = this.state.toDos.map((todo) => 
            <li><h4>{todo}</h4><p>Done</p></li>
        );

        return (
            <div>
                <ul>
                    <ShowTodo todoProp={listProp}></ShowTodo>
                </ul>

                <NewTodo createTodo={this.create}></NewTodo>
            </div>
        )
    }
}

export default Todos
