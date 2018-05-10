import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
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
  createCustomClearButton = (onClick) => {
    return (
      <span>Filter<ClearSearchButton
        btnText='MyClear'
        btnContextual='btn-warning'
        className='my-custom-class'
        onClick={e => this.handleClearButtonClick(onClick)} /></span>
    );
  }
  createCustomSearchField = (props) => {
    return (
      <SearchField
        className='my-custom-class'
        style={{ visibility: this.state.active === true ? 'visible' : 'hidden' }}
        placeholder='Input a number' />
    );
  }


  rowClassNameFormat(row, rowIdx) {
  return rowIdx % 2 === 0 ? 'td-column-function-even-example' : 'td-column-function-odd-example';
}

  render() {
    const options = {
      clearSearch: true,
      clearSearchBtn: this.createCustomClearButton,
      searchField: this.createCustomSearchField
    };
    return (
      <div className="container-fluid">
      <BootstrapTable data={this.products} options={options} search bordered={false} trClassName={this.rowClassNameFormat} >
      <TableHeaderColumn dataField='id' isKey>Product ID</TableHeaderColumn>
      <TableHeaderColumn dataField='name'>Product Name</TableHeaderColumn>
      <TableHeaderColumn dataField='price'>Product Price</TableHeaderColumn>
        </BootstrapTable>
    </div>
    );
  }
}

export default App;
