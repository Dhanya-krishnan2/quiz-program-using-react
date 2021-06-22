
import { BrowserRouter,BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import Header from './Components/Header'
import Home from './pages/Home/Home';
import Quiz from './pages/Quiz/Quiz';
import Result from './pages/Result/Result';

function App() {
  return (
    <BrowserRouter>
    <div className="app" style={{backgroundImage: 'url("quiz.jpg")'}} >
      <Header /> 
      <Switch>

      <Router path='/' exact>

      <Home />
      </Router>
      <Router path='/quiz' >

      <Quiz/>
      </Router>
      <Router path='/result' >

      <Result/>
      </Router>
      </Switch>
     
    </div>
    </BrowserRouter>
  );
}

export default App;
