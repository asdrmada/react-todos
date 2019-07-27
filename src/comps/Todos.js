import React, { Component } from 'react';
import ShowTodo from './ShowTodo';
import NewTodo from './NewTodo';
import socketIOClient from "socket.io-client";

export class Todos extends Component {

    constructor(props){
        super(props);

        this.state = {
            endpoint: 'localhost:3000',
            toDos :[
                'Test listing',
                'test 2'
            ]
        }
    }

    send = () => {
        const socket = socketIOClient(this.state.endpoint);
        socket.emit('update list', this.state.toDos)
    }

    componentDidMount = () => {
        const socket = socketIOClient(this.state.endpoint);
        setInterval(this.send(), 1000)
        socket.on('update list');
    }

    render() {

        const listProp = this.state.toDos.map((todo) => 
            <h4>{todo}</h4>
        );

        return (
            <div>
                <ul>
                    <li>
                        <ShowTodo todoProp={listProp}></ShowTodo>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Todos
