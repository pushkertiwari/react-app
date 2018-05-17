import React, { Component } from 'react';
import  LeftSide  from "./leftSide";
//import  RightSide  from "./rightSide";

class Index extends Component{
    constructor(props) {
        super(props);
        this.state = {
            header: "Header from props...",
            content: "Content from props...",
            data: 'Initial data...'
        }
        this.updateState = this.updateState.bind(this);
    }
    updateState(num) {
        // this.setState({ data: 'Data updated from the child component...' })
        console.log(num);
    }

    render() {
        return (
            <div>
                <LeftSide headerProp={this.state.header} myDataProp={this.state.data}
                    updateStateProp={this.updateState}/>
                {/* <RightSide /> */}
            </div>
        );
    }
}

export default Index;