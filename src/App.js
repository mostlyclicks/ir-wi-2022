
import './App.css';
import Header from './components/Header'

function App() {
  return (
    <div className="App">

      <Header />
      
      <main>
        <p>
          Site coming soon.
        </p>
        <p>
          Integrated Restorations, LLC<br/>
          228 S Park St<br/>
          Belleville, WI 53508<br/><br/>

          (608) 424-6997 (office)<br/>
          (608) 547-1713 (mobile)
        </p>
        <a
          className="App-link"
          href="https://www.facebook.com/Integratedrestorations"
          target="_blank"
          rel="noopener noreferrer"
        >
          Check us out on Facebook!
        </a>
      </main>




    </div>
  );
}

export default App;
