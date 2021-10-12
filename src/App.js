import './App.css';
import './Components/styles.css'
import {BrowserRouter as Router , Route ,Switch } from 'react-router-dom'
import Footer from './Components/Footer';
import Header from './Components/Header';
import TopBar from './Components/TopBar';
import HeaderSub from './Components/Header-comp/HeaderSub';
import Home from './Components/Header-comp/Home';
import WashingPoints from './Components/Header-comp/WashingPoints';
import About from './Components/Header-comp/About';
import Contact from './Components/Header-comp/Contact';

function App() {
  return (
    <div>
      <Router>
      <TopBar/>
      <Header/>
      <Switch>
            <Route exact path='/' component={HeaderSub}/>
            <Route path='/about' component={About}/>
            <Route path='/Washing Points' component={WashingPoints}/>
            <Route path='/Contact' component={Contact}/>
      </Switch>
      <p>Body contents************</p>
      <Footer/>
      </Router>
    </div>
  );
}

export default App;
