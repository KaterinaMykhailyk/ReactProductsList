import React, {StrictMode, Component} from 'react';
import Header from '../containers/Header';
import Menu from '../containers/Menu';
import ItemsList from "./ItemsList";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class App extends Component {
    render() {
        return (
            <StrictMode>
                <Row data-test='component-app'>
                    <Col sm={12} data-test='component-header'>
                        <Header/>
                    </Col>
                    <Col xs={12} md={4}  data-test='component-menu'>
                        <Menu/>
                    </Col>
                    <Col  xs={12} md={8}  data-test='component-items-list'>
                        <ItemsList/>
                    </Col>
                </Row>
            </StrictMode>
        )
    }
}

export default App;
