import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class LeftSide extends Component {
    constructor(props) {
        super(props);
        this.state = {
            test: "",
        }
        this.addToCart = this.addToCart.bind(this);
        this.handleCLick = this.handleCLick.bind(this);
    }
    lists = [{
        name: "home"
    }, {
        name: "about"
    }];
    addToCart(e) {
        e.preventDefault();
        console.log(this.props.headerProp);
        this.setState({
            test:"testing"
        });
    }
    handleCLick(e) {
        e.preventDefault();
        this.props.updateStateProp(e.target.dataset.id);
    }
    deleteRow(e) {
        e.preventDefault();
        if (this.state.myDataProp !== null) {
            this.props.updateStateProp('');
        }
    }
    addListing() {
        return (
            this.lists.map((item, i) =>
                <li data-id={item.name} onClick={this.handleCLick} key={i}>{item.name}</li>)
        );
    }
    render() {
        return (
            <div>
                <div className="container">
                    <div className="container-fluid">
                        {this.state.myDataProp}
                        <button className="btn btn-primary" onClick={this.addToCart}>Method</button>
                        <button className="btn btn-danger" onClick={this.deleteRow.bind(this)}>Delete Row</button>
                        {this.addListing()}
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(LeftSide);