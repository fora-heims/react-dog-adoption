import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Dogs from '../src/views/Dogs/Dogs.js';
import Dog from '../src/views/Dog/Dog.js';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/dogs/:id">
            <Dog />
          </Route>
          <Route path="/dogs">
            <Dogs />
          </Route>
          <Route path="/">
            <Dogs />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
