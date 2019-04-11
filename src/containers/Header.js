import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {withRouter} from "react-router-dom";
import Input from '../components/Input';
import {fetchProducts, searchProducts} from "../actions";
import Navbar from 'react-bootstrap/Navbar';

export class Header extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            searchValue: ""
        };
    }

    componentDidMount() {
        this.props.onFetchProducts();
        if (this.props.history.location.search) {
            this.props.onSearch(this.props.history.location.search.slice(1));
        }
    }

    handleChange(event) {
        let location;
        const {history} = this.props;

        this.setState({searchValue: event.target.value.toLowerCase()});
        this.props.onSearch(this.state.searchValue);
        if (this.state.searchValue) {
            location = {
                pathname: this.props.history.location.pathname,
                search: `${event.target.value.toLowerCase()}`
            }
        }
        history.push(location);
    };


    render() {
        return (
                <Navbar bg="light" variant="light" position="sticky-top" expand="true" className="navbar">
                    <Navbar.Brand href="#home">React Product List</Navbar.Brand>
                    <Input onChange={this.handleChange} value={this.state.searchValue} />
                </Navbar>
        )
    }

}

const mapDispatchToProps = (dispatch) => {
    return {
        onFetchProducts: () => {
            dispatch(fetchProducts());
        },
        onSearch: (query) => {
            dispatch(searchProducts(query));
        }
    }
};

Header.propTypes = {
    onFetchProducts: PropTypes.func.isRequired,
    onSearch: PropTypes.func.isRequired
};

export default withRouter(connect(null, mapDispatchToProps)(Header));