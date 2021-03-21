import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Home, About, User } from './pages';

const {data} = this.state;

class App extends Component {
  render() {
    return (
        <Router>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <form>
                    <input value={data} onChange={} />
                  </form>
                  <Link to="/user:name">User</Link>
                </li>
              </ul>
            </nav>

            <Route exact path='/' component={Home}/>
            <Route path='/about' component={About}/>
            <Route path='/user' render={() => <User user={data} />} />
          </div>
        </Router>
    );
  }
}

export default App;