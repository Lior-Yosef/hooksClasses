import logo from './logo.svg';
import './App.css';
import Home from "./Component/Home/Home.component"
import MassageProvider from './Context/Massage-context';

function App() {
  return (
    <div className="App">
      <MassageProvider>
        <Home/>
      </MassageProvider>
    </div>
  );
}

export default App;
