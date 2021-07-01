import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { SearchProvider } from './providers/search'

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <SearchProvider>
            <Home />  
          </SearchProvider>
        </Route>
      </Switch>
    </Router>
  );
}
