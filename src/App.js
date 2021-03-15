import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import './styles/App.css';

function App() {
  return (
    <Router>
     <Navbar />
     <Switch>
       <Route path='/' />
     </Switch>
    </Router>
  );
}

export default App;
