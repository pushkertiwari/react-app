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
            test:"gdsdgdsgdsgdsg"
        });
    }
    handleCLick(e) {
        e.preventDefault();
        this.props.updateStateProp(e.target.dataset.id);
        alert('ok');
        // this.props.history.push('/' + e.target.dataset.id)
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
                <button testprop={this.state.test} onClick={this.addToCart}>Child.method()</button>
                {/* <button onClick={this.props.updateStateProp}>CLICK</button> */}
                <h3>{this.props.myDataProp}</h3>
                {this.addListing()}
            </div>
        );
    }
}

export default withRouter(LeftSide);