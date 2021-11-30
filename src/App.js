import logo from './logo1.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Join <code>Our</code> Community.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          THE MUSE
        </a>
      </header>
      <h1>
        <p>See exclusive content from your favorite content creators.</p>
      </h1>
      <h1>
        <p>Here are our TOP Content Creators!</p>
      </h1>
        <div class="team-info">
            <img src="img-1.JPG" alt=""/>
            <h4>Pete Myers</h4>
             <p>Recording Artist/Producer</p>
        </div>
        <div class="team-info">
            <img src="img-2.jpg" alt="" width="500" height="500"/>
            <h4>Sarah Junyna</h4>
             <p>Singer/Songwriter</p>
        </div>
        <div class="team-info">
            <img src="img-3.jpg" alt="" width="500" height="600"/>
            <h4>Rob Hope</h4>
             <p>Guitarist</p>
        </div>
    </div>
  );
}

export default App;
