import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { Create } from './pages/Create'
import { NotFound } from './pages/NotFound'
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

        <Route exact path="/create">
          <Create />
        </Route>

        <Route exact path="/notFound">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}
