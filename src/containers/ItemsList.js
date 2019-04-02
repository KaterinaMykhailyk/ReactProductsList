import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Row from 'react-bootstrap/Row';
import Spinner from 'react-bootstrap/Spinner';
import Item from '../components/Item';

class ItemsList extends Component {

    render() {
        const {items, isFetching, searchValue, category} = this.props;

        const itemsElements = items.filter((item) => {
            return item.name.toLowerCase().includes(searchValue)
        });

        const filteredItemsElements = itemsElements.filter( (item) => {
            if (category === "All") {
                return item;
            }
            else {
                return item.bsr_category === category
            }
        });

        const itemsToShow = filteredItemsElements.map((item) => <Item product={item} key={item.asin} />);

        return (
            <Row>
                {
                    isFetching
                        ?
                        <Spinner animation="border" role="status">
                            <span className="sr-only">Loading...</span>
                        </Spinner>
                        :
                        itemsToShow
                }
            </Row>
        )
    }
}

const mapStateToProps = (state) => {
    const {products} = state;
    let {isFetching, lastUpdated, items, searchValue, category} = products ||
    {
        isFetching: true,
        items: [],
        searchValue: "",
        category: "All"
    };

    return {
        items,
        isFetching,
        lastUpdated,
        searchValue,
        category
    }
};

ItemsList.propTypes = {
    items: PropTypes.array.isRequired,
    isFetching: PropTypes.bool.isRequired,
    searchValue: PropTypes.string.isRequired
};


export default connect(mapStateToProps, null)(ItemsList);

