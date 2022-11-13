import './App.css';
import Footer from './components/footer/Footer';
import Navigation from './components/navigation/Navigation';
import Signup from './components/signup/Signup';

function App() {
  return (
    <div className="App">
      <Navigation></Navigation>
      <div className='body'>
        <Signup></Signup>
      </div>
      <Footer></Footer>
    </div>
  );
}


export default App;
