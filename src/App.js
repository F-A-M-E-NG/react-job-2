import React, { Component } from 'react';
import Header from './components/Header/Header'
import Content from './components/Content/Content'
import Footer from './components/Footer/Footer'
import './HTWF/scripts/flexslider/flex.css'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div>
        <Router>
        <Header/>
          <Switch>
            <Route exact path='/' component={Content}/>
          </Switch>
          <Footer/>
        </Router>
      </div>
    );
  }
}

export default App;
