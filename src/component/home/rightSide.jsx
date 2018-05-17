import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
class RightSide extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>{this.props.myDataProp}
            </div>
        );
    }
}

export default withRouter(RightSide);