import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router-dom';
//import logo from './logo.svg';
// import Loader from 'react-loader-spinner';
import { BootstrapTable, TableHeaderColumn, SearchField, ClearSearchButton } from 'react-bootstrap-table';
import '../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
    };
    this.handleCLick = this.handleCLick.bind(this);
    }

  handleClearButtonClick = (onClick) => {
    // Custom your onClick event here,
    // it's not necessary to implement this function if you have no any process before onClick
    console.log('This is my custom function for ClearSearchButton click event');
    const currentState = this.state.active;
    this.setState({ active: !currentState });
    onClick();

  }
   products = [{
      id: 1,
      name: "Product1",
      price: 120
    }, {
      id: 2,
      name: "Product2",
      price: 80
     }];
  lists = [{
    name: "home"
  }, {
    name: "about"
  }];
  createCustomClearButton = (onClick) => {
    return (
     <ClearSearchButton
        btnText='MyClear'
        btnContextual='btn-warning'
        className='my-custom-class'
        onClick={e => this.handleClearButtonClick(onClick)} />
    );
  }
  createCustomSearchField = (props) => {
    return (
     <SearchField
        className='my-custom-class'
        style={{ visibility: this.state.active === true ? 'visible' : 'hidden' }}
        placeholder='Input a number' onKeyUp={this.props.search} />
    );
  }
  getValue() {
    return ReactDOM.findDOMNode(this).value;
  }
  setValue(value) {
    alert(value);
    ReactDOM.findDOMNode(this).value = value;
  }
  handleCLick(e) {
    e.preventDefault();
    this.props.history.push('/' + e.target.dataset.id)
  }


  rowClassNameFormat(row, rowIdx) {
  return rowIdx % 2 === 0 ? 'td-column-function-even-example' : 'td-column-function-odd-example';
  }

  addListing() {
    return (
        this.lists.map((item, i) =>
        <li data-id={item.name} onClick={this.handleCLick} key={i}>{item.name}</li>)
    );
  }

  render() {
    const options = {
      clearSearch: true,
      clearSearchBtn: this.createCustomClearButton,
      searchField: this.createCustomSearchField
    };

    return (
      <div className="container">
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand" style={{'cursor':'pointer'}} onClick={this.handleCLick}>Sotch Header</a>
            </div>
            <div className="navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav">
                {this.addListing()}
              </ul>
            </div>
          </div>
        </nav>
        <div className="container-fluid">
      <BootstrapTable data={this.products} options={options} search bordered={false} trClassName={this.rowClassNameFormat} >
      <TableHeaderColumn dataField='id' isKey>Product ID</TableHeaderColumn>
      <TableHeaderColumn dataField='name'>Product Name</TableHeaderColumn>
      <TableHeaderColumn dataField='price'>Product Price</TableHeaderColumn>
        </BootstrapTable>
        </div>
    </div>
    );
  }
}

export default withRouter(App);
