import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello Professor Dubey and TA Naveen. Thank you for the awesome semester
        </p>
        <p>
          Team Members are: Dheeraj, Akash, Sameer, Aditya, and Viraj
        </p>
        <a
          className="App-link"
          href="https://volgenau.gmu.edu/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Click to redirect to GMU Volgenau School of Engineering
        </a>
      </header>
    </div>
  );
}

export default App;
