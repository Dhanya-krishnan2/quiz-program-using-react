
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './Components/Header'

function App() {
  return (
    <BrowserRouter>
    <div className="app" style={{backgroundImage: 'url("quiz.jpg")'}} >
      <Header />
     
    </div>
    </BrowserRouter>
  );
}

export default App;
