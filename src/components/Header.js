import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logoutUser } from '../action'


class Header extends Component {

    renderContent() {
        switch (this.props.auth) {
            case null: return;
            case false: return (
                <li> <a href="/auth/google">Login with Google</a></li>
            );
            default:
                return (<li>
                    <Link onClick={() => this.props.logoutUser()}>Logout</Link>
                </li>)
        }
    }
    render() {
        console.log(this.props);
        return (
            <div>
                <nav>
                    <div className="nav-wrapper">
                        <a href="#" className="brand-logo">Survey</a>
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            {this.renderContent()}
                        </ul>
                    </div>
                </nav>
            </div>)
    }
}

const mapStatetoProps = ({ auth }) => {
    return {
        auth
    }
}

export default connect(mapStatetoProps, { logoutUser })(Header);
