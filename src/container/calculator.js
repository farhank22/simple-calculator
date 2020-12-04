import React, { Component, Fragment } from 'react'
import Button from '../Components/Buttons/buttons'
import './calculator.css'
class Calculator extends Component {
    state = {
        value1: 0,
        value2: 0,
        flag: 0,
        operator: "",
        result:0
    }

    onNumber1Clicked=(val)=>{
        this.setState({value1 : this.state.value1 * 10 + val})
    }

    onNumber2Clicked=(val)=>{
        this.setState({value2 : this.state.value2 * 10 + val})
    }

    onOperatorClicked = (oprtr) => {
        if (!this.state.flag) {
            this.setState({
                flag: !this.state.flag,
                operator: oprtr
            })
        }
        else{
            this.onEqualClicked()
            this.setState({
                value2:0,
                operator: oprtr
            })
        }
    }

    onEqualClicked = () =>{
        console.log(this.state.operator)
        switch(this.state.operator){
            case "+":
            {
                this.setState({ value1: this.state.value1 + this.state.value2,
                result: this.state.value1 + this.state.value2
                })
                break
            }
            case "-":
            {
                this.setState({ value1: this.state.value1 - this.state.value2,
                    result: this.state.value1 - this.state.value2})
                break
            }
            case "*":
            {
                this.setState({ value1: this.state.value1 * this.state.value2,
                    result: this.state.value1 * this.state.value2})
                break
            }
            case "/":
            {
                this.setState({ value1: this.state.value1/this.state.value2,
                    result: this.state.value1/this.state.value2})
                break
            }
            default:break
        }
    }

    onClear = () =>{
        this.setState({
            value1:0,
            value2:0,
            flag:0,
            operator:"",
            result:0
        })
    }
    render() {
        return (
            <Fragment>
                <div className="display">{!this.state.flag ? this.state.value1 : this.state.value2}<br/><br/>
                    {this.state.flag ? this.state.result : 0}</div>
                {/* <ButtonLayout /> */}
                <div className="layout">
                    <Button clicked={!this.state.flag ? () => this.onNumber1Clicked(1) : () => this.onNumber2Clicked(1)}>1</Button>
                    <Button clicked={!this.state.flag ? () => this.onNumber1Clicked(2) : () => this.onNumber2Clicked(2)}>2</Button>
                    <Button clicked={!this.state.flag ? () => this.onNumber1Clicked(3) : () => this.onNumber2Clicked(3)}>3</Button>
                    <Button clicked={!this.state.flag ? () => this.onNumber1Clicked(4) : () => this.onNumber2Clicked(4)}>4</Button>
                    <Button clicked={!this.state.flag ? () => this.onNumber1Clicked(5) : () => this.onNumber2Clicked(5)}>5</Button>
                    <Button clicked={!this.state.flag ? () => this.onNumber1Clicked(6) : () => this.onNumber2Clicked(6)}>6</Button>
                    <Button clicked={!this.state.flag ? () => this.onNumber1Clicked(7) : () => this.onNumber2Clicked(7)}>7</Button>
                    <Button clicked={!this.state.flag ? () => this.onNumber1Clicked(8) : () => this.onNumber2Clicked(8)}>8</Button>
                    <Button clicked={!this.state.flag ? () => this.onNumber1Clicked(9) : () => this.onNumber2Clicked(9)}>9</Button>
                    <Button clicked={!this.state.flag ? () => this.onNumber1Clicked(0) : () => this.onNumber2Clicked(0)}>0</Button>
                    <Button clicked={() => this.onOperatorClicked("+")}>+</Button>
                    <Button clicked={() => this.onOperatorClicked("-")}>-</Button>
                    <Button clicked={() => this.onOperatorClicked("*")}>*</Button>
                    <Button clicked={() => this.onOperatorClicked("/")}>/</Button>
                    <Button clicked={this.onEqualClicked}>=</Button>
                    <Button clicked={this.onClear}>c</Button>
                </div>
            </Fragment>
        )
    }
}


export default Calculator