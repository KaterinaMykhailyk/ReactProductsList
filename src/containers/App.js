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
                <Row>
                    <Header/>
                </Row>
                <Row style={{marginLeft: "-35px"}}>
                    <Col sm={3} xs={12}>
                        <Menu/>
                    </Col>
                    <Col style={{paddingTop: "19px"}}>
                        <ItemsList/>
                    </Col>
                </Row>
            </StrictMode>
        )
    }
}

export default App;
