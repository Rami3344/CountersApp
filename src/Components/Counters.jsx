import React, { Component } from 'react'
import Counter from './Counter';
class Counters extends Component {
    state = {  
        items:[
            {id:1,value:7},
            {id:2,value:0},
            {id:3,value:0},
            {id:4,value:0},
        ]
    }
    handleIncrease=(counter)=>{
        const items = [...this.state.items]
        const i = items.indexOf(counter)
        items[i].value++
        this.setState({items})
    }
    handleDelete=(counter)=>{
        const items = this.state.items.filter(e=> e.id !== counter)
        this.setState({items})

    }
    handleReset=()=>{
        const res = this.state.items.map(c=>{
            c.value = 0;
            return c
        })
        this.setState({res})
    }
    handleAdd=()=>{
        const item = this.state.items

        const push = item.push({id:item.length+1,value:0})
        this.setState({push})
    }
    render() { 
        return (
            <div>
                <h1>Hello And Welcome to my counter application</h1>
                <span style={{color:"white",backgroundColor:"red",padding:"10px",fontSize:"30px",borderRadius:"20px",margin:"20px"}}>{this.state.items.length}</span>
                <button onClick={this.handleReset} className="btn btn-primary">Reset</button>
                <button onClick={this.handleAdd} className="btn btn-warning">Add</button>
                {this.state.items.map(e=>
                    <Counter key={e.id} counter={e} onIncrease={this.handleIncrease} onDelete={this.handleDelete}/>
                    )}
            </div>
        );
    }
}
 
export default Counters;