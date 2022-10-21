import React, { Component } from 'react';
class Counter extends Component {
    render() { 
        return (
            <div>
                <h2>Counter:{this.props.counter.id}</h2>
                <span style={{color:"white",margin:"20px",padding:"10px",fontSize:"30px",backgroundColor:"green",borderRadius:"20px"}}>{this.props.counter.value}</span>
                <button onClick={()=>this.props.onIncrease(this.props.counter)} className="btn btn-secondary">Increament</button>
                <button onClick={()=>this.props.onDelete(this.props.counter.id)} className="btn btn-danger">Delete</button>
            </div>
        );
    }
}
 
export default Counter;