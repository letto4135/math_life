import './App.css';
import {Link} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <h1>Printable Math games for kids.</h1>
      <h2><Link className="app-anchor" to="/connect_four">Connect Four</Link></h2>
    </div>
  );
}

export default App;
