import logo from "./Kotor.jpg";
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
         <div className= "title">
      Dictionary
           </div>
        
      </header>
        <main>
          <Dictionary defaultKeyword="travel" />
        </main>
      <Footer />
      </div>
    </div>
  );
}

 
