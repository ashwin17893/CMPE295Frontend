import React, {Component} from 'react';
import PropTypes from 'prop-types';
import history from "./history";
import {actionsign} from '../actions/loginactions';
import {connect} from 'react-redux';
import {Button} from 'reactstrap';
import '../App.css';

class Signup extends Component {

    static propTypes = {
        handleSubmit: PropTypes.func.isRequired
    };

    state = {
        first_name: '',
        last_name: '',
        email:'',
        password: '',
        phone_no: 123456789,
        recruiter:false,
        modal: false
    };

    componentWillMount(){
        this.setState({
            email: '',
            username: '',
            password: ''
        });
    }

    navigate()
    {
        history.push('/login');
    }

    render() {

        if (this.props.signin===200){
            alert("sign up successfull");
            this.navigate();
        }
        return (
            <div>
            <div className="bgImg">
            </div>



                <div className="cardoutline">
                        <div className="Welcome-signup">
                            Signup
                        </div>


                            <input
                                className="Signup-firstname"
                                type="text"
                                placeholder="First Name"
                                value={this.state.first_name}
                                onChange={(event) => {
                                    this.setState({
                                        first_name: event.target.value
                                    });
                                }}
                            />



                            <input
                                className="Signup-lastname"
                                type="text"
                                placeholder="Last Name"
                                value={this.state.last_name}
                                onChange={(event) => {
                                    this.setState({
                                        last_name: event.target.value
                                    });
                                }}
                            />




                            <input
                                className="Signup-email"
                                type="text"
                                placeholder="Email"
                                value={this.state.email}
                                onChange={(event) => {
                                    this.setState({
                                        email: event.target.value
                                    });
                                }}
                            />




                            <input
                                className="Signup-password"
                                type="password"
                                placeholder="password"
                                value={this.state.password}
                                onChange={(event) => {
                                    this.setState({
                                        password: event.target.value
                                    });
                                }}
                            />



                            <input
                                className="Signup-phone"
                                type="Number"
                                placeholder="Phone Number"
                                value={this.state.phone_no}
                                onChange={(event) => {
                                    this.setState({
                                        phone_no: event.target.value
                                    });
                                }}
                            />



                            <input
                                className="Signup-recruiter"
                                type="boolean"
                                placeholder="Recruiter"
                                value={this.state.recruiter}
                                onChange={(event) => {
                                    this.setState({
                                        recruiter: event.target.value
                                    });
                                }}
                            />



                            <Button
                                outline color="primary"
                                className="real-signup-btn"
                                type="button"
                                onClick={() => this.props.Sign(this.state)}>
                                Submit
                            </Button>


                </div>
            </div>
        );
    }
}

const mapDispatchToProps =(dispatch)=> {
    return {
        Sign : (data) => dispatch(actionsign(data)),
    };
}

const mapStateToProps =(stores)=> {

    return {
        signin: stores.stores.status
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup);