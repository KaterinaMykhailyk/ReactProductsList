import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {withRouter} from "react-router-dom";
import Input from '../components/Input';
import {fetchProducts, searchProducts} from "../actions";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

class Header extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            searchValue: ""
        }
    }

    componentDidMount() {
        this.props.onFetchProducts();
    }

    handleClick(event) {
        this.props.onSearch(this.state.searchValue);
    }

    handleChange(event) {
        let location;
        const {history} = this.props;
        this.setState({searchValue: event.target.value.toLowerCase()});
        this.props.onSearch(this.state.searchValue);

        if (this.state.searchValue) {
            console.log(this.props.history.location.pathname);
            location = {
                pathname: this.props.history.location.pathname,
                search: `${event.target.value.toLowerCase()}`
            }
        }

        history.push(location);
    };


    render() {
        console.log(this.props);
        return (
            <Container fluid="true">
                <Navbar bg="light" variant="light" position="sticky-top" expand="true">
                    <Navbar.Brand href="#home">React Product List</Navbar.Brand>
                    <Input onChange={this.handleChange} value={this.state.searchValue}
                           onClick={this.handleClick}/>
                </Navbar>
            </Container>
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
