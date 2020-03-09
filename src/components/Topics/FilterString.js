import React, { Component } from 'react'

export default class FilterString extends Component {

    constructor(){
        super();
        this.state = {
            unFilteredArray: ['James', 'Jessica', 'Melody', 'Tyler', 'Blake', 'Jennifer', 'Mark', 'Maddy'],
            userInput: '',
            filteredArray: []
        }
    }

    filterStr = userInput =>{
        const filter = this.state.unFilteredArray.filter(val => val.includes(userInput));
        this.setState({filteredArray:filter});
    }

    render() {
        return (
            <div className="puzzleBox filterStringPB">
                <h4>Filter String</h4>
                <span className="puzzleText">Names: { JSON.stringify(this.state.unFilteredArray, null, 10) }</span>
                <input onChange={e => {this.setState({userInput:e.target.value})}}  type="text" className="inputLine"/>
                <button onClick={() => {this.filterStr(this.state.userInput)}} className="confirmationButton">Filter</button>
                <span className="resultsBox filteredStringRB">Filtered Names: { JSON.stringify(this.state.filteredArray, null, 10) }</span>
            </div>
        )
    }
}
