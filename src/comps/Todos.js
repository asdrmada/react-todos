import React, { Component } from 'react';
import ShowTodo from './ShowTodo';
import NewTodo from './NewTodo';
import socketIOClient from "socket.io-client";

export class Todos extends Component {

    constructor(props){
        super(props);

        this.state = {
            endpoint: 'localhost:5000',
            response: false,

            toDos:[]
        }
        this.create = this.create.bind(this);
        this.send   = this.send.bind(this);
    }

    // Socket functions/client Set-up
    componentDidMount = () => {
        const socket = socketIOClient(this.state.endpoint);
        socket.on('update list', (data) => this.setState({toDos:data}));
    }
    componentWillUnmount = () => {
        const socket = socketIOClient(this.state.endpoint);
        socket.removeListener('data', this.handleData);
    }
    send() {
        const socket = socketIOClient(this.state.endpoint);
        socket.emit('update list', {list:'update list'});
    }

    create(newTodo) {
        this.setState({
          toDos: [...this.state.toDos, newTodo]
        });
       this.send()
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

                <NewTodo createTodo={this.create} addSocket={this.send}></NewTodo>
            </div>
        )
    }
}

export default Todos
