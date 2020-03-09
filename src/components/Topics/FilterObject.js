import React, { Component } from 'react'

export default class FilterObject extends Component {

    constructor(){
        super();
        this.state = {
            unFilteredArray: [
                {
                    name: 'Jimmy Joe',
                    title: 'Hack0r',
                    age: 12,
                    },
                    {
                    name: 'Jeremy Schrader',
                    age: 24,
                    hairColor: 'brown'
                    },
                    {
                    name: 'Carly Armstrong',
                    title: 'CEO',
                }
            ],
            userInput: '',
            filteredArray: []
        }
    }

    filterObj = (userInput) =>{
        const filter = this.state.unFilteredArray.filter((val,i,arr) => arr[i].hasOwnProperty(userInput));
        this.setState({filteredArray: filter});
    }

    render() {
        return (
            <div className="puzzleBox filterObjectPB">
                <h4>Filter Object</h4>
                <span className="puzzleText">Original {JSON.stringify(this.state.unFilteredArray, null, 10)}</span>
                <input onChange={e => {this.setState({userInput:e.target.value})}} type="text" className="inputLine"/>
                <button onClick={() => {this.filterObj(this.state.userInput)}} className="confirmationButton">Filter</button>
                <span className="resultsBox filterObjectRB">Filtered: {JSON.stringify(this.state.filteredArray, null, 10)}</span>
            </div>
        )
    }
}
