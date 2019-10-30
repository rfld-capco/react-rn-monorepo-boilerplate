import React, {Component} from 'react';
import _ from 'lodash';
import {View, Image} from 'react-native';
import {Button} from 'react-native-elements';
import {withNavigation} from 'react-navigation';
import {compose} from 'recompose';
import sharedAuthFunctions from 'shared/containers/Auth';
import {isLoggedIn} from '../../utils';
import shR from 'shared/res/R';
import AppRoute from '../../utils/approute';
import styles from './styles/homeStyle';
import images from 'shared/res/images';

class Home extends Component {
    constructor(props) {
        super(props);
        this.checkIfLogged();
    }

    componentDidUpdate() {
        this.checkIfLogged();
    }

    checkIfLogged = () => {
        isLoggedIn()
            .then((isLogged) => {
                if (!isLogged) {
                    this.props.navigation.navigate(AppRoute.auth);
                }
            })
            .catch(function(e) {
                console.error(e.message);
            });
    };

    render() {
        return (
            <View style={{top: 50, height: 500, width: 475}}>
                <Image style={styles.logo} source={images.main.logo} />
                <Button
                    title={this.props.logoutButtonTitle}
                    style={styles.buttonStyle}
                    buttonStyle={{backgroundColor: shR.colors.main.default}}
                    onPress={() => {
                        this.props.logout();
                    }}
                />
            </View>
        );
    }
}

export default compose(sharedAuthFunctions)(withNavigation(Home));
