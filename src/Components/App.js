
import '../Components/styles/styles.css'
import {BrowserRouter as Router , Route ,Switch } from 'react-router-dom'
import Footer from './Footer';
import Header from './Header';
import TopBar from './TopBar';
import Home from './Header-comp/Home';
import WashingPoints from './Header-comp/WashingPoints';
import About from './Header-comp/About';
import Contact from './Header-comp/Contact';
import DemoCarousel from './Header-comp/Carousel';
import Price from './Header-comp/Price';
import Service from './Header-comp/Service';


function App() {
  window.onscroll = () => {scrollFunction()};

const scrollFunction=()=> {
  if  (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("mybtn").style.display = "block";
  } else {
    document.getElementById("mybtn").style.display = "none";
  }
}


const topFunction= () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


  return (
    <div>
      <Router>
      <TopBar/>
      <Header/>
      <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/about' component={About}/>
            <Route path='/Price' component={Price}/>
            <Route path='/Washing Points' component={WashingPoints}/>
            <Route path='/Contact' component={Contact}/>
            <Route path='/Service' component={Service}/>
      </Switch>
      <Footer/>
      <button onClick={topFunction} id="mybtn"><i className='fa fa-chevron-up'></i></button>
      </Router>
    </div>
  );
}
export default App;
