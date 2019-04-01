import React, {Component} from 'react';
import Input from '../components/Input';
import {connect} from 'react-redux';
import {fetchProductsIfNeeded, searchProducts} from "../actions";
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

    handleClick(event) {
        this.props.onSearch(this.state.searchValue);
    }

    handleChange(event) {
        this.setState({searchValue: event.target.value.toLowerCase()});
    }

    componentDidMount() {
        this.props.onFetchProductsIfNeeded();
    }

    render() {
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
        onFetchProductsIfNeeded: () => {
            dispatch(fetchProductsIfNeeded());
        },
        onSearch: (query) => {
            dispatch(searchProducts(query));
        }
    }
};


export default connect(null, mapDispatchToProps)(Header);
