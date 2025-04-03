
import './App.css';
import { Application } from './components/application/Application';
import { Counter } from './components/counter/counter';
import { MuiMode } from './components/mui/MuiMode';
import { AppProviders } from './providers/AppProviders';

function App() {
  return (
    <AppProviders>
  <div className="App">
     {/* <Application/> */}
     {/* <Counter/> */}
     <MuiMode/>
    </div>
    </AppProviders>
  
  );
}

export default App;
