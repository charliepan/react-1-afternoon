import React, { Component } from 'react'

export default class Palindrome extends Component {

    constructor() {
        super();
        this.state = {
            userInput: '',
            palindrome: ''
        }
    }

    isPalindrome = userInput => {
        const reverse = userInput.split("").reverse().join("");
        if(reverse === userInput){
            this.setState({palindrome: 'true'});
        }
        else{
            this.setState({palindrome: 'false'});            
        }

    }

    render() {
        return (
            <div className="puzzleBox palindromePB">
                <h4>Palindrome</h4>
                <input onChange={e => {this.setState({userInput:e.target.value})}} type="text" className="inputLine"/>
                <button onClick={()=> this.isPalindrome(this.state.userInput)} className="confirmationButton">Check</button>
                <span className="resultsBox">Palindrome: {this.state.palindrome}</span>
            </div>
        )
    }
}
