import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
function validate(email, password) {
    // true means invalid, so our conditions got reversed
    return {
        email: email.length === 0,
        password: password.length === 0,
    };
}
class RightSide extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '', password: '', everFocusedEmail: false,
            everFocusedPassword: false,
            inFocus: '',};
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handlePassword = this.handlePassword.bind(this);

    }
    canBeSubmitted() {
        const errors = validate(this.state.email, this.state.password);
        const isDisabled = Object.keys(errors).some(x => errors[x]);
        return !isDisabled;
    }

    handleSubmit(evt) {
        evt.preventDefault();
        console.log(this.state);
        if (!this.canBeSubmitted()) {
            evt.preventDefault();
            return;
        }
        const { email, password } = this.state;
        alert(`Signed up with email: ${email} password: ${password}`);
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
        const errors = validate(this.state.email, this.state.password);
        const isDisabled = Object.keys(errors).some(x => errors[x]);
       // console.log(this.props.myDataProp)
        return (
            <div className="container">
                <div className="container-fluid">
                    <div className="row">
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <label>Email address
                                <input name="email" type="email" className={errors.email ? "form-control error" : "form-control"} onChange={this.handleChange} value={this.state.email} id="exampleInputEmail1" placeholder="Enter email" />
                                </label>
                            </div>
                                <div className="form-group">
                                    <label>Password
                                    <input type="password" name="password" className={errors.password ? "form-control error" : "form-control"} onChange={this.handlePassword} value={this.state.password} id="exampleInputPassword1" placeholder="Password"/>
                                    </label>
                            </div>
                            <input type="submit" disabled={isDisabled}  className="btn btn-info" value="Submit" />
                        </form>
                    </div>
                </div>
            </div>
                        );
                    }
                }

export default withRouter(RightSide);