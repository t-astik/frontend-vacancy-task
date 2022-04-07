import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Tokens from './Pages/Tokens'
import Token from './Pages/Token'
import Empty from './Pages/Empty'

import Menu from './components/Menu'

import './App.css'

const App = () => {
  
  return (
    <Router>
      <div className="app">        
        <Menu />

        <Switch>
          <Route path="/" exact>
            <Tokens />
          </Route>

          <Route path="/tokens" exact>
            <Tokens />
          </Route>

          <Route path="/tokens/:id">
            <Token/>
          </Route>

          <Route path="/search">
            <Empty title={'Поиск'} />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App;

