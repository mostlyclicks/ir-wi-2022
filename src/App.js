
import './App.css';
import Header from './components/Header'
import About from './components/About'
import Owner from './components/Owner'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">

      <Header />
      
      <main>
        <About />
        <Owner />
       
      </main>

    <Footer />




    </div>
  );
}

export default App;
