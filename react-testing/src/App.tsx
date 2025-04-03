import './App.css'
import { Application } from './components/application/Application'
import { CounterTwo } from './components/counter-two/CounterTwo'
import { Counter } from './components/counter/counter'
import { MuiMode } from './components/mui/MuiMode'
import { AppProviders } from './providers/AppProviders'

function App() {
  return (
    <AppProviders>
      <div className="App">
        {/* <Application/> */}
        {/* <Counter/> */}
        {/* <MuiMode/> */}
        <CounterTwo count={1} />
      </div>
    </AppProviders>
  )
}

export default App
