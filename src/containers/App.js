import React, {StrictMode, Component} from 'react';
import Header from '../containers/Header';
import ItemsList from "./ItemsList";

class App extends Component {
    render() {
        return (
                <StrictMode>
                    <Header />
                    <ItemsList />
                </StrictMode>
        )
    }
}

export default App;
