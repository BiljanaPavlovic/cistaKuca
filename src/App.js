import './App.css';
import Content from './layout/Content';
import Footer from './layout/Footer';
import Header from './layout/Header';
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="glass">

        <Router basename='/cistaKuca'>

          <Header />
          <hr />
          <Content />
          <hr />
          <Footer />
        </Router>
      </div>
      <div class="circle1"></div>
      <div class="circle2"></div>
    </div>
  );
}

export default App;
