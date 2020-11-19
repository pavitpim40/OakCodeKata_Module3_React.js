import React from 'react';
import countries from './Countries';
import './App.css';

export default class AutoCompletedText extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            suggestions: [],
            text: ''
        }
    }
    // ฟังก์ชันที่ใช้หาชื่อประเทศ - ตัวที่ทำให้เกิด AutoComplete 
    // ใช้ setState เพื่อแสดงผลในช่อง input กับ suggestion 
    onTextChange = (e) => {
        const value = e.target.value;
        let suggestions = [];
        if(value.length > 0){
            const regex = new RegExp(`^${value}`, 'i'); // i คือ modifier แสดงแทนคำว่า case-insensitive 
            // String ก็คือ Array ของตัวอักษร
            suggestions = countries.sort().filter(v => regex.test(v)) //หาตัวที่ตรง RegEx
        }

        this.setState(() => ({
            suggestions,
            text: value
        }))
    }

    selectedText(value) {
        this.setState(() => ({
            text: value,
            suggestions: [],
        }))
    }

    renderSuggestions = () => {
        let { suggestions } = this.state;
        if(suggestions.length === 0){
            return null;
        }
        return (
            <ul >
                {
                    suggestions.map((item, index) => (<li key={index} onClick={() => this.selectedText(item)}>{item}</li>))
                    //ในแต่ละลิสต์มีการฝังฟังก์ชัน onClick ไปด้วย
                }
            </ul>
        );
    }
    
    render() {
        const { text, suggestions } = this.state; //object destructuring    
        return(
            <div id="notebooks">
                <h2>Auto Completed</h2>
                <input id="query" type="text" onChange={this.onTextChange} value={text}/>
                {this.renderSuggestions()}
                <span>Suggestions: {suggestions.length}</span>
            </div>
        );
    }

}