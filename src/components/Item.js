import React from 'react';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';

const Item = (props) => {
    const {product} = props;
    return (
        <Col xs={12} md={4}>
            <Card>
                <a href={product.link}>
                    <Card.Img src={product.img} className="product-item__image" rounded="true" fluid/>
                </a>
                <Card.Body>
                    <Card.Text>{product.name}</Card.Text>
                    <Button style={{marginRight: "10px"}} variant="info"
                            disabled>{product.price} {product.currency}</Button>
                    <Button variant="info" disabled>{product.bsr_category}</Button>
                </Card.Body>
            </Card>
        </Col>
    )
};

Item.propTypes = {
    product: PropTypes.object.isRequired,
};


export default Item;



