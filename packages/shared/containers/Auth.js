import React, {Component} from 'react';
import {connect} from 'react-redux';
import shR from '../res/R';
import * as actions from '../redux/actions/auth_actions';

export default function sharedAuthFunctions(OriginalComponent) {
    class SharedAuth extends Component {
        state = {
            email: '',
            password: ''
        };

        onEmailUpdate = (email) => {
            this.setState({email});
        };

        onPasswordUpdate = (password) => {
            this.setState({password});
        };

        onLoginClicked = () => {
            this.props.loginUser({
                email: this.state.email,
                password: this.state.password
            });
        };

        logout = () => {
            if (typeof this.props.authActions !== 'undefined') {
                this.props.authActions.logoutUser();
            } else {
                this.props.logoutUser();
            }
        };

        render() {
            return (
                <OriginalComponent
                    {...this.props}
                    user={this.props.user}
                    isAuthenticated={this.props.isAuthenticated}
                    auth_loading={this.props.auth_loading}
                    auth_error={this.props.auth_error}
                    onEmailUpdate={this.onEmailUpdate}
                    onPasswordUpdate={this.onPasswordUpdate}
                    onLoginClicked={this.onLoginClicked}
                    email={this.state.email}
                    password={this.state.password}
                    emailPlaceholder={shR.strings.auth.email}
                    passwordPlaceholder={shR.strings.auth.password}
                    loginButtonTitle={shR.strings.auth.login}
                    logoutButtonTitle={shR.strings.auth.logout}
                    logout={this.logout}
                />
            );
        }
    }
    const sharedAuthMapStateToProps = (state) => {
        const {auth_error, auth_loading, user, isAuthenticated} = state.auth;
        return {auth_error, auth_loading, user, isAuthenticated};
    };

    return connect(
        sharedAuthMapStateToProps,
        actions
    )(SharedAuth);
}
