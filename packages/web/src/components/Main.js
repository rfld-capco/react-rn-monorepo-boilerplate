import React, {Component} from 'react';
import sharedAuthFunctions from 'shared/containers/Auth';
import {compose} from 'recompose';
import shR from 'shared/res/R';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="mainDiv">
                <h1 className="mainHeaderText">{shR.strings.auth.welcome}</h1>
            </div>
        );
    }
}

export default compose(sharedAuthFunctions)(Main);
