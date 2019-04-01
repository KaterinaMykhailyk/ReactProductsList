import React, {StrictMode, Component} from 'react';
import Header from '../containers/Header';
import Menu from '../containers/Menu';
import ItemsList from "./ItemsList";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class App extends Component {
    render() {
        return (
            <StrictMode>
                <Header/>
                <Container fluid="true">
                    <Row style={{marginLeft: "-35px"}}>
                        <Menu/>
                        <ItemsList/>
                    </Row>
                </Container>
            </StrictMode>
        )
    }
}

export default App;
