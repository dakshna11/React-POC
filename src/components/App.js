import '../components/styles/styles.css'
import {BrowserRouter as Router , Route ,Switch } from 'react-router-dom'
import Footer from './Footer';
import Header from './Header';
import TopBar from './TopBar';
import Home from './Header-comp/Home';
import WashingPoints from './Header-comp/WashingPoints';
import About from './Header-comp/About';
import Contact from './Header-comp/Contact';
import Price from './Header-comp/Price';
import Service from './Header-comp/Service';
import { Provider } from 'react-redux';
import {reducer as formReducer} from 'redux-form'
import { combineReducers, createStore } from 'redux';


const rootReducer = combineReducers({
  form:formReducer
})
const store = createStore(rootReducer)

function App() {
  window.onscroll = () => { 
    if  (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById("mybtn").style.display = "block";
    } else {
      document.getElementById("mybtn").style.display = "none";
    }
  };

// When the user clicks on the button, scroll to the top of the document
  const topFunction= () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  return 1
}


  return (
    <div>
      <Router>
      <TopBar/>
      <Header/>
      
      <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/About' component={About}/>
            <Route path='/Price' component={Price}/>
            <Route path='/Washing Points' component={WashingPoints}/>
            <Route path='/Contact' component={Contact}/>
            <Route path='/Service' component={Service}/>
      </Switch>
      <Footer/>
      <button onClick={topFunction} data-testid="btn" id="mybtn"><i className='fa fa-chevron-up'></i></button>
      </Router>
    </div>
  );
}

export default App;
