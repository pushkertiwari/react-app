import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
class RightSide extends Component {
    constructor(props) {
        super(props);
        this.state = { email: '', password: '' };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handlePassword = this.handlePassword.bind(this);

    }

    handleSubmit(e) {
        e.preventDefault();
        console.log(this.state);
    }
    handleChange(event) {
        console.log(event.target.value);
        this.setState({ email: event.target.value });
    }
    handlePassword(e) {
        console.log(e.target.value);
        this.setState({password:e.target.value})
    }

    render() {
       // console.log(this.props.myDataProp)
        return (
            <div className="container">
                <div className="container-fluid">
                    <div className="row">
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <label>Email address
                                <input name="email" type="email" className="form-control" onChange={this.handleChange} value={this.state.email} id="exampleInputEmail1" placeholder="Enter email" />
                                </label>
                            </div>
                                <div className="form-group">
                                    <label>Password
                                    <input type="password" name="password" className="form-control" onChange={this.handlePassword} value={this.state.password} id="exampleInputPassword1" placeholder="Password"/>
                                    </label>
                            </div>
                            <input type="submit" className="btn btn-info" value="Submit" />
                        </form>
                    </div>
                </div>
            </div>
                        );
                    }
                }

export default withRouter(RightSide);