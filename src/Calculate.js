import React, {Component} from 'react';
import './Calculate.css';
import Result from "./Result";
import ButtonNumber from "./Button/ButtonNumber";
import ButtonOperator from "./Button/ButtonOperator";

class Calculate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: " ",
            operator: " "
        };
    }

    handleClick = (select) => {
        console.log("la valeur est " + select);

        this.setState(props => (
            {
                value: props.value + select
            })
        );
    };

    handleDelete() {
        console.log("la valeur " + this.state.value + " est effacé");
        this.setState(
            {
                value: " "
            }
        );
    }

    handleValid = (select) => {
        // const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        // const operators = ["/", "*", "-", "+"];
        // let operator = " ";
        // let number = "";
        // // // const results = parseInt(this.state.value, 10);
        // // // let num = results.toString().split('');
        // // // let realNum = num.map(Number);
        //
        // let test = " ";
        // operators.forEach(function (value) {
        //     operator = value;
        //     // switch (operator) {
        //     //     case "-":
        //     //         test = "-";
        //     //         break;
        //     //     case "/":
        //     //         test = "/";
        //     //         break;
        //     //     case "*":
        //     //         test = "*";
        //     //         break;
        //     //     case "+" :
        //     //         test = "+";
        //     //         break;
        //     // }
        // });
        //
        // numbers.forEach(function (value) {
        //     number = value
        // });
        //
        // switch (operator) {
        //     case "-":
        //         test = "-";
        //         break;
        //     case "/":
        //         test = "/";
        //         break;
        //     case "*":
        //         test = "*";
        //         break;
        //     case "+" :
        //         test = "+";
        //         break;
        // }
        //
        // console.log(test);
        // console.log(eval(this.state.value + test + this.state.value))


        const result = this.state.value;
        console.log(result);

        this.setState({
            value: (eval(result))
        })
    };

    render() {
        return (
            <form>
                <h2>Calculate</h2>
                <div className="App-intro">
                    <div className="board-row">
                        <ButtonOperator select="/" operator="/" onClick={this.handleClick}/>
                        <ButtonOperator select="*" operator="*" onClick={this.handleClick}/>
                        <ButtonOperator select="-" operator="-" onClick={this.handleClick}/>
                        <ButtonOperator select="+" operator="+" onClick={this.handleClick}/>
                        <ButtonOperator select="." operator="." onClick={this.handleClick}/>
                        <ButtonOperator select="(" operator="(" onClick={this.handleClick}/>
                        <ButtonOperator select=")" operator=")" onClick={this.handleClick}/>
                    </div>
                </div>
                <div className="App-intro">
                    <div className="board-row">
                        <ButtonNumber select={7} number="7" onClick={this.handleClick}/>
                        <ButtonNumber select={8} number="8" onClick={this.handleClick}/>
                        <ButtonNumber select={9} number="9" onClick={this.handleClick}/>
                    </div>
                    <div className="board-row">
                        <ButtonNumber select={4} number="4" onClick={this.handleClick}/>
                        <ButtonNumber select={5} number="5" onClick={this.handleClick}/>
                        <ButtonNumber select={6} number="6" onClick={this.handleClick}/>
                    </div>
                    <div className="board-row">
                        <ButtonNumber select={1} number="1" onClick={this.handleClick}/>
                        <ButtonNumber select={2} number="2" onClick={this.handleClick}/>
                        <ButtonNumber select={3} number="3" onClick={this.handleClick}/>
                    </div>
                    <div className="board-row">
                        <button className="align" type="submit" onClick={() => this.handleDelete()}>del</button>
                        <ButtonNumber select={0} number="0" onClick={this.handleClick}/>
                        <ButtonOperator select="=" operator="=" onClick={this.handleValid}/>
                    </div>
                </div>
                <br/><br/>
                <Result result={this.state.value}/>
            </form>
        )
    }
}

export default Calculate;