import {Learn,Home,About,Integration,Support} from "./pages/pages";
import Footer from './components/Footer'
import {BrowserRouter as Router,Switch,Route} from "react-router-dom"

function App() {
  return (
    <>
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/learn">
          <Learn />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/integration">
          <Integration />
        </Route>
        <Route path="/support">
          <Support />
        </Route>
      </Switch>
    </Router>
    <Footer />
    </>
  );
}

export default App;
