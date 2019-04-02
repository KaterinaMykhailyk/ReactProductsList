import React, {Component} from 'react';
import {connect} from 'react-redux';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import {setFilterCategory} from "../actions";

class Menu extends Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        this.props.onSetCategory(event.target.innerText);
    }

    render() {
        return (
            <Card style={{margin: "20px"}}>
                <Card.Header style={{padding: "20px"}}>CATEGORIES</Card.Header>
                <ListGroup>
                    <ListGroup.Item action href="#link1" style={{padding: "20px"}} onClick={this.handleClick} >All</ListGroup.Item>
                    <ListGroup.Item action href="#link2" style={{padding: "20px"}} onClick={this.handleClick} >Home & Kitchen</ListGroup.Item>
                    <ListGroup.Item action href="#link3" style={{padding: "20px"}} onClick={this.handleClick}>Sports & Outdoors</ListGroup.Item>
                    <ListGroup.Item action href="#link4" style={{padding: "20px"}} onClick={this.handleClick}>Health & Personal Care</ListGroup.Item>
                    <ListGroup.Item action href="#link5" style={{padding: "20px"}} onClick={this.handleClick}>Baby Products</ListGroup.Item>
                </ListGroup>
            </Card>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSetCategory: (category) => {
            dispatch(setFilterCategory(category));
        }
    }
};

export default connect(null, mapDispatchToProps)(Menu);