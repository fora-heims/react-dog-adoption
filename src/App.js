import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Dogs from '../src/views/Dogs/Dogs.js';
import Dog from '../src/views/Dog/Dog.js';
import Admin from './views/Admin/Admin.js';
import Edit from './views/Edit/Edit.js';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/dogs/:id/edit">
            <Edit />
          </Route>
          <Route path="/dogs/:id">
            <Dog />
          </Route>
          <Route path="/admin">
            <Admin />
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
