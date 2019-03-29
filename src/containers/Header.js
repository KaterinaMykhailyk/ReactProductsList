import React, {Component, Fragment} from 'react';
import Button from '../components/Button';
// import Input from '../components/Input';
import {connect} from 'react-redux';
import {fetchProductsIfNeeded} from "../actions";


class Header extends Component {
    constructor (props) {
        super (props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        console.log("I am in CLICK");
        this.props.onFetchProductsIfNeeded();
    }

    render() {
        return (
            <Fragment>
                <Button onClick={this.handleClick}/>
            </Fragment>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onFetchProductsIfNeeded: () => {
            dispatch(fetchProductsIfNeeded());
        }
    }
};



export default connect(null, mapDispatchToProps)(Header);
