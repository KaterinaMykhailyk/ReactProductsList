import React, {Component} from 'react';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

class Menu extends Component {
    render() {
        return (
                    <Col sm={3} xs={12}>
                        <Card style={{margin: "20px"}}>
                            <Card.Header style={{padding: "20px"}}>CATEGORIES</Card.Header>
                            <ListGroup>
                                <ListGroup.Item action href="#link1" style={{padding: "20px"}}>CATEGORY 1</ListGroup.Item>
                                <ListGroup.Item  action href="#link2" style={{padding: "20px"}}>CATEGORY 2</ListGroup.Item>
                                <ListGroup.Item  action href="#link3" style={{padding: "20px"}}>CATEGORY 3</ListGroup.Item>
                                <ListGroup.Item  action href="#link4" style={{padding: "20px"}}>CATEGORY 4</ListGroup.Item>
                                <ListGroup.Item  action href="#link5" style={{padding: "20px"}}>CATEGORY 5</ListGroup.Item>
                            </ListGroup>
                        </Card>
                    </Col>

        )
    }
}

export default Menu;