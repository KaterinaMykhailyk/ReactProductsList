import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import {setFilterCategory} from "../actions";

export class Menu extends Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        this.props.onSetCategory(event.target.innerText);
    }

    render() {
        return (
            <Row className="justify-content-end list-category">
                <Col xs={12} className="list-category__item">CATEGORIES</Col>
                <Col xs={12} onClick={this.handleClick} className="list-category__item"><Link to="/all">All</Link></Col>
                <Col xs={12} onClick={this.handleClick} className="list-category__item"><Link to="/home">Home & Kitchen</Link></Col>
                <Col xs={12} onClick={this.handleClick} className="list-category__item"><Link to="/sports">Sports & Outdoors</Link></Col>
                <Col xs={12} onClick={this.handleClick} className="list-category__item"><Link to="/health">Health & Personal Care</Link></Col>
                <Col xs={12} onClick={this.handleClick} className="list-category__item"><Link to="/baby">Baby Products</Link></Col>
            </Row>
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