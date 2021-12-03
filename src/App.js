
import './App.css';
import Header from './components/Header'
import About from './components/About'
import Services from './components/Services'
import Owner from './components/Owner'
import Form from './components/Form'

import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <About />
        <Services />
        <Owner />
        
      </main>
      <Form />
      <Footer />
    </div>
  );
}

export default App;
