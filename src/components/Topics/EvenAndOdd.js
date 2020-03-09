import React, { Component } from 'react';

export default class EvenAndOdd extends Component {

    constructor(){
        super();
        this.state = {
            evenArray : [],
            oddArray :  [],
            userInput :  ''
        }
    }

    handleChange = (val) => this.setState({userInput: val});
    
    assignEvenAndOdds = (userInput) => {
        console.log(userInput);
        let newArr = userInput.split(',');
        let even = [];
        let odd = [];
        for (let i = 0; i < newArr.length; i++) {
            if(newArr[i] % 2 === 0){
                even.push(newArr[i]);
            }
            else{
                odd.push(newArr[i]);
            }
            
        }
        this.setState({oddArray:odd , evenArray:even});
    }

    render() {
        return (
            <div className="puzzleBox evenAndOddPB">
                <h4>Evens and Odds</h4>
                <input onChange={e => {this.handleChange(e.target.value)}} type="text" className="inputLine"/>
                <button className="confirmationButton" onClick={() => {this.assignEvenAndOdds(this.state.userInput)}}>Split</button>
                <span className="resultsBox">Evens: {JSON.stringify(this.state.evenArray)} </span>
                <span className="resultsBox">Odds:  {JSON.stringify(this.state.oddArray)} </span>
            </div>
        )
    }
}
