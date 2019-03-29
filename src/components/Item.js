import React from 'react';

const Item = (props) => {
    const {product} = props;
    return (
        <div className="product-item">
            <div>
                <a href={product.link} className="product-item__link">
                    <img src={product.img} className="product-item__image"/>
                </a>
            </div>
            <div className="product-item__details">
                <div>{product.name}</div>
                <div>{product.price} {product.currency}</div>
                <div>{product.bsr_category}</div>
            </div>
        </div>
    )
};

export default Item;



