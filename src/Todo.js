import React, { Component } from 'react';

class Todo extends Component {
    constructor(props){
        super(props)
        this.state = {
            text : "",
            todos : [
                {
                    todo : "todo1wfzefefzfezef",
                    complete : false
                },
                {
                    todo : "todzgegzegzegzeo2",
                    complete : false
                }
            ]
        }
    }
    handleChange = (event) => {
        this.setState({
            text : event.target.value
        })
    }
    add = () => {
        this.setState({
            todos : this.state.todos.concat({todo : this.state.text , complete : false }),
            text : ""
        })
       
    }
    delet = (x) => {
            this.setState({
                todos : this.state.todos.filter(el =>x  !== el.todo)})
    }
    complete = (y) =>{
        this.setState({
            todos : this.state.todos.map(el => el.todo===y ? {...el,complete:!el.complete}:el)
        })
    }

    render() {
        return (
            <div>
                <div className="to-do-box">
                     <div className="box">
                        <h1 className="title1">To Do App!</h1>
                        <p className="para">Add New To-Do</p>
                        <input className="put-txt" type="text" onChange={this.handleChange} value={this.state.text} placeholder="Enter New Task"/><br/>
                        <button className="btn" onClick={this.add} >Add</button>
                    </div>
                </div>
                <div>
                    <h2 className="title2">Let's get some work done!</h2>
        
                </div>
                <div className="boxes">
                    {this.state.todos.map(el => <div>
                        <h2 className={el.complete ? 'active':""}>{el.todo}</h2>
                        <button onClick={()=>this.complete(el.todo)}>{el.complete ? "undo" : "complete"}</button>
                        <button onClick={() => this.delet(el.todo)}>Delete</button>
                    </div>)}


                </div>
            </div>
        );
    }
}

export default Todo