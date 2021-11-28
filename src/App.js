import logo from './images/logo6.png';
import bgImg from './images/s_education3.jpg'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header" style={{backgroundImage: `url("${bgImg}")`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
      <div className="bg-gray-900 h-100vh w-100vw z-100 absolute border-2">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Integrated Restorations, LLC</h1>sdffs
      </div>
        
      </header>
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
