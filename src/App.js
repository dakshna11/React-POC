import './App.css';
import './Components/styles.css'
import Footer from './Components/Footer';
import Header from './Components/Header';
import TopBar from './Components/TopBar';
import HeaderSub from './Components/Header-comp/HeaderSub';

function App() {
  return (
    <div>
      <TopBar/>
      <Header/>
      <HeaderSub/>
      <h1>Body contents</h1>
      <Footer/>
    </div>
  );
}

export default App;
