import './App.css'
import Header from './components/header/Header';
import Cart from './components/cart/Cart';
import Experience from './components/experience/Experience';
import Footer from './components/footer/Footer';


function App() {
  return (
    <div className="App">
      <Header/>
      <Cart/>
      <Experience/>
      <Footer/>
    </div>
  );
}

export default App;
