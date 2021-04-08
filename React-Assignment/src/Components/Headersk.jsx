import React from "react";


function Headersk (props){
    if(props.page == "aboutme") {
        return(
            <div>
                <header>
                    <p> SMU Cohort 2021 -  Jan Term  </p>
                    <a >AboutMe</a>
                    <a onClick={props.navigate}> Halifax</a>
                </header>
            </div>
        )
    } 
    return (
        <div>
            <header>
                <p> SMU Cohort 2021 -  Jan Term  </p>
                <a onClick={props.navigate}>AboutMe</a>
                <a > Halifax</a>
            </header>
        </div>
    )
}

export default Headersk