import React, {Component, PropTypes} from 'react';

class Default extends Component {

    constructor(props){
        super(props)
        this.bindHandlers()
    }

    bindHandlers(){
        this.handleIncrementBtnCLick = this.handleIncrementBtnCLick.bind(this)
        this.handleDecrementBtnCLick = this.handleDecrementBtnCLick.bind(this)
        this.handleNumberChange = this.handleNumberChange.bind(this)
    }


    handleIncrementBtnCLick(){
        this.props.incrementDefault()
    }

    handleDecrementBtnCLick(){
        this.props.decrementDefault()
    }

    handleNumberChange(event){
        this.props.setDefault(parseInt(event.target.value,10))
    }

    render() {
        return (
            <div>
               <h1> {this.props.title} </h1>
               <p> {this.props.defaultValue} </p>
               <button onClick={this.handleIncrementBtnCLick}> + </button>
               <button onClick={this.handleDecrementBtnCLick}> - </button>
               <input onChange={this.handleNumberChange} type="number" name="quantity" min="1" max="25"/>
            </div>
        );
    }
}

Default.propTypes = {
 title: PropTypes.string.isRequired,
 defaultValue : PropTypes.number.isRequired,
 incrementDefault: PropTypes.func.isRequired,
 decrementDefault: PropTypes.func.isRequired,
 setDefault: PropTypes.func.isRequired
};

export default Default;