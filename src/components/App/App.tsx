import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { Router } from '../../router';
import { createStore } from '../../redux/app/store';
import { Container } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.sass';

const store = createStore();

export const App = () => (
    <Provider store={ store }>
        <Container className="App bg-dark text-info min-vh-100 min-vw-100 p-3">
            <BrowserRouter>
                <Router/>
            </BrowserRouter>
        </Container>
    </Provider>
);
