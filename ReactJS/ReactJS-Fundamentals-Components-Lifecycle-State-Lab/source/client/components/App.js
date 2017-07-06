import React from 'react';
import Navbar from "./Navbar";
import Footer from "./Footer";

export default class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            loggedInUserId: ''
        };

        this.LOGIN_DEFAULT_USER = this.LOGIN_DEFAULT_USER.bind(this);
    };

    render() {
        let userData = {
            loggedInUserId: this.state.loggedInUserId,
            loginUser: this.LOGIN_DEFAULT_USER,
            logoutUser: this.logoutUser.bind(this)
        };

        return (
            <div>
                <Navbar history={this.props.history} userData={userData}/>
                { this.props.children }
                <Footer/>
            </div>
        );
    }

    componentDidMount(){
        this.LOGIN_DEFAULT_USER();
    };

    LOGIN_DEFAULT_USER(){
        let request = {
            method: 'post',
            url: '/user/login',
            data: JSON.stringify({username: 'admin', password: 'admin'}),
            contentType: 'application/json'
        };

        $.ajax(request)
            .done((userId) => {
                this.setState({
                   loggedInUserId: userId
                });
            })
            .fail((err) => {
                console.log("User login failed", err);
                this.setState({
                    loggedInUserId: '',
                    message: err.responseJSON.message
                });
            });
    };

    logoutUser(){
        let request = {
            method: 'post',
            url: '/user/logout'
        };

        $.ajax(request)
            .done(() => {
                this.setState({
                    loggedInUserId: ''
                });
            })
            .fail((err) => {
                this.setState({
                    error: err.responseJSON.message
                });
            });
    };
}