import './App.css';
import LeftHalfPage from './components/LeftHalfPage';
import Navbar from './components/Navbar';
function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />        
      </header> */}
  <LeftHalfPage />
  <Navbar />
    </div>
   
  );
}

export default App;
