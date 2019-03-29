import React, {Fragment, Component} from 'react';
import Item from '../components/Item';
import {connect} from 'react-redux';

class ItemsList extends Component {

    shouldComponentUpdate(nextProps) {
        return nextProps !== this.props;
    }

    render() {
        const {items, isFetching, searchValue} = this.props;
        const itemsElements = searchValue.length !== false ? items.filter((item) => {
            return item.name.toLowerCase().includes(searchValue)
        }) : items;

        return (
            <Fragment>
                {
                    isFetching ? "waiting for products" :
                        <div className="products">
                            {itemsElements.map((item) => <Item product={item} key={item.asin}/>)}
                        </div>
                }
            </Fragment>

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

