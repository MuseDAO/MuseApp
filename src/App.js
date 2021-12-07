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
            <h4><a href="https://app.unlock-protocol.com/checkout?redirectUri=https%3A%2F%2Fdry-firefly-0619.on.fleek.co%2F&paywallConfig=%7B%22locks%22%3A%7B%220x91AEa22A43138C5B3ebFf0721986DF02af816b11%22%3A%7B%22network%22%3A4%7D%7D%2C%22messageToSign%22%3A%22Hello%20world%22%2C%22pessimistic%22%3Atrue%2C%22persistentCheckout%22%3Atrue%2C%22icon%22%3A%22https%3A%2F%2Flocksmith.unlock-protocol.com%2Flock%2F0x91AEa22A43138C5B3ebFf0721986DF02af816b11%2Ficon%22%7D" target="_blank">Pete Myers</a></h4>
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
