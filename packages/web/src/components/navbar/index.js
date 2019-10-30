import React from 'react';
import images from 'shared/res/images';
import {connect} from 'react-redux';
import '../../styles/navStyle.css';
import shR from 'shared/res/R';

class NavComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false
        };
        this.burgerToggle = () => {
            let linksEl = document.querySelector('.narrowLinks');
            if (linksEl.style.display === 'block') {
                linksEl.style.display = 'none';
            } else {
                linksEl.style.display = 'block';
            }
        };
    }

    render() {
        return (
            <nav className="nav">
                <div className="navWide">
                    <div className="wideDiv">
                        <img src={images.main.logo} alt="" />
                        <a href="localhost:3000">{shR.strings.auth.home}</a>
                    </div>
                </div>
                <div className="navNarrow">
                    <img src={images.main.logo} alt="" />
                    <i className="fa fa-bars fa-2x" onClick={this.burgerToggle}></i>
                    <div className="narrowLinks">
                        <a href="localhost:3000" onClick={this.burgerToggle}>
                            {shR.strings.auth.home}
                        </a>
                    </div>
                </div>
            </nav>
        );
    }
}

function mapStateToProps(state) {
    return {};
}

export default connect(mapStateToProps)(NavComponent);
