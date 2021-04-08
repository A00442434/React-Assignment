import React, { Component } from "react";

class Halifax extends Component {
    constructor() {
        super()
        this.state = {
            indicator: 'c',
            temperature: 0
        }
        this.changeTemp = this.changeTemp.bind(this)
    }

    componentDidMount() {
            fetch("https://api.openweathermap.org/data/2.5/weather?q=Halifax,ca&APPID=99c875ff1082656cf0a70bf715ee54f5")
            .then(response => {
                return response.json()
            })
            .then(response => {
                this.setState({
                    indicator: 'c',
                    temperature: response.main.temp - 273.15
            })
            });
    }

    changeTemp() {
        this.setState(oldState => {
            return {
                indicator: oldState.indicator == 'c'?'f':'c',
                temperature: oldState.indicator == 'c'?(oldState.temperature * 9 / 5) + 32:(oldState.temperature - 32) * 5 / 9
            }
        })
    }

    render() {
        return(
            <div>
                    <p> Currently ,I am living in Halifax, Nova Scotia,Canada. The major
                        attractions in the city are Halifax Waterfront Boardwalk ,Halifax Public Gardens,
                        McNabs Island etc.The weather would be enjoyable in summer here.</p>
                    <img src="https://discoverhalifaxns.com/wp-content/uploads/2017/12/Peggy_s-Cove-Ligthouse--1030x687.jpg"/>
                    <h2>{this.state.temperature}</h2>
                    <p>{this.state.indicator == 'c'?"celcius":"fahrenheit"}</p>
                    <button onClick={this.changeTemp}>Change metric</button>
            </div>
        )
    }
}

export default Halifax