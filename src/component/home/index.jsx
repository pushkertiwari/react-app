import React, { Component } from 'react';
import  LeftSide  from "./leftSide";
import  RightSide  from "./rightSide";

class Index extends Component{
    constructor(props) {
        super(props);
        this.state = {
            header: "Header from props...",
            content: "Content from props...",
            data: 'checking'
        }
        this.updateState = this.updateState.bind(this);
    }
    updateState(num) {
        console.log(num);
        if (num !== null && num !== undefined && num !== '') {
            this.setState({ data: 'Data updated' })
        } else {
            this.setState({ data: '' })
        }
    }

    render() {
        return (
            <div>
                <LeftSide headerProp={this.state.header}
                    updateStateProp={this.updateState}/>
                <RightSide myDataProp={this.state.data} />
            </div>
        );
    }
}

export default Index;