// import logo from './logo.svg';
import './App.css';
import logo from './assets/earth-wise-logo.png';
import NavBar from './components/navbar/navbar.js'
import CoverSection from './components/home/cover-section.js'

// const nav = navbar

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <CoverSection></CoverSection>
      {/* {navbar.NavBar} */}
    </div>
  );
}

export default App;
