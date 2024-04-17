import './App.css';
import Routes from './Routes';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useRoutes } from 'react-router-dom';

function App() {

  let Router = useRoutes(Routes)
  return (
    <div className="App">
      <Header/>
      {Router}      
    </div>
  );
}

export default App;
