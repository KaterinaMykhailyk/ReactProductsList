import React, {Component, Fragment} from 'react';
import Button from '../components/Button';
import Input from '../components/Input';
import {connect} from 'react-redux';
import {fetchProductsIfNeeded, searchProducts} from "../actions";

class Header extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.state = {
            searchValue: ""
        }
    }

    handleKeyPress(event) {
        if (event.key === 'Enter') {
            this.props.onSearch(this.state.searchValue);
        }
    }

    handleChange(event) {
        this.setState({searchValue: event.target.value.toLowerCase()});
    }

    handleClick() {
        this.props.onFetchProductsIfNeeded();
    }

    render() {
        return (
            <Fragment>
                <Button onClick={this.handleClick}/>
                <Input onChange={this.handleChange} value={this.state.searchValue} onKeyPress={this.handleKeyPress} />
            </Fragment>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onFetchProductsIfNeeded: () => {
            dispatch(fetchProductsIfNeeded());
        },
        onSearch: (query) => {
            dispatch(searchProducts(query));
        }
    }
};


export default connect(null, mapDispatchToProps)(Header);
