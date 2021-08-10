import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MainPage from './Pages/MainPage';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/klose-box" component={ MainPage } />
      </Switch>
    </BrowserRouter>
  )
}

export default App;
