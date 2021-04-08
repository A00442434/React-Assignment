import React, { Component } from "react";
import ReactDOM from "react-dom";

import Headersk from "./Components/Headersk.jsx";
import Footersk from "./Components/Footersk.jsx";
import AboutMe from "./Components/AboutMe.jsx";
import Halifax from "./Components/Halifax.jsx";

class App extends Component {
    constructor() {
        super()
        this.state = {
            currentPage: "aboutme"
        }
        this.navigate = this.navigate.bind(this);
    }

    navigate() {
        let page;
        if (this.state.currentPage == "aboutme") {
            page = "halifax"
        } else {
            page = "aboutme"
        }
        this.setState({
            currentPage: page
        })
    }

    render() {
        return (
            <div>
                <Headersk page={this.state.currentPage} navigate={this.navigate} />
                {(this.state.currentPage == "aboutme") ? <AboutMe />  : <Halifax />}
                <Footersk/>
            </div>
        )
    }
}


ReactDOM.render(
        <App />, 
    document.getElementById("root"))

export default App.navigate