import React, {Component} from 'react';
import Item from '../components/Item';
import {connect} from 'react-redux';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Spinner from 'react-bootstrap/Spinner';

class ItemsList extends Component {
    render() {
        const {items, isFetching, searchValue} = this.props;
        const itemsElements = searchValue.length !== false ? items.filter((item) => {
            return item.name.toLowerCase().includes(searchValue)
        }) : items;

        return (
            <Col style={{paddingTop: "19px"}}>
                <Row>
                    {
                        isFetching
                            ?
                            <Spinner animation="border" role="status">
                                <span className="sr-only">Loading...</span>
                            </Spinner>
                            :
                            itemsElements.map((item) => <Item product={item} key={item.asin}/>)
                    }
                </Row>
            </Col>

        )
    }
}

const mapStateToProps = (state) => {
    const {products} = state;
    let {isFetching, lastUpdated, items, searchValue} = products ||
    {
        isFetching: true,
        items: [],
        searchValue: ""
    };

    return {
        items,
        isFetching,
        lastUpdated,
        searchValue
    }
};

export default connect(mapStateToProps, null)(ItemsList);

