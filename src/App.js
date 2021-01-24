import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Admin from './pages/app-router/AppRouter';

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' component={Admin}></Route>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
