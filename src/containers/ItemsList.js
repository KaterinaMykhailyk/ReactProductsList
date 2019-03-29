import React, {Fragment, Component} from 'react';
import Item from '../components/Item';
import {connect} from 'react-redux';

class ItemsList extends Component {
    render() {
        const {items, isFetching} = this.props;
        console.log (this.props);
        return (
            <Fragment>
                {
                    isFetching ? "waiting for products" :
                        <div className="products">
                            {items.map((item) => <Item product={item} key={item.asin}/>)}
                        </div>
                }
            </Fragment>

        )
    }
}

const mapStateToProps = (state) => {
    const {products} = state;
    const {isFetching, lastUpdated, items} = products ||
    {
        isFetching: true,
        items: []
    };

    return {
        items,
        isFetching,
        lastUpdated
    }
};

export default connect(mapStateToProps, null)(ItemsList);

