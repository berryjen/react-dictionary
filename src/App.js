import logo from "./montenegro.png";
import './App.css';
import Footer from "./Footer";
import "./style.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <header className="App-header">
        <img src={logo} className="App-logo img-fluid" alt="logo" />
        
      </header>
        <main>
          <Dictionary />
        </main>
      <Footer />
      </div>
    </div>
  );
}

 
