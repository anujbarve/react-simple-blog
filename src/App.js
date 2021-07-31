import Navbar from './Navbar.js';
import Home from './Home';

function App() {

  // const title = "Hello World";
  // const subtitle = "Welcome to the blog";
  // const randnum = Math.random()*100;
  // const rand = randnum.toFixed(0);

  return (
    <div className="App">
      <Navbar></Navbar>
      <div className="content">
      <Home></Home>
      {/* <h1>{title}</h1>
      <p>{subtitle}</p>
      <p>{rand}</p> */}
      </div>
    </div>
  );
}

export default App;
