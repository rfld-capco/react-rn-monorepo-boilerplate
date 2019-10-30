import React from 'react';
import {View, Image, Text} from 'react-native';
import {Input, Button} from 'react-native-elements';
import {withNavigation} from 'react-navigation';
import sharedAuthFunctions from 'shared/containers/Auth';
import shR from 'shared/res/R';
import AppRoute from '../../utils/approute';
import styles from './styles/authStyle';
import {isLoggedIn} from '../../utils';
import images from 'shared/res/images';

class Auth extends React.Component {
    componentDidUpdate() {
        isLoggedIn()
            .then((isLogged) => {
                if (isLogged) {
                    this.props.navigation.navigate(AppRoute.home);
                }
            })
            .catch(function(e) {
                console.error(e.message);
            });
    }

    render() {
        return (
            <View
                style={{
                    flexDirection: 'col',
                    height: 500,
                    top: 50,
                    width: 475
                }}
            >
                <Image style={styles.logo} source={images.main.logo} />
                <Text style={styles.header}>{shR.strings.auth.welcome}</Text>
                <View style={styles.formView}>
                    <Input
                        placeholder={this.props.emailPlaceholder}
                        errorStyle={{color: shR.colors.red}}
                        value={this.props.email}
                        inputStyle={{color: shR.colors.black}}
                        style={styles.input}
                        onChangeText={(text) => this.props.onEmailUpdate(text)}
                    />
                    <Input
                        placeholder={this.props.passwordPlaceholder}
                        errorStyle={{color: shR.colors.red}}
                        value={this.props.password}
                        inputStyle={{color: shR.colors.black}}
                        style={styles.input}
                        secureTextEntry
                        onChangeText={(text) => this.props.onPasswordUpdate(text)}
                    />
                    <Button
                        title={this.props.loginButtonTitle}
                        style={{marginTop: 50}}
                        buttonStyle={{backgroundColor: shR.colors.main.default}}
                        onPress={() => {
                            this.props.onLoginClicked();
                        }}
                    />
                </View>
            </View>
        );
    }
}

export default sharedAuthFunctions(withNavigation(Auth));
